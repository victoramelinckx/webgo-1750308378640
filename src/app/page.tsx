
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Tienda Online en 24 Horas" subheadline="Transforma recomendaciones en ventas digitales con nuestro servicio rápido y soporte 24/7." cta1="Comienza Ahora" />
<How step1Title="Contacta WebGo" step1Desc="Agenda una sesión para conocer tu negocio." step2Title="Web en 24h" step2Desc="Recibe tu sitio de ventas digitalizado rápido." step3Title="Soporte continuo" step3Desc="Acceso a ayuda 24/7 para cualquier problema." />
<Aboutus headline="WebGo: Ventas digitales sin esfuerzo" subheadline="Digitalizamos tus ventas sin complicaciones y gestionamos tu sitio web por ti." beneficiotitulo1="Incremento Rápido" beneficio1="Aumenta ventas online sin tiempo extra." beneficiotitulo2="Gestión Total" beneficio2="Nos ocupamos de tu web completa." />
<Services heading="Aumenta tus Ventas Online en 24 Horas" description="Asdas aedada construye tu tienda online rápida y eficazmente." services={[{"name":"Desarrollo Rápido","icon":"bolt","description":"Web de ventas lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Optimizado","icon":"search","description":"Mejora tu visibilidad y atrae más clientes."},{"name":"Integración de Pagos","icon":"credit-card","description":"Configura pagos fáciles y seguros."},{"name":"Gestión de Contenido","icon":"edit","description":"Contenido atractivo que vende."},{"name":"Analítica Web","icon":"chart-line","description":"Datos para decisiones informadas."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en impresionantes realidades digitales con resultados excepcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender online si solo vendo por recomendación?","respuesta":"WebGo te ayuda a digitalizar tus ventas creando un sitio web atractivo y fácil de usar. Esto aumenta tu alcance a nuevos clientes que buscan tus productos en Internet, no solo por recomendación."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de asdas y aedada de WebGo?","respuesta":"Con el servicio asdas de WebGo, obtienes un sitio web optimizado por solo 1234. El servicio aedada te garantiza un diseño atractivo y funcionalidad completa, atrayendo más clientes y aumentando tus ventas en línea."},{"pregunta":"No tengo tiempo para gestionar un sitio web. ¿Qué soluciones ofrece WebGo?","respuesta":"WebGo se encarga de todo por ti. Diseñamos, gestionamos y optimizamos tu sitio web, permitiéndote concentrarte en tu negocio mientras nosotros nos ocupamos de atraer clientes online."},{"pregunta":"¿Por qué debería confiar en WebGo para mi presencia online?","respuesta":"WebGo tiene experiencia en transformar negocios tradicionales en exitosos negocios online. Te ofrecemos un servicio completo, desde la creación del sitio web hasta su gestión, asegurando que tu inversión genere resultados."},{"pregunta":"¿Cómo puedo estar seguro de que mi sitio web atraerá más clientes?","respuesta":"WebGo implementa estrategias de SEO y diseño centradas en el usuario para asegurarse de que tu sitio web sea visible y atractivo para tus clientes potenciales, aumentando así tus oportunidades de venta."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio hoy en Santiago" 
                      description="No pierdas más clientes. Con WebGo, digitaliza tus ventas fácilmente sin complicaciones. Precio: 1234."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
