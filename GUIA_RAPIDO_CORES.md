# Guia Rápido - Paleta DOMUS

## Cores da Paleta

```
Verde Oliva Profundo:  #3F4F2F  ■
Bronze/Dourado:       #B08A4F  ■
Areia Clara:          #F4F1EA  ■
Grafite Profundo:     #2F2F2F  ■
```

## Copiar e Colar

### CSS
```css
/* Paleta DOMUS */
:root {
    --domus-verde-oliva: #3F4F2F;
    --domus-bronze: #B08A4F;
    --domus-areia: #F4F1EA;
    --domus-grafite: #2F2F2F;
}
```

### HTML (inline styles)
```html
<!-- Verde Oliva -->
<div style="color: #3F4F2F;">Texto</div>
<div style="background: #3F4F2F;">Fundo</div>

<!-- Bronze -->
<div style="color: #B08A4F;">Texto</div>
<div style="background: #B08A4F;">Fundo</div>

<!-- Areia -->
<div style="background: #F4F1EA;">Fundo</div>

<!-- Grafite -->
<div style="color: #2F2F2F;">Texto</div>
```

## Quando Usar Cada Cor

| Cor | Quando Usar | Exemplos |
|-----|-------------|----------|
| **Verde Oliva #3F4F2F** | Elementos principais, dominantes | Logo, headers, títulos, botões primários, footer, bordas principais |
| **Bronze #B08A4F** | Detalhes, acentos, hover | Hover buttons, bordas secundárias, detalhes, status especiais |
| **Areia #F4F1EA** | Fundos, backgrounds | Body background, card backgrounds, seções de descanso visual |
| **Grafite #2F2F2F** | Texto, conteúdo | Parágrafos, labels, subtítulos, qualquer conteúdo legível |

## Do NOT (❌)

- ❌ Usar cores fora da paleta
- ❌ Aplicar gradientes
- ❌ Usar brilho/shine effects
- ❌ Misturar com verde #4e5c3a (cor antiga)
- ❌ Usar Bronze como fundo principal
- ❌ Bronze para textos longos
- ❌ Areia para textos (usar Grafite)

## DO (✅)

- ✅ Verde Oliva para elementos dominantes
- ✅ Bronze apenas para acentos e detalhes
- ✅ Areia como respiro visual
- ✅ Grafite para toda leitura
- ✅ Manter consistência
- ✅ Testar contraste (WCAG)
- ✅ Seguir as regras de ouro

## Aplicações Recomendadas

### Em Novo Código HTML
```html
<header style="background: #3F4F2F; color: white;">...</header>
<button style="background: #3F4F2F; color: white;">Clique</button>
<button style="background: #3F4F2F; color: white;">
  Clique aqui
</button>
<button:hover style="background: #B08A4F;">...</button:hover>

<div style="background: #F4F1EA;">
  <p style="color: #2F2F2F;">Conteúdo</p>
</div>
```

### Em Nova Classe CSS
```css
.primario {
    background: #3F4F2F;
    color: white;
}

.primario:hover {
    background: #B08A4F;
}

.destaque {
    border-left: 6px solid #B08A4F;
}

.fundo {
    background: #F4F1EA;
}

.texto {
    color: #2F2F2F;
}
```

## RGB Values (se necessário)

```
Verde Oliva:  rgb(63, 79, 47)
Bronze:       rgb(176, 138, 79)
Areia:        rgb(244, 241, 234)
Grafite:      rgb(47, 47, 47)
```

## RGBA (com transparência)

```css
/* Verde Oliva 50% */
rgba(63, 79, 47, 0.5)

/* Bronze 50% */
rgba(176, 138, 79, 0.5)

/* Areia 50% */
rgba(244, 241, 234, 0.5)

/* Grafite 50% */
rgba(47, 47, 47, 0.5)
```

## Dúvidas?

Consulte:
- `PALETA_DOMUS.md` - Documentação completa
- `RELATORIO_CORES_DOMUS.md` - Relatório de implementação
- `assets/css/style.css` - CSS implementado
- `contato.html` - Exemplo de aplicação

---

**Versão:** 1.0  
**Data:** 20 de Janeiro de 2026
