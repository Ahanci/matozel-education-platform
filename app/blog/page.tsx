import Link from "next/link";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MatÖzel - Eğitim ve Sınav Rehberi",
  description: "LGS, TYT, AYT sınav stratejileri, etkili ders çalışma teknikleri, veli rehberi ve yazılım eğitimi hakkında makaleler.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                MatÖzel Blog
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Sınav hazırlık stratejileri, etkili çalışma teknikleri ve eğitim dünyasından güncel içerikler
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Tümü
              </Link>
              {blogCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/kategori/${category.slug}`}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Öne Çıkan Yazı</h2>
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">MatÖzel</div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{blogCategories.find(c => c.slug === featuredPost.category)?.name}</Badge>
                      {featuredPost.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors text-balance">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-6 text-pretty">
                      {featuredPost.excerpt}
                    </CardDescription>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime} dk okuma</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Son Yazılar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Tag className="w-12 h-12 text-primary/30" />
                    </div>
                    <CardHeader>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {blogCategories.find(c => c.slug === post.category)?.name}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2 mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} dk</span>
                        </div>
                        <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                          Devamını Oku <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                  Sınav Başarınız İçin Profesyonel Destek
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
                  Deneyimli eğitmenlerimizle birebir özel ders ve sınav koçluğu hizmeti alın. 
                  İlk ders ücretsiz!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/iletisim"
                    className="px-8 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
                  >
                    20 dk Deneme Dersi
                  </Link>
                  <Link
                    href="/sinav-koclugu"
                    className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
                  >
                    Sınav Koçluğu
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
