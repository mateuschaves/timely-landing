# Screenshots do Aplicativo

Coloque suas screenshots do aplicativo Timely nesta pasta.

## Formatos Recomendados

- **Formato**: PNG ou JPG
- **Resolução**: Ideal para mobile apps (ex: 390x844 para iPhone, ou proporções similares)
- **Tamanho**: Otimize as imagens para web (recomendado: menos de 500KB por imagem)

## Como Adicionar

1. Adicione suas imagens nesta pasta com nomes descritivos:
   - `screenshot1.png`
   - `screenshot2.png`
   - `screenshot3.png`

2. Em seguida, atualize o arquivo `app/page.tsx` na seção de screenshots, substituindo os placeholders por:

```tsx
import Image from 'next/image'

// Dentro do grid de screenshots:
<Image
  src="/images/screenshot1.png"
  alt="Tela inicial do Timely"
  width={300}
  height={600}
  className="w-full h-full object-cover"
/>
```

## Dicas

- Use nomes descritivos para os arquivos
- Otimize as imagens antes de fazer upload (ferramentas como TinyPNG ou ImageOptim)
- Mantenha proporções consistentes entre as imagens
