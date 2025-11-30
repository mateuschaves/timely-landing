export default function TermosPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Termos de Uso
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao acessar e usar o aplicativo Timely - Registro de Horas, você concorda em cumprir 
              e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com 
              qualquer parte destes termos, não deve usar o aplicativo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Descrição do Serviço
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Timely é um aplicativo desenvolvido para permitir que os usuários registrem e 
              gerenciem suas horas de trabalho. O aplicativo oferece funcionalidades para 
              acompanhamento de tempo, geração de relatórios e outras ferramentas relacionadas 
              ao gerenciamento de horas trabalhadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Uso do Aplicativo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você concorda em usar o Timely apenas para fins legais e de acordo com estes termos. 
              Você não deve:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Usar o aplicativo de forma que viole qualquer lei ou regulamento aplicável</li>
              <li>Tentar acessar não autorizado a qualquer parte do aplicativo ou seus sistemas relacionados</li>
              <li>Interferir ou interromper a operação do aplicativo</li>
              <li>Usar o aplicativo para qualquer propósito ilegal ou não autorizado</li>
              <li>Reproduzir, duplicar, copiar ou revender qualquer parte do aplicativo</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Conta de Usuário
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para usar certos recursos do Timely, você pode precisar criar uma conta. Você é 
              responsável por manter a confidencialidade das informações da sua conta, incluindo 
              sua senha. Você concorda em ser responsável por todas as atividades que ocorrem 
              sob sua conta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Privacidade e Proteção de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Respeitamos sua privacidade e protegemos seus dados pessoais de acordo com nossa 
              Política de Privacidade. Ao usar o Timely, você concorda com a coleta e uso de 
              informações conforme descrito na Política de Privacidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Propriedade Intelectual
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo o conteúdo do aplicativo Timely, incluindo mas não limitado a textos, gráficos, 
              logotipos, ícones, imagens, clipes de áudio e software, é propriedade da empresa ou 
              de seus fornecedores de conteúdo e é protegido por leis de direitos autorais e outras 
              leis de propriedade intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Limitação de Responsabilidade
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Timely é fornecido "como está" e "conforme disponível". Não garantimos que o 
              aplicativo será ininterrupto, livre de erros ou que todos os defeitos serão corrigidos. 
              Não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais 
              ou consequenciais resultantes do uso ou incapacidade de usar o aplicativo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Modificações dos Termos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reservamos o direito de modificar estes termos a qualquer momento. As modificações 
              entrarão em vigor imediatamente após a publicação. É sua responsabilidade revisar 
              periodicamente estes termos para estar ciente de quaisquer alterações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Rescisão
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reservamos o direito de encerrar ou suspender sua conta e acesso ao aplicativo a 
              qualquer momento, sem aviso prévio, por qualquer motivo, incluindo, mas não limitado 
              à violação destes termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Lei Aplicável
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem 
              consideração às disposições de conflitos de leis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através 
              dos canais disponíveis no aplicativo ou através do nosso site.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
