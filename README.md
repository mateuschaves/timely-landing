# Timely - Site Institucional

Site institucional para o aplicativo Timely - Registro de Horas, desenvolvido com Next.js 14.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **App Router** - Roteamento do Next.js

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📸 Adicionando Screenshots

Para adicionar screenshots do aplicativo:

1. Crie a pasta `public/images/` (se não existir)
2. Adicione suas imagens nessa pasta
3. Atualize o componente `app/page.tsx` na seção de screenshots, substituindo os placeholders por componentes `Image` do Next.js:

```tsx
<Image
  src="/images/screenshot1.png"
  alt="Screenshot 1"
  width={300}
  height={600}
  className="w-full h-full object-cover"
/>
```

## 📄 Termos de Uso

A página de termos de uso está disponível em `/termos` e pode ser editada em `app/termos/page.tsx`.

## 🎨 Personalização

- **Cores**: Edite `tailwind.config.ts` para personalizar a paleta de cores
- **Conteúdo**: Edite `app/page.tsx` para modificar o conteúdo da página principal
- **Layout**: Os componentes Header e Footer estão em `components/Header.tsx` e `components/Footer.tsx`

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🌐 Deploy

Este projeto pode ser facilmente deployado em plataformas como:
- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify
- Outras plataformas que suportam Next.js
