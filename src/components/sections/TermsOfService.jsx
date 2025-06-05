import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const interpretMarkdownAndReturnJsx = ({markdown}) => {
  return markdown.split('\n').map((line, index) => {
    if (line.startsWith('**')) {
      return <strong key={index}>{line.slice(2, -2)}</strong>;
    }
    return <p key={index} className="mb-4">{line}</p>;
  });
};

const TermsOfService = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const terms = [
    {
      title: 'Política de Privacidad',
      content: `
**POLÍTICA DE PRIVACIDAD**
En esta Política de Privacidad encontrarás toda la información relativa al uso que hacemos de los datos personales que utilices para interactuar con nosotros como usuario.
Dispones de forma permanente de esta Política de Privacidad que puedes consultar cuando lo estimes oportuno.
Cualquier duda que te surja en la lectura de esta información no dudes en preguntarnos al email info@ibergenil.com

**¿Quiénes somos?**
Somos AMA BRAHMAN, S.L. con C.I.F B56759574 y domicilio en GRANADA (GRANADA), AVENIDA DEL SUR, 17 PLANTA 0, BAJO 2 España, titular de la web www.ibergenil.com y responsable del tratamiento de tus datos personales, de sus usos y de su protección.

No se ha designado Delegado de Protección de Datos (DPD), ya que no se cumplen los requisitos que lo hagan obligatorio.
El uso de los servicios del Sitio Web, así como la adquisición de cualquiera de los productos ofertados, supone tu aceptación como Cliente, sin reservas de ninguna clase, de todas las manifestaciones contenidas en esta Política de Privacidad y en las Condiciones Generales.
Tu registro en la web y el uso de sus servicios conlleva que los datos personales que hayas facilitado en el formulario de alta como Cliente pasarán a formar parte de ficheros para su tratamiento con la finalidad, legitimación, cesiones y periodos de conservación que se detalla a continuación, y que declaras conocer y aceptar al pulsar el botón de acción del formulario.

**¿Para qué finalidad usamos tus datos?**
Dependiendo de cómo interactúes en nuestra web, trataremos tus datos personales para las siguientes finalidades:

Gestionar tu registro y tu cuenta de cliente, gestionar tus adquisiciones, el pago de productos, sus posibles devoluciones y/o reclamaciones y el historial de tus compras.

Atender las consultas, sugerencias o solicitudes enviadas a través de nuestros
Cumplimiento de nuestras obligaciones fiscales o legales

**¿Qué datos personales te solicitaremos?**
Podemos tratar las siguientes categorías de datos:
Datos identificativos: nombre, apellidos, dirección, ciudad, número de casa, etc.

Datos de contacto: email, teléfono.

Datos de pago: tarjeta de crédito, cuenta bancaria (en función del método de pago).

Datos de envío: nombre, apellidos, dirección de entrega, teléfono, email del destinatario (cuando sea diferente).

Los datos marcados como obligatorios en formularios son necesarios para poder prestarte nuestros servicios.
En la Política de cookies podrás encontrar qué otro tipo de información recogeremos a través del uso de cookies.

Recuerda que todos los datos que te solicitemos como obligatorios son los mínimos necesarios para poder prestarte el servicio o permitirte el acceso a determinada funcionalidad de la web.
Si decides no facilitar estos datos es posible que no puedas completar tu registro o no podamos proporcionarte determinados servicios o funcionalidades.

**¿Por qué usamos tus datos?**
La legitimación para el tratamiento de tus datos proviene de que necesitamos tratarlos para ejecutar el contrato que aceptas con nosotros al registrarte y al disfrutar de nuestros servicios o funcionalidades.
Hay otras razones como nuestro interés en atender tus consultas o solicitudes y el consentimiento que nos prestas para poder enviarte nuestra información comercial.

**¿Cuánto tiempo conservamos tus datos?**
Tus datos personales serán conservados durante el tiempo que permanezca tu cuenta de usuario activa. Recuerda que puedes cancelarla en cualquier momento mediante solicitud al email info@ibergenil.com. Una vez cancelada la cuenta, tus datos personales se conservarán bloqueados durante el periodo exigido por la legislación fiscal para la prescripción de responsabilidades en el caso de que hayas efectuado alguna adquisición de productos.
En cualquier otro caso tus datos personales se conservarán durante un periodo de 3 meses desde tu decisión de cancelación, por si pudieran derivarse algún tipo de responsabilidades.
Una vez finalizados los plazos, los datos serán eliminados de nuestros registros.

**¿Con quién compartimos tus datos?**
Para el cumplimiento de las finalidades expresadas, tus datos personales serán comunicados a prestadores de servicios auxiliares que nos facilitan la gestión o nuestras obligaciones legales, tales como empresas de transporte, de asesoramientos fiscal y jurídico y de alojamiento web entre otras.
También cederemos tus datos personales a Organismos o Administraciones públicas a las que estemos obligados por exigencia legal.
Puedes solicitar una lista de estas empresas y organismo a través de nuestro email info@ibergenil.com

No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.
En caso de hacerlo en el futuro, se garantizará que se realiza bajo mecanismos de adecuación previstos por el RGPD (cláusulas contractuales tipo, decisiones de adecuación, etc.).

**¿Qué derechos tienes sobre tus datos personales?**
Con independencia de la justificación legal con la que hemos realizado el tratamiento de tus datos personales, tienes una serie de derechos que puedes ejercer ante AMA BRAHMAN, S.L., mediante comunicación al email info@ibergenil.com adjuntando copia del documento nacional de identidad.
- Derecho de acceso a tus datos que tenemos de ti.

- Derecho a la rectificación de los datos personales, en caso de que no resulten veraces.

- Derecho de que suprimamos tus datos en la medida en que ya no sean necesarios para la finalidad para los que necesitemos tratarlos o que ya no contemos con legitimación para hacerlo. Cuando ejerzas este derecho de supresión, bloquearemos tus datos personales para cualquier tipo de tratamiento durante el periodo de conservación que te hemos indicado más arriba. Y una vez transcurrido el mismo procederemos a su eliminación definitiva.

- Derecho a que limitemos el tratamiento de tus datos, lo que supone que en determinados casos puedas solicitarnos que suspendamos temporalmente el tratamiento de los datos o que los conservemos más allá del tiempo necesario cuando puedas necesitarlo.

- Derecho a solicitar la portabilidad de tus datos personales. Esto significa que tendrás derecho a recibir los datos personales que nos hayas facilitado en un formato estructurado, de uso común y legible por una máquina, para poder transmitirlo a otra entidad directamente, siempre que técnicamente sea posible. Así como a oponerte al tratamiento de tus datos cuando esté basado en el interés legítimo o en el consentimiento.

- También puedes presentar una reclamación ante la autoridad de control en materia de protección de datos, en particular, ante la Agencia Española de Protección de Datos.

Es posible que adaptemos o modifiquemos la información contenida en esta Política de Privacidad cuando lo estimemos conveniente o incorporemos nuevas funcionalidades en la plataforma que así lo exijan.

En caso de que lo hagamos, te lo notificaremos mediante un banner informativo en la propia web.

Te aconsejamos revises periódicamente esta Política de Privacidad.`,
      // downloadLink: '/docs/politica-privacidad.pdf'
    },
    {
      title: 'Aviso Legal',
      content: `
AMA BRAHMAN, S.L., en cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico, informa:
Que es titular del dominio y del sitio web www.ibergenil.com
Que sus datos identificativos son:
AMA BRAHMAN, S.L.
AVENIDA DEL SUR, 17 PLATA 0 BAJO 2
GRANADA (GRANADA)

Que se encuentra inscrita con el N.I.F. B56759574 en el Registro Mercantil de <<INDICAR DATOS DE LA INSCRIPCION REGISTRAL, TOMO, FOLIO, HOJA, ETC>>.

La utilización del sitio web otorga la condición de usuario e implica la plena aceptación a todas las disposiciones contenidas en este Aviso Legal y en la Política de Privacidad. Si el usuario no está de acuerdo con las condiciones aquí establecidas, debería desestimar el acceso y la utilización del sitio web.

El contenido del sitio web es propiedad de AMA BRAHMAN, S.L., y se prohíbe cualquier tipo de copia o reproducción de todo o parte del contenido sin autorización expresa de su propietario.

El usuario del sitio web se compromete a hacer un uso adecuado del mismo, a no emplearlo para prácticas contrarias a la ley o la buena fe y a no provocar daños en los sistemas físicos y lógicos de AMA BRAHMAN, S.L.

AMA BRAHMAN, S.L. no asume ninguna responsabilidad sobre los enlaces externos de terceros que pudieran incorporarse en el sitio web, al no tener ningún tipo de control sobre ellos, sobre sus contenidos, los servicios que presten o la forma en que éstos aparezcan.`,
      // downloadLink: '/docs/aviso-legal.pdf'
    },
    {
      title: 'Política de Cookies',
      content: `
**¿Utiliza esta web cookies?**
La web www.ibergenil.com no utiliza cookies propias ni de terceros.
No se emplean cookies técnicas, de personalización, de análisis, ni de publicidad.
Por tanto, al navegar por esta web no se almacenan ni acceden datos en el dispositivo del usuario, y no se realiza ningún tratamiento de datos personales a través de cookies.

**¿Qué son las cookies?**
Las cookies son pequeños archivos que las páginas web pueden almacenar en el navegador del usuario para recoger y recuperar información sobre su visita, como idioma preferido, hábitos de navegación o preferencias de usuario.
Dado que esta web no emplea ninguna de estas tecnologías, esta información se ofrece únicamente con fines informativos.

**¿Cambiará esto en el futuro?**
Si en algún momento esta web comienza a utilizar cookies, se mostrará el correspondiente aviso de cookies y se solicitará el consentimiento previo del usuario, salvo en el caso de las estrictamente necesarias para el funcionamiento de la página.
Para cualquier duda sobre esta política, puedes escribirnos a: info@ibergenil.com`,
      // downloadLink: '/docs/politica-cookies.pdf'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {terms.map((term, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                className="w-full text-left group transition-all duration-300"
              >
                <div className="flex justify-between items-center p-6 hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-bold text-gray-900">{term.title}</h3>
                  <div className="flex items-center gap-4">
                    {term.downloadLink && (
                      <a
                        href={term.downloadLink}
                        download
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Descargar archivo
                      </a>
                    )}
                    <ChevronDown
                      className={`w-8 h-8 text-yellow-500 transition-transform duration-300 ${expandedSection === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </button>

              {expandedSection === index && (
                <div className="p-8 border-t border-gray-100">
                  <div className="prose prose-lg max-w-none">
                    <div className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                      {interpretMarkdownAndReturnJsx({markdown: term.content})}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;