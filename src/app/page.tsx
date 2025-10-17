import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Monitor,
  ShoppingCart,
  Wrench,
  MessageSquare,
  CheckCircle2,
  Clock,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import blehhh from "./blehhpng.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={blehhh} alt="blehhh" width={24} height={24} />

            <span className="text-xl font-semibold text-foreground">
              IT-Kamut
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Palvelut
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Tietoa
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Yhteystiedot
            </a>
          </nav>
          <Button asChild>
            <a href="#contact">Ota yhteyttä</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
              Ammattitaitoista IT-tukea suoraan kotiisi
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Asiantuntevaa apua tietokoneisiin, laiteasennuksiin ja
              ostospäätöksiin - ohjelmistotekniikan opiskelijalta. Ilmaiset
              konsultoinnit kaikissa teknisissä kysymyksissä.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Varaa käynti</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Tutustu palveluihin</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Mihin voin auttaa
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kattavat IT-tukipalvelut tarpeidesi mukaan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Vianmääritys
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tietokone-, netti- ja ohjelmisto-ongelmat, virustenpoisto
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Asennus ja käyttöönotto
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Uusien laitteiden asennus, ohjelmistojen käyttöönotto,
                  verkkoasetukset ja oheislaitteet
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Ostoapu ja neuvonta
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Autan löytämään tarpeisiisi ja budjettiisi sopivat laitteet ja
                  komponentit
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Ilmainen konsultointi
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Saat asiantuntevaa neuvontaa mihin tahansa tekniseen
                  kysymykseen tai projektin suunnitteluun - veloituksetta
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Miksi valita IT-Kamut?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Kotikäynnit
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ei tarvetta kuljettaa laitteita tai käydä liikkeessä
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Ystävälliset hinnat
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Edulliset hinnat ja ilmainen konsultointi, jotta voit tehdä
                    fiksuja päätöksiä
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Ohjelmistotekniikan osaaminen
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    4. vuoden ohjelmistotekniikan opiskelija - vahva tekninen
                    osaaminen ja ongelmanratkaisukyky
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Rehelliset suosittelut
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Puolueetonta neuvontaa parhaista ja kustannustehokkaimmista
                    ratkaisuista tarpeisiisi
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Joustavat aikataulut
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ilta- ja viikonloppuajat sopimuksen mukaan
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Ei ylimäärästä jargonia
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tiedät mitä tehdään ja miksi - niin et maksa extraa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Tietoa minusta
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hei !👋 Olen Jarkko, 4. vuoden ohjelmistotekniikan opiskelija
              TAMK:lla, ja tarjoan IT-palveluita heille joilla ei ole joko
              aikaa, halua, tai osaamista itse tehdä. Olen vapaaehtoisena ollut
              Porvoon kaupungilla senioreita auttamassa tietokoneitten kanssa
              yhden kesän, myös perheen ja kaveriporukan nimetty IT-tukihenkilö
              jo vuosia🤭
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pidetään homma simppelinä ja siinä missä merkitystä, ei mitään
              tarkotuksetonta kauppausta
            </p>
          </div>
        </div>
      </section>

      {/* Service Limitations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Palvelurajaus
            </h3>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Parhaan mahdollisen palvelun takaamiseksi huomioithan, että en
                  tarjoa seuraavia palveluja:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>
                      Fyysisesti rikkoutuneiden PC-osien tai laitteistojen
                      korjausta
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>
                      Datan palautusta mekaanisesti vaurioituneista
                      tallennuslaitteista
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Puhekielinä vain Suomi ja Englanti</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Näihin erikoistuneisiin palveluihin voin kuitenkin suositella
                  luotettavia ammattilaisia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ota yhteyttä
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Onko jotakin mielessä? Ota yhteyttä ja saa ilmainen konsultointi.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-card-foreground">
                    Toiminta-alue
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Kotikäynnit Pirkanmaalla
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-card-foreground">
                    Aukioloajat
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Joustavat ajat - myös iltaisin
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-card-foreground">
                    Vastausaika
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yleensä 24 tunnin sisällä
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="border-2 border-primary/50 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg text-card-foreground">
                      Sähköposti
                    </h3>
                  </div>
                  <p className="text-2xl text-foreground font-bold mb-2">
                    yhteys@itkamut.fi
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Paras tapa tarkempiin kyselyihin
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/50 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg text-card-foreground">
                      Puhelin
                    </h3>
                  </div>
                  <p className="text-2xl text-foreground font-bold mb-2">
                    +358 40 123 4567
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Soita tai lähetä viesti nopeisiin kysymyksiin
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src={blehhh} alt="blehhh" width={20} height={20} />

              <span className="font-semibold text-card-foreground">
                IT-Kamut
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 IT-Kamut. Ammattimaista IT-tukea kotiisi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
