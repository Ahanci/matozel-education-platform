import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getRecentPosts, blogCategories } from "@/lib/blog-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return { title: "Yazı Bulunamadı | MatÖzel Blog" };
  }
  
  return {
    title: `${post.title} | MatÖzel Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(4).filter(p => p.slug !== slug);
  const category = blogCategories.find(c => c.slug === post.category);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Article Header */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-foreground">{post.title.slice(0, 30)}...</span>
              </nav>

              {/* Category & Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="default">{category?.name}</Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime} dakika okuma</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
                <div dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }} />
              </div>

              {/* Share & Navigation */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Paylaş:</span>
                    <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Paylaş">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Tüm Yazılar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <h2 className="text-2xl font-bold mb-4">
                    Bu konuda özel ders almak ister misiniz?
                  </h2>
                  <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                    Deneyimli eğitmenlerimizle birebir özel ders alarak sınav başarınızı garantileyin.
                  </p>
                  <Link
                    href="/iletisim"
                    className="inline-block px-8 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
                  >
                    20 dk Deneme Dersi Al
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">Diğer Yazılar</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {recentPosts.slice(0, 3).map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">
                          {blogCategories.find(c => c.slug === relatedPost.category)?.name}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                          Devamını Oku <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Simple markdown to HTML converter
function formatMarkdown(content: string): string {
  return content
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-12 mb-8">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 list-decimal">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\|.*\|/g, (match) => {
      const cells = match.split('|').filter(cell => cell.trim());
      return `<tr>${cells.map(cell => `<td class="border border-border px-4 py-2">${cell.trim()}</td>`).join('')}</tr>`;
    })
    .replace(/❌/g, '<span class="text-red-500">❌</span>')
    .replace(/✅/g, '<span class="text-green-500">✅</span>');
}
