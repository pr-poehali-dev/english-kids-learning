import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childAge: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время для согласования первого занятия.",
    });
    setFormData({ name: '', phone: '', childAge: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <span className="font-bold text-xl text-foreground">English Kids Club</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О преподавателе
            </button>
            <button onClick={() => scrollToSection('program')} className="text-sm font-medium hover:text-primary transition-colors">
              Программа
            </button>
            <button onClick={() => scrollToSection('format')} className="text-sm font-medium hover:text-primary transition-colors">
              Формат
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-secondary hover:bg-secondary/90">
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Английский для детей<br />
                <span className="text-primary">в игровом формате</span> 🎮
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Учим детей 3-10 лет говорить по-английски в комфортной и весёлой обстановке. 
                Без зубрёжки, только живое общение и игры!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg bg-secondary hover:bg-secondary/90"
                  onClick={() => scrollToSection('contact')}
                >
                  Пробное занятие за 500₽
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg"
                  onClick={() => scrollToSection('program')}
                >
                  Узнать больше
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">года опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">3-10</div>
                  <div className="text-sm text-muted-foreground">возраст лет</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">игровой формат</div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src="https://cdn.poehali.dev/projects/6c57c304-2c64-4c39-9fd9-f90791493b79/files/d1da885f-51de-4c55-a5b0-92566a5e0fb1.jpg"
                alt="Owl mascot"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Максимов Максим 👨‍🏫
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытный педагог с международной практикой и глубоким пониманием детской психологии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-primary" size={24} />
                </div>
                <CardTitle>Бакалавр</CardTitle>
                <CardDescription>Педагогика: английский и французский языки</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-secondary" size={24} />
                </div>
                <CardTitle>Магистр</CardTitle>
                <CardDescription>Менеджмент в сфере образования</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-accent" size={24} />
                </div>
                <CardTitle>Аспирантура</CardTitle>
                <CardDescription>Общая педагогика и психология</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <CardHeader>
                <Icon name="Plane" className="text-primary mb-2" size={32} />
                <CardTitle className="text-2xl">Международный опыт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Более 2 лет преподавал английский в частных международных школах Вьетнама. 
                  Прошёл стажировку в США, где изучил современные методики обучения.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-2">
              <CardHeader>
                <Icon name="Sparkles" className="text-secondary mb-2" size={32} />
                <CardTitle className="text-2xl">Онлайн-школа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Сейчас развиваю собственный проект онлайн-школы, где дети учатся английскому 
                  через игры, интерактивные задания и живое общение.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Программа обучения 📚
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Игровой подход и комфортная обстановка для эффективного изучения языка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/6c57c304-2c64-4c39-9fd9-f90791493b79/files/90c942c2-e5f1-4526-8d1d-17167bbbb212.jpg"
                alt="Learning concept"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <CardTitle>Игровой формат обучения</CardTitle>
                      <CardDescription className="mt-2">
                        Никакой зубрёжки! Учим язык через весёлые игры, песни, интерактивные задания и ролевые игры.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <CardTitle>Разговорная практика</CardTitle>
                      <CardDescription className="mt-2">
                        Главный фокус — на развитие навыка говорения. Дети учатся свободно выражать свои мысли на английском.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <CardTitle>Комфортная атмосфера</CardTitle>
                      <CardDescription className="mt-2">
                        Создаём безопасное пространство, где ребёнок не боится ошибаться и с удовольствием учится.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-purple-400 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <CardTitle>Индивидуальный подход</CardTitle>
                      <CardDescription className="mt-2">
                        Учитываем возраст, интересы и темп каждого ребёнка для максимального результата.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="format" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Формат занятий 🎯
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Групповые занятия онлайн для эффективного обучения в компании сверстников
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">Групповые занятия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Занятия проводятся в небольших группах, что позволяет детям учиться друг у друга 
                  и развивать коммуникативные навыки.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Baby" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl">Возраст 3-10 лет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Программы адаптированы для дошкольников и учеников начальной школы 
                  с учётом возрастных особенностей.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Video" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-2xl">Онлайн формат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Занятия проходят в удобное время не выходя из дома. Всё, что нужно — компьютер 
                  и интернет.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/6c57c304-2c64-4c39-9fd9-f90791493b79/files/fe805de3-b281-40a9-993a-3b5a2fd94ee7.jpg"
              alt="Kids learning"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Цены и пакеты 💰
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Доступные цены для качественного обучения вашего ребёнка
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-secondary shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ 🎉
              </div>
              <CardHeader className="text-center pt-12 pb-8">
                <CardTitle className="text-5xl font-bold mb-4">
                  Пробное занятие
                </CardTitle>
                <div className="text-6xl font-bold text-secondary mb-4">
                  500₽
                </div>
                <CardDescription className="text-lg">
                  за одного студента
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <span className="text-muted-foreground">Полноценное занятие длительностью 45 минут</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <span className="text-muted-foreground">Знакомство с методикой и форматом обучения</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <span className="text-muted-foreground">Оценка уровня знаний ребёнка</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <span className="text-muted-foreground">Рекомендации по дальнейшему обучению</span>
                </div>
                
                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full text-lg bg-secondary hover:bg-secondary/90"
                    onClick={() => scrollToSection('contact')}
                  >
                    Записаться на пробное занятие
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                💡 После пробного занятия вы сможете выбрать подходящий пакет регулярных занятий
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Записаться на занятие 📝
            </h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для согласования времени первого занятия
            </p>
          </div>

          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childAge">Возраст ребёнка *</Label>
                  <Input
                    id="childAge"
                    type="number"
                    min="3"
                    max="10"
                    placeholder="От 3 до 10 лет"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем ребёнке, его интересах, опыте изучения английского..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">Или свяжитесь со мной напрямую:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="tel:+79065729991">
                  <Icon name="Phone" size={20} />
                  +7 (906) 572-99-91
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://t.me/MaximovMaksim" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} />
                  Telegram
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://wa.me/79065729991" target="_blank" rel="noopener noreferrer">
                  <Icon name="Phone" size={20} />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <span className="font-bold text-xl">English Kids Club</span>
          </div>
          <p className="text-white/70 mb-4">
            Онлайн-школа английского языка для детей 3-10 лет
          </p>
          <p className="text-white/50 text-sm">
            © 2025 English Kids Club. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;