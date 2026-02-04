export default function PrivacyPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introdução
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta Política de Privacidade descreve como o aplicativo Timely - Registro de Horas 
              ("nós", "nosso" ou "aplicativo") coleta, usa e protege suas informações pessoais 
              quando você utiliza nosso aplicativo móvel.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Levamos a sério a privacidade de nossos usuários e estamos comprometidos em proteger 
              seus dados pessoais de acordo com as leis aplicáveis de proteção de dados, incluindo 
              a Lei Geral de Proteção de Dados (LGPD) do Brasil.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Informações que Coletamos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Timely coleta as seguintes categorias de informações:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Dados de Registro de Tempo:</strong> Horários de entrada e saída, datas, 
                e informações relacionadas ao seu registro de horas trabalhadas.
              </li>
              <li>
                <strong>Configurações do Usuário:</strong> Preferências de horário de trabalho, 
                valor da hora trabalhada, e outras configurações personalizadas.
              </li>
              <li>
                <strong>Dados de Notificações:</strong> Preferências de notificações push e 
                tokens de dispositivo para envio de lembretes.
              </li>
              <li>
                <strong>Informações do Dispositivo:</strong> Tipo de dispositivo, sistema 
                operacional, versão do aplicativo, e identificadores únicos do dispositivo.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Como Usamos Suas Informações
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Fornecer e manter a funcionalidade do aplicativo</li>
              <li>Calcular suas horas trabalhadas e salário estimado</li>
              <li>Enviar notificações e lembretes conforme suas configurações</li>
              <li>Melhorar e personalizar sua experiência no aplicativo</li>
              <li>Analisar o uso do aplicativo para melhorias e correções</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Armazenamento e Segurança dos Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todos os seus dados são armazenados localmente no seu dispositivo. O Timely foi 
              projetado com privacidade em mente, e a maioria das suas informações permanece 
              exclusivamente no seu dispositivo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para 
              proteger suas informações pessoais contra acesso não autorizado, alteração, 
              divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
              para fins de marketing. Podemos compartilhar dados apenas nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Quando exigido por lei ou ordem judicial</li>
              <li>Para proteger nossos direitos legais ou a segurança dos usuários</li>
              <li>Com prestadores de serviços que nos auxiliam na operação do aplicativo, 
                  sujeitos a obrigações de confidencialidade</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Seus Direitos de Privacidade
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De acordo com a LGPD e outras leis de proteção de dados aplicáveis, você tem os 
              seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Direito de acesso aos seus dados pessoais</li>
              <li>Direito de correção de dados incompletos ou incorretos</li>
              <li>Direito de solicitar a exclusão de seus dados</li>
              <li>Direito de portabilidade dos dados</li>
              <li>Direito de revogar o consentimento a qualquer momento</li>
              <li>Direito de se opor ao processamento de dados</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para exercer qualquer um desses direitos, você pode utilizar as configurações 
              do aplicativo ou entrar em contato conosco através dos canais disponíveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Notificações Push
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Timely utiliza notificações push para enviar lembretes sobre horários de trabalho 
              e outras informações relevantes. Você pode gerenciar suas preferências de notificação 
              a qualquer momento através das configurações do aplicativo ou das configurações do 
              seu dispositivo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Privacidade de Menores
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Timely não é destinado a menores de 18 anos. Não coletamos intencionalmente 
              informações pessoais de crianças ou adolescentes. Se você acredita que podemos ter 
              coletado informações de um menor, entre em contato conosco imediatamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Alterações nesta Política de Privacidade
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você 
              sobre quaisquer alterações publicando a nova Política de Privacidade nesta página 
              e atualizando a data da "Última atualização". Recomendamos que você revise esta 
              política regularmente para se manter informado sobre como protegemos suas informações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de 
              Privacidade ou ao tratamento de seus dados pessoais, entre em contato conosco através 
              dos canais disponíveis no aplicativo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Conformidade com o Apple App Store
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta política de privacidade está em conformidade com os requisitos do Apple App Store 
              Review Guidelines, incluindo a seção 3.1.2 sobre privacidade. Estamos comprometidos em 
              manter a transparência sobre nossas práticas de coleta e uso de dados.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
