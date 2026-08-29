/* ============================================================================
 *  DADOS DO COMPÊNDIO
 *  ----------------------------------------------------------------------------
 *  Edite livremente este arquivo para adicionar, remover ou alterar itens.
 *  Basta manter a mesma estrutura de campos que a interface se adapta sozinha.
 *
 *  MONSTROS  -> { id, nome, tipo, ato, icone, nivel, stats:{...}, habilidades:[...], descricao }
 *  RELIQUIAS -> { id, nome, categoria, icone, raridade, efeito, descricao }
 * ========================================================================== */

const MONSTROS = [
  {
    id: "nibbit",
    nome: "Nibbit",
    tipo: "Fera",
    ato: "Ato 1",
    icone: "🐸",
    nivel: 2,
    stats: { vida: 46, forca: 12, defesa: 5, velocidade: 6 },
    habilidades: [
      { nome: "Coice (Butt)", descricao: "Ataque que causa 12 de dano (13 na Ascensão 9)." },
      { nome: "Golpe Hesitante (Hesitant Slice)", descricao: "Causa 6 de dano e ganha 5 de Bloqueio (7 de dano + 6 de Bloqueio na A9; 7 de dano + 8 de Bloqueio na A8)." },
      { nome: "Sibilo (Hiss)", descricao: "Fortalece a si mesmo, ganhando 2 de Força (3 de Força na A9)." },
      { nome: "Ciclo Fixo", descricao: "Depois do movimento de abertura, repete sempre a ordem: Coice → Golpe Hesitante → Sibilo. Sozinho, abre com Coice. Em dupla, o da frente abre com Golpe Hesitante e o de trás com Sibilo." },
    ],
    descricao: "Inimigo comum encontrado no Matagal (Ato 1) de Slay the Spire 2. Aparece sozinho na versão fraca ou em dupla na versão normal. Tem 42–46 de vida (44–48 a partir da Ascensão 8). Como segue um padrão de ataque totalmente previsível, o desafio está em planejar o Bloqueio para o Coice e decidir se vale a pena deixá-lo empilhar Força com o Sibilo.",
  },
  {
    id: "leaf-slime-s",
    nome: "Limo de Folha (P)",
    tipo: "Limo",
    ato: "Ato 1",
    icone: "🟢",
    nivel: 1,
    stats: { vida: 15, forca: 3, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Investida (Tackle)", descricao: "Causa 3 de dano (4 na Ascensão 8)." },
      { nome: "Gosma (Goop)", descricao: "Embaralha 1 carta de status Slimed no seu monte de descarte." },
      { nome: "Alternância", descricao: "Escolhe Investida ou Gosma a cada turno, nunca repetindo o mesmo movimento duas vezes seguidas." },
    ],
    descricao: "Limo pequeno do Matagal (Ato 1). Os Slimes vêm em quatro variedades (dois Leaf, dois Twig, cada um em tamanho P e M); este é o Limo de Folha pequeno, um dos inimigos mais fracos do início. 11–15 de vida (12–16 na A8).",
  },
  {
    id: "shrinker-beetle",
    nome: "Besouro Encolhedor",
    tipo: "Inseto",
    ato: "Ato 1",
    icone: "🪲",
    nivel: 3,
    stats: { vida: 40, forca: 13, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Encolhedor (Shrinker)", descricao: "Aplica Encolher por 2 turnos (não acumula), reduzindo o dano dos seus ataques." },
      { nome: "Mastigada (Chomp)", descricao: "7 de dano (8 na A8)." },
      { nome: "Pisão (Stomp)", descricao: "13 de dano (14 na A8)." },
    ],
    descricao: "Inseto do Matagal (Ato 1). Sempre abre com Encolhedor e depois alterna Mastigada e Pisão. Osty não é afetado por Encolher e causa dano cheio. 38–40 de vida (40–42 na A8).",
  },
  {
    id: "fuzzy-wurm-crawler",
    nome: "Verme Peludo Rastejante",
    tipo: "Verme",
    ato: "Ato 1",
    icone: "🐛",
    nivel: 4,
    stats: { vida: 57, forca: 11, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Gosma Ácida (Acid Goop)", descricao: "4 de dano (6 na A8). Escala com a Força acumulada — chega a 11 de dano depois do primeiro Inalar." },
      { nome: "Inalar (Inhale)", descricao: "Ganha 7 de Força, que permanece nos ciclos seguintes." },
      { nome: "Ciclo", descricao: "Repete: Gosma Ácida → Inalar → Gosma Ácida." },
    ],
    descricao: "Verme do Matagal (Ato 1). O dano cresce a cada ciclo por causa da Força ganha com Inalar. 55–57 de vida (58–59 na A8).",
  },
  {
    id: "inklet",
    nome: "Inklet",
    tipo: "Aberração",
    ato: "Ato 1",
    icone: "🖋️",
    nivel: 2,
    stats: { vida: 17, forca: 10, defesa: 0, velocidade: 9 },
    habilidades: [
      { nome: "Soco (Jab)", descricao: "3 de dano (4 na A8)." },
      { nome: "Soco Girado (Windup Punch)", descricao: "2 de dano ×3 (3×3 na A8)." },
      { nome: "Olhar Perfurante (Piercing Gaze)", descricao: "10 de dano (11 na A8)." },
      { nome: "Escorregadio (Slippery 1)", descricao: "Power inicial. Aparece sempre em grupos de três; alterna entre Soco e um dos outros golpes." },
    ],
    descricao: "Aberração do Matagal (Ato 1), sempre em trio. Uma das mensagens de morte de Vantom sugere que Inklets são criaturas transformadas em monstros por ele. 11–17 de vida (12–18 na A8).",
  },
  {
    id: "fogmog",
    nome: "Fogmog",
    tipo: "Aberração",
    ato: "Ato 1",
    icone: "🌫️",
    nivel: 4,
    stats: { vida: 74, forca: 14, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Esporos Ilusórios (Illusory Spores)", descricao: "Abertura: invoca um Olho com Dentes (Eye With Teeth)." },
      { nome: "Pancada (Thwack)", descricao: "8 de dano (9 na A8) e ganha 1 de Força." },
      { nome: "Cabeçada (Headbutt)", descricao: "14 de dano (16 na A8)." },
      { nome: "Padrão", descricao: "Abre com invocação + Pancada. Depois alterna Pancada e Cabeçada, nunca repetindo o mesmo golpe." },
    ],
    descricao: "Aberração do Matagal (Ato 1). 74 de vida (78 na A8).",
  },
  {
    id: "eye-with-teeth",
    nome: "Olho com Dentes",
    tipo: "Aberração",
    ato: "Ato 1",
    icone: "👁️",
    nivel: 3,
    stats: { vida: 6, forca: 0, defesa: 0, velocidade: 7 },
    habilidades: [
      { nome: "Distrair (Distract)", descricao: "Todo turno: embaralha 3 cartas Atordoado (Dazed) no seu descarte." },
      { nome: "Ilusão (Illusion)", descricao: "Ao morrer, revive no turno seguinte com a vida cheia." },
    ],
    descricao: "Lacaio invocado pelo Fogmog no Matagal (Ato 1). Um dos poucos inimigos do jogo incapazes de causar dano — o incômodo é o acúmulo de cartas Atordoado. 6 de vida.",
  },
  {
    id: "mawler",
    nome: "Mawler",
    tipo: "Fera",
    ato: "Ato 1",
    icone: "🦷",
    nivel: 4,
    stats: { vida: 72, forca: 14, defesa: 0, velocidade: 7 },
    habilidades: [
      { nome: "Garra (Claw)", descricao: "4 de dano ×2 (5×2 na A8). Abre sempre com este golpe." },
      { nome: "Rasgar (Rip and Tear)", descricao: "14 de dano (16 na A8)." },
      { nome: "Rugido (Roar)", descricao: "Aplica 3 de Vulnerável. Só uma vez por combate." },
    ],
    descricao: "Fera do Matagal (Ato 1). Depois da Garra inicial escolhe um golpe ao acaso, sem repetir. Nome e aparência referenciam A Bocarra (The Maw) do primeiro Slay the Spire. 72 de vida (76 na A8).",
  },
  {
    id: "snapping-jaxfruit",
    nome: "Jaxfruta Mordedora",
    tipo: "Planta",
    ato: "Ato 1",
    icone: "🥭",
    nivel: 3,
    stats: { vida: 33, forca: 9, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Orbe de Energia (Energy Orb)", descricao: "Todo turno: 3 de dano e ganha 2 de Força (na A8, 4–9 de dano e 2 de Força)." },
    ],
    descricao: "Planta do Matagal (Ato 1). Só faz um movimento, mas a Força acumulada faz o dano crescer rápido. 31–33 de vida (34–36 na A8).",
  },
  {
    id: "slithering-strangler",
    nome: "Estrangulador Rastejante",
    tipo: "Fera",
    ato: "Ato 1",
    icone: "🐍",
    nivel: 4,
    stats: { vida: 55, forca: 12, defesa: 5, velocidade: 8 },
    habilidades: [
      { nome: "Constrição (Constrict)", descricao: "Aplica 3 de Constrição — no fim de cada turno você toma dano igual ao acúmulo enquanto ela viver." },
      { nome: "Pancada (Thwack)", descricao: "7 de dano (8 na A8) e ganha 5 de Bloqueio." },
      { nome: "Chicotada (Lash)", descricao: "12 de dano (13 na A8)." },
      { nome: "Padrão", descricao: "Abre com Constrição, depois: Constrição → (Chicotada ou Pancada, 50%) → Constrição → …" },
    ],
    descricao: "Fera do Matagal (Ato 1). A Constrição acumula e sangra você a cada turno; derrubá-la rápido é a prioridade. 53–55 de vida (54–56 na A8).",
  },
  {
    id: "vine-shambler",
    nome: "Trôpego de Trepadeiras",
    tipo: "Planta",
    ato: "Ato 1",
    icone: "🌿",
    nivel: 4,
    stats: { vida: 61, forca: 16, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Golpe Duplo (Swipe)", descricao: "6 de dano ×2 (7×2 na A8)." },
      { nome: "Trepadeiras (Grasping Vines)", descricao: "8 de dano (9 na A8) e aplica 1 de Enredado." },
      { nome: "Mordida (Chomp)", descricao: "16 de dano (18 na A8)." },
      { nome: "Enredado (Tangled)", descricao: "Cartas afetadas custam +1 de energia incolor. Cartas sem ataque (ex.: Veneno Mortal) ignoram o custo extra." },
    ],
    descricao: "Planta do Matagal (Ato 1). Segue um ciclo fixo Golpe Duplo → Trepadeiras → Mordida. 61 de vida (64 na A8).",
  },
  {
    id: "cubex-construct",
    nome: "Constructo Cubex",
    tipo: "Construto",
    ato: "Ato 1",
    icone: "🧊",
    nivel: 4,
    stats: { vida: 65, forca: 9, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Carregar (Charge Up)", descricao: "Ganha 2 de Força." },
      { nome: "Rajada Repetida (Repeater Blast)", descricao: "7 de dano (8 na A8) e ganha 2 de Força." },
      { nome: "Rajada Expelida (Expel Blast)", descricao: "5 de dano ×2 (6×2 na A8) — golpe duplo, aproveita duplamente a Força acumulada." },
      { nome: "Artefato 1", descricao: "Anula o primeiro debuff aplicado nele." },
    ],
    descricao: "Construto do Matagal (Ato 1) e da Glória (Ato 3). Após a Carga inicial repete Rajada Repetida, Rajada Repetida, Rajada Expelida — e o dano dispara com a Força acumulada (chega a 6 até o 3º turno). 65 de vida (70 na A8).",
  },
  {
    id: "axe-raider",
    nome: "Saqueador com Machado",
    tipo: "Bandido",
    ato: "Ato 1",
    icone: "🪓",
    nivel: 2,
    stats: { vida: 22, forca: 12, defesa: 5, velocidade: 6 },
    habilidades: [
      { nome: "Golpe (Swing)", descricao: "5 de dano (6 na A8) e ganha 5 de Bloqueio (6 na A8)." },
      { nome: "Golpe Forte (Big Swing)", descricao: "12 de dano (13 na A8)." },
      { nome: "Padrão", descricao: "Ciclo: Golpe → Golpe → Golpe Forte." },
    ],
    descricao: "Bandido do Matagal (Ato 1). Encontros de Ruby Raiders trazem 3 dos 5 tipos, sem repetição. 20–22 de vida (21–23 na A8).",
  },
  {
    id: "assassin-raider",
    nome: "Saqueador Assassino",
    tipo: "Bandido",
    ato: "Ato 1",
    icone: "🗡️",
    nivel: 2,
    stats: { vida: 23, forca: 11, defesa: 0, velocidade: 11 },
    habilidades: [
      { nome: "Tiro Certeiro (Killshot)", descricao: "10 de dano (11 na A8), usado todo turno." },
    ],
    descricao: "Bandido do Matagal (Ato 1). Só ataca, sem parar. Faz parte dos Ruby Raiders (3 de 5 tipos por encontro). 18–23 de vida (19–24 na A8).",
  },
  {
    id: "brute-raider",
    nome: "Saqueador Brutamontes",
    tipo: "Bandido",
    ato: "Ato 1",
    icone: "💪",
    nivel: 2,
    stats: { vida: 33, forca: 8, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Pancada (Beat)", descricao: "7 de dano (8 na A8)." },
      { nome: "Palma (Clap)", descricao: "Ganha 3 de Força." },
      { nome: "Padrão", descricao: "Alterna Pancada e Palma, começando com Pancada." },
    ],
    descricao: "Bandido do Matagal (Ato 1). Empilha Força rápido com Palma. Faz parte dos Ruby Raiders. 30–33 de vida (31–34 na A8).",
  },
  {
    id: "crossbow-raider",
    nome: "Saqueador com Besta",
    tipo: "Bandido",
    ato: "Ato 1",
    icone: "🏹",
    nivel: 2,
    stats: { vida: 21, forca: 14, defesa: 3, velocidade: 7 },
    habilidades: [
      { nome: "Recarregar (Reload)", descricao: "Ganha 3 de Bloqueio." },
      { nome: "Fogo! (Fire!)", descricao: "14 de dano (16 na A8)." },
      { nome: "Padrão", descricao: "Alterna Recarregar e Fogo!, começando com Recarregar." },
    ],
    descricao: "Bandido do Matagal (Ato 1). Telegrafa o tiro grande ao recarregar. Faz parte dos Ruby Raiders. 18–21 de vida (19–22 na A8).",
  },
  {
    id: "tracker-raider",
    nome: "Saqueador Rastreador",
    tipo: "Bandido",
    ato: "Ato 1",
    icone: "🐕",
    nivel: 2,
    stats: { vida: 25, forca: 8, defesa: 0, velocidade: 9 },
    habilidades: [
      { nome: "Rastrear (Track)", descricao: "Aplica 2 de Frágil." },
      { nome: "Soltar os Cães (Unleash the Hounds)", descricao: "1 de dano ×8 (×9 na A8)." },
      { nome: "Padrão", descricao: "Abre com Rastrear, depois Soltar os Cães todo turno. Fraqueza reduz cada mordida a 0 por arredondamento." },
    ],
    descricao: "Bandido do Matagal (Ato 1). Os múltiplos golpes de 1 são anulados por Fraqueza. Faz parte dos Ruby Raiders. 21–25 de vida (22–26 na A8).",
  },
  {
    id: "seapunk",
    nome: "Seapunk",
    tipo: "Aquático",
    ato: "Ato 1",
    icone: "🤿",
    nivel: 3,
    stats: { vida: 46, forca: 11, defesa: 7, velocidade: 8 },
    habilidades: [
      { nome: "Chute do Mar (Sea Kick)", descricao: "11 de dano (13 na A8)." },
      { nome: "Chute Giratório (Spinning Kick)", descricao: "2 de dano ×4." },
      { nome: "Arroto de Bolha (Bubble Burp)", descricao: "Ganha 7 de Bloqueio e 1 de Força (8 e 2 na A8)." },
      { nome: "Ordem Fixa", descricao: "Ciclo previsível: Chute do Mar → Chute Giratório → Arroto de Bolha." },
    ],
    descricao: "Inimigo das Docas Submersas (Ato 1). Totalmente previsível. Aparece sozinho (fraco) ou ao lado de um Cultista Calcificado (normal). 44–46 de vida (47–49 na A8).",
  },
  {
    id: "sludge-spinner",
    nome: "Fiandeiro de Lodo",
    tipo: "Limo",
    ato: "Ato 1",
    icone: "🛢️",
    nivel: 3,
    stats: { vida: 39, forca: 11, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Jato de Óleo (Oil Spray)", descricao: "8 de dano (9 na A8) e aplica 1 de Fraqueza. Sempre no 1º turno." },
      { nome: "Baque (Slam)", descricao: "11 de dano (12 na A8)." },
      { nome: "Fúria (Rage)", descricao: "6 de dano (7 na A8) e ganha 3 de Força." },
    ],
    descricao: "Limo das Docas Submersas (Ato 1). Abre com Jato de Óleo e depois sorteia um dos três golpes, sem repetir. 37–39 de vida (41–42 na A8).",
  },
  {
    id: "toadpole",
    nome: "Girino-Sapo",
    tipo: "Anfíbio",
    ato: "Ato 1",
    icone: "🐡",
    nivel: 2,
    stats: { vida: 25, forca: 7, defesa: 0, velocidade: 8 },
    habilidades: [
      { nome: "Rodopio (Whirl)", descricao: "7 de dano (8 na A8)." },
      { nome: "Cuspe de Espinho (Spike Spit)", descricao: "3 de dano ×3; perde 2 de Espinhos." },
      { nome: "Eriçar (Spiken)", descricao: "Ganha 2 de Espinhos." },
      { nome: "Espinhos (Thorns)", descricao: "Ao ser atingido por um ataque, devolve dano." },
    ],
    descricao: "Anfíbio das Docas Submersas (Ato 1). Ciclo fixo Rodopio → Eriçar → Cuspe de Espinho; no encontro fraco, o da frente começa com Eriçar. Parece ser a forma larval do Sapo Espinhoso. 21–25 de vida (22–26 na A8).",
  },
  {
    id: "calcified-cultist",
    nome: "Cultista Calcificado",
    tipo: "Cultista",
    ato: "Ato 1",
    icone: "🗿",
    nivel: 3,
    stats: { vida: 41, forca: 11, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Encantamento (Incantation)", descricao: "Turno 1: ganha 2 de Ritual." },
      { nome: "Golpe Sombrio (Dark Strike)", descricao: "9 de dano (11 na A8), todo turno a partir do 2º." },
      { nome: "Ritual", descricao: "Ganha Força no fim do turno — o dano cresce sozinho." },
    ],
    descricao: "Cultista das Docas Submersas (Ato 1). \"OUR POWER IS UNMATCHED!\" Sempre usa Encantamento primeiro e depois Golpe Sombrio todo turno. 38–41 de vida (39–42 na A8).",
  },
  {
    id: "damp-cultist",
    nome: "Cultista Úmido",
    tipo: "Cultista",
    ato: "Ato 1",
    icone: "🐦",
    nivel: 3,
    stats: { vida: 53, forca: 9, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Encantamento (Incantation)", descricao: "Turno 1: ganha 5 de Ritual (6 no normal; 9 na A8)." },
      { nome: "Golpe Sombrio (Dark Strike)", descricao: "1 de dano (3 no normal; 9 na A8), todo turno a partir do 2º." },
    ],
    descricao: "Cultista das Docas Submersas (Ato 1). \"CAW! CAAAW\" Empilha muito Ritual e escala forte se não for derrubado logo. 51–53 de vida (52–54 na A8).",
  },
  {
    id: "living-fog",
    nome: "Névoa Viva",
    tipo: "Aberração",
    ato: "Ato 1",
    icone: "☁️",
    nivel: 5,
    stats: { vida: 80, forca: 9, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Gás Avançado (Advanced Gas)", descricao: "8 de dano (9 na A8) e aplica 1 de Enevoado (Smoggy). Sempre no 1º turno." },
      { nome: "Inchar (Bloat)", descricao: "5 de dano (6 na A8) e invoca 1 Bomba de Gás (7 de vida; explode por 8 e morre)." },
      { nome: "Explosão de Gás (Super Gas Blast)", descricao: "8 de dano (9 na A8)." },
      { nome: "Enevoado (Smoggy)", descricao: "Você só pode jogar 1 Habilidade por turno." },
    ],
    descricao: "Aberração das Docas Submersas (Ato 1). Abre com Gás Avançado e depois alterna Inchar e Explosão de Gás. 80 de vida (82 na A8).",
  },
  {
    id: "fossil-stalker",
    nome: "Espreitador Fóssil",
    tipo: "Fóssil",
    ato: "Ato 1",
    icone: "🦴",
    nivel: 4,
    stats: { vida: 53, forca: 12, defesa: 0, velocidade: 7 },
    habilidades: [
      { nome: "Agarrar (Latch)", descricao: "12 de dano (14 na A9)." },
      { nome: "Investida (Tackle)", descricao: "9 de dano (11 na A9) e aplica 1 de Frágil." },
      { nome: "Chicote (Lash)", descricao: "3 de dano ×2 (4×2 na A9)." },
      { nome: "Sugar (Suck)", descricao: "Começa com 3 acúmulos; ganha 3 de Força sempre que causa dano de ataque não bloqueado." },
    ],
    descricao: "Fóssil das Docas Submersas (Ato 1). Bloquear é essencial: cada golpe não bloqueado o deixa mais forte. Abre com Agarrar, depois 33% para cada golpe. 51–53 de vida (54–56 na A8).",
  },
  {
    id: "gremlin-merc",
    nome: "Gremlin Mercenário",
    tipo: "Bandido",
    ato: "Ato 1",
    icone: "👺",
    nivel: 4,
    stats: { vida: 49, forca: 8, defesa: 0, velocidade: 9 },
    habilidades: [
      { nome: "Me Dá (Gimme)", descricao: "7 de dano ×2 (8×2 na A8)." },
      { nome: "Esmagada Dupla (Double Smash)", descricao: "6 de dano ×2 (7×2 na A8) e aplica 2 de Fraqueza." },
      { nome: "Hehe", descricao: "8 de dano (9 na A8) e ganha 2 de Força." },
      { nome: "Roubo (Thievery)", descricao: "Rouba ouro. Ao morrer invoca um Fat Gremlin (foge com o ouro) e um Sneaky Gremlin (9 de dano por turno)." },
    ],
    descricao: "Bandido das Docas Submersas (Ato 1). Cicla três golpes e, ao cair, deixa dois gremlins — um que ataca e um que tenta fugir com seu ouro. 47–49 de vida (51–53 na A8).",
  },
  {
    id: "haunted-ship",
    nome: "Navio Assombrado",
    tipo: "Morto-vivo",
    ato: "Ato 1",
    icone: "🚢",
    nivel: 5,
    stats: { vida: 63, forca: 13, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Assombrar (Haunt)", descricao: "Embaralha 5 cartas Atordoado no seu descarte e aplica 3 de Fraqueza." },
      { nome: "Talho (Swipe)", descricao: "13 de dano (14 na A9)." },
      { nome: "Pisão (Stomp)", descricao: "4 de dano ×3 (5×3 na A9)." },
    ],
    descricao: "Navio morto-vivo das Docas Submersas (Ato 1). Abre com Assombrar e depois alterna Talho e Pisão, sempre começando com Talho. 63 de vida (67 na A8).",
  },
  {
    id: "punch-construct",
    nome: "Constructo Soqueador",
    tipo: "Construto",
    ato: "Ato 1",
    icone: "🥊",
    nivel: 4,
    stats: { vida: 55, forca: 14, defesa: 10, velocidade: 6 },
    habilidades: [
      { nome: "PRONTO (READY)", descricao: "Ganha 10 de Bloqueio." },
      { nome: "Soco Rápido (Fast Punch)", descricao: "5 de dano ×2 (6×2 na A8) e aplica 1 de Frágil." },
      { nome: "Soco Forte (Strong Punch)", descricao: "14 de dano (16 na A9)." },
      { nome: "Artefato 1", descricao: "Anula o primeiro debuff aplicado nele." },
    ],
    descricao: "Construto das Docas Submersas (Ato 1) e da Glória (Ato 3). Ciclo fixo PRONTO → Soco Rápido → Soco Forte. 55 de vida (60 na A8).",
  },
  {
    id: "sewer-clam",
    nome: "Molusco de Esgoto",
    tipo: "Molusco",
    ato: "Ato 1",
    icone: "🦪",
    nivel: 4,
    stats: { vida: 56, forca: 10, defesa: 8, velocidade: 4 },
    habilidades: [
      { nome: "Jato (Jet)", descricao: "10 de dano (11 na A8)." },
      { nome: "Pressurizar (Pressurize)", descricao: "Ganha 4 de Força. Cada uso faz o coral sobre ela crescer." },
      { nome: "Blindagem (Plating 8)", descricao: "Ganha Bloqueio no fim do seu turno (9 na A8); reduz 1 no início de cada turno." },
    ],
    descricao: "Molusco das Docas Submersas (Ato 1). Abre com Jato e depois alterna Pressurizar e Jato. 56 de vida (58 na A8).",
  },
  {
    id: "two-tailed-rat",
    nome: "Rato de Duas Caudas",
    tipo: "Fera",
    ato: "Ato 1",
    icone: "🐀",
    nivel: 2,
    stats: { vida: 21, forca: 8, defesa: 0, velocidade: 10 },
    habilidades: [
      { nome: "Arranhão (Scratch)", descricao: "8 de dano (9 na A8)." },
      { nome: "Mordida Infecciosa (Disease Bite)", descricao: "6 de dano (7 na A8)." },
      { nome: "Guincho (Screech)", descricao: "Aplica 1 de Frágil." },
      { nome: "Chamar Reforço (Call for Backup)", descricao: "Invoca outro Rato de Duas Caudas (1 vez por rato, até 3 no total)." },
    ],
    descricao: "Fera das Docas Submersas (Ato 1), sempre em trio. Apesar do nome, tem só uma cauda, bifurcada na ponta. Os Fungi Beasts do jogo original parecem ser corpos infectados desta espécie. 17–21 de vida (18–22 na A8).",
  },
  {
    id: "bowlbug-rock",
    nome: "Bowlbug (Pedra)",
    tipo: "Inseto",
    ato: "Ato 2",
    icone: "🥣",
    nivel: 4,
    stats: { vida: 48, forca: 15, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Cabeçada (Headbutt)", descricao: "15 de dano (16 na A9)." },
      { nome: "Tonto (Dizzy)", descricao: "Fica atordoado e não faz nada." },
      { nome: "Desequilibrado (Imbalanced)", descricao: "Se a Cabeçada for totalmente bloqueada, fica Atordoado e usa Tonto no turno seguinte, depois volta a atacar." },
    ],
    descricao: "Inseto da Colmeia (Ato 2), o Bowlbug de casco de pedra. Bloquear a Cabeçada por inteiro o desativa por um turno. Vem acompanhado de Bowlbugs operários (Ovo/Seda/Néctar) ou de um Escavador e um Besouro Adormecido. 45–48 de vida (46–49 na A8).",
  },
  {
    id: "exoskeleton",
    nome: "Exoesqueleto",
    tipo: "Inseto",
    ato: "Ato 2",
    icone: "🦗",
    nivel: 4,
    stats: { vida: 28, forca: 8, defesa: 0, velocidade: 8 },
    habilidades: [
      { nome: "Correria (Skitter)", descricao: "1 de dano ×3 (×4 na A8)." },
      { nome: "Mandíbulas (Mandibles)", descricao: "8 de dano (9 na A8)." },
      { nome: "Enfurecer (Enrage)", descricao: "Ganha 2 de Força." },
      { nome: "Difícil de Matar (Hard to Kill)", descricao: "Reduz todo dano e perda de vida que sofre para no máximo 9 por vez." },
    ],
    descricao: "Inseto da Colmeia (Ato 2), em grupos de 3 a 4. Só pode perder até 9 de vida por vez, então dano concentrado é desperdiçado. 24–28 de vida (26–30 na A8).",
  },
  {
    id: "thieving-hopper",
    nome: "Saltador Ladrão",
    tipo: "Fera",
    ato: "Ato 2",
    icone: "🎩",
    nivel: 5,
    stats: { vida: 79, forca: 21, defesa: 0, velocidade: 11 },
    habilidades: [
      { nome: "Furto (Thievery)", descricao: "17 de dano (19 na A9) e rouba uma carta." },
      { nome: "Esvoaçar (Flutter)", descricao: "Passa a sofrer 50% menos dano de ataque (5 acertos para atordoar)." },
      { nome: "Cartola (Hat Trick)", descricao: "21 de dano (23 na A9)." },
      { nome: "Abocanhar (Nab)", descricao: "14 de dano (16 na A9)." },
      { nome: "Fuga (Escape)", descricao: "Foge permanentemente — cartas roubadas só voltam se ele for derrotado antes." },
    ],
    descricao: "Fera da Colmeia (Ato 2). Segue uma sequência fixa de 5 turnos que termina em fuga, levando a carta roubada se não for morto antes. 79 de vida (84 na A8).",
  },
  {
    id: "tunneler",
    nome: "Escavador",
    tipo: "Verme",
    ato: "Ato 2",
    icone: "🕳️",
    nivel: 5,
    stats: { vida: 87, forca: 23, defesa: 32, velocidade: 5 },
    habilidades: [
      { nome: "Mordida (Bite)", descricao: "13 de dano (15 na A9)." },
      { nome: "Cavar (Burrow)", descricao: "Fica Enterrado e ganha 32 de Bloqueio (37 na A8); o Bloqueio persiste entre turnos." },
      { nome: "Ataque por Baixo (Attack from Below)", descricao: "23 de dano (26 na A9), enquanto enterrado." },
      { nome: "Golpe ao Emergir (Emerging Strike)", descricao: "Se o Bloqueio for quebrado enquanto enterrado, fica Atordoado e não faz nada." },
    ],
    descricao: "Verme da Colmeia (Ato 2). Abre com Mordida, depois Cavar; quebrar toda a armadura enquanto ele está enterrado o deixa atordoado. 87 de vida (92 na A8).",
  },
  {
    id: "chomper",
    nome: "Mordedor",
    tipo: "Fera",
    ato: "Ato 2",
    icone: "😬",
    nivel: 4,
    stats: { vida: 64, forca: 9, defesa: 0, velocidade: 7 },
    habilidades: [
      { nome: "Fixar (Clamp)", descricao: "8 de dano ×2 (9×2 na A8)." },
      { nome: "Grito (Screech)", descricao: "Embaralha 3 cartas Atordoado no seu descarte." },
      { nome: "Artefato 2", descricao: "Anula os dois primeiros debuffs aplicados nele." },
    ],
    descricao: "Fera da Colmeia (Ato 2), sempre em dupla — um abre com Fixar, o outro com Grito, e depois alternam. 60–64 de vida (63–67 na A8).",
  },
  {
    id: "hunter-killer",
    nome: "Caçador-Matador",
    tipo: "Aberração",
    ato: "Ato 2",
    icone: "🦟",
    nivel: 6,
    stats: { vida: 121, forca: 17, defesa: 0, velocidade: 8 },
    habilidades: [
      { nome: "Gosma Amaciante (Tenderizing Goop)", descricao: "Aplica 1 de Amaciado (Tender). Sempre no 1º turno." },
      { nome: "Mordida (Bite)", descricao: "17 de dano (19 na A9)." },
      { nome: "Perfuração (Puncture)", descricao: "7 de dano ×3 (8×3 na A9)." },
      { nome: "Amaciado (Tender)", descricao: "Ao jogar uma carta, você perde Força e Destreza igual ao acúmulo." },
    ],
    descricao: "Aberração da Colmeia (Ato 2). O debuff Amaciado corrói sua Força e Destreza a cada carta jogada. Depois da abertura alterna Mordida e Perfuração (Perfuração 2× mais provável; Mordida não repete). 121 de vida (126 na A8).",
  },
  {
    id: "louse-progenitor",
    nome: "Progenitor dos Piolhos",
    tipo: "Inseto",
    ato: "Ato 2",
    icone: "🪳",
    nivel: 6,
    stats: { vida: 136, forca: 14, defesa: 14, velocidade: 5 },
    habilidades: [
      { nome: "Canhão de Teia (Web Cannon)", descricao: "9 de dano (10 na A8) e aplica 2 de Frágil." },
      { nome: "Enrolar e Crescer (Curl and Grow)", descricao: "Ganha 14 de Bloqueio e 5 de Força (18 e 7 na A8)." },
      { nome: "Bote (Pounce)", descricao: "14 de dano (16 na A8)." },
      { nome: "Encolher (Curl Up)", descricao: "Ganha 14 de Bloqueio ao ser atingido pela primeira vez (18 na A8)." },
    ],
    descricao: "Inseto da Colmeia (Ato 2), referência aos Louses do jogo original. Ciclo fixo Canhão de Teia → Enrolar e Crescer → Bote. Conteúdo beta. 134–136 de vida (138–141 na A8).",
  },
  {
    id: "myte",
    nome: "Myte",
    tipo: "Inseto",
    ato: "Ato 2",
    icone: "🕷️",
    nivel: 5,
    stats: { vida: 67, forca: 13, defesa: 0, velocidade: 7 },
    habilidades: [
      { nome: "Cornucópia Tóxica (Toxic Cornucopia)", descricao: "Adiciona 2 cartas Tóxico à sua mão." },
      { nome: "Mordida (Bite)", descricao: "13 de dano (15 na A8)." },
      { nome: "Sugar (Suck)", descricao: "4 de dano (6 na A8) e ganha 2 de Força (3 na A8)." },
    ],
    descricao: "Inseto da Colmeia (Ato 2), sempre em dupla. Um abre com Cornucópia Tóxica, o outro com Sugar; depois seguem o ciclo Cornucópia Tóxica → Mordida → Sugar. Cartas que descartam status sem custo ajudam muito. 61–67 de vida (64–69 na A8).",
  },
  {
    id: "ovicopter",
    nome: "Ovicóptero",
    tipo: "Inseto",
    ato: "Ato 2",
    icone: "🥚",
    nivel: 6,
    stats: { vida: 130, forca: 16, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Botar Ovos (Lay Eggs)", descricao: "Invoca 3 Ovos Resistentes (eclodem em Filhotes que mordem por 4)." },
      { nome: "Esmagar (Smash)", descricao: "16 de dano (17 na A8)." },
      { nome: "Amaciador (Tenderizer)", descricao: "7 de dano (8 na A8) e aplica 2 de Vulnerável." },
      { nome: "Pasta Nutritiva (Nutritional Paste)", descricao: "Ganha 3 de Força (4 na A8) quando já tem muitos aliados." },
    ],
    descricao: "Inseto da Colmeia (Ato 2). Abre com Botar Ovos e cicla Esmagar → Amaciador; controlar a quantidade de lacaios é a chave. 124–130 de vida (126–132 na A8).",
  },
  {
    id: "slumbering-beetle",
    nome: "Besouro Adormecido",
    tipo: "Inseto",
    ato: "Ato 2",
    icone: "😴",
    nivel: 5,
    stats: { vida: 86, forca: 16, defesa: 15, velocidade: 4 },
    habilidades: [
      { nome: "Ronco (Snore)", descricao: "Não faz nada enquanto está dormindo." },
      { nome: "Rolar (Roll Out)", descricao: "16 de dano (18 na A8) e ganha 2 de Força." },
      { nome: "Blindagem (Plating 15)", descricao: "Ganha Bloqueio no fim do seu turno (18 na A8); some ao acordar." },
      { nome: "Sono (Slumber 3)", descricao: "Acorda depois de passar 3 turnos ou de perder vida 3 vezes." },
    ],
    descricao: "Inseto da Colmeia (Ato 2). Começa dormindo, protegido por Blindagem; ao acordar perde a armadura e passa a atacar todo turno. O Cavaleiro Sapo monta numa versão menor dele. 86 de vida (89 na A8).",
  },
  {
    id: "spiny-toad",
    nome: "Sapo Espinhoso",
    tipo: "Anfíbio",
    ato: "Ato 2",
    icone: "🌵",
    nivel: 6,
    stats: { vida: 119, forca: 23, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Espinhos Salientes (Protruding Spikes)", descricao: "Ganha 5 de Espinhos." },
      { nome: "Explosão de Espinhos (Spike Explosion)", descricao: "23 de dano (25 na A9); perde 5 de Espinhos." },
      { nome: "Lambida (Tongue Lash)", descricao: "17 de dano (19 na A9)." },
    ],
    descricao: "Anfíbio da Colmeia (Ato 2), a forma adulta do Girino-Sapo. Ciclo fixo: acumula Espinhos e depois os gasta na explosão. 116–119 de vida (121–124 na A8).",
  },
  {
    id: "the-obscura",
    nome: "A Obscura",
    tipo: "Aberração",
    ato: "Ato 2",
    icone: "🌀",
    nivel: 6,
    stats: { vida: 123, forca: 10, defesa: 6, velocidade: 6 },
    habilidades: [
      { nome: "Ilusão (Illusion)", descricao: "Abertura: invoca um Parafright (21 de vida; revive ao morrer; bate por 16)." },
      { nome: "Olhar Perfurante (Piercing Gaze)", descricao: "10 de dano (11 na A9)." },
      { nome: "Lamento (Wail)", descricao: "Todos os inimigos ganham 3 de Força." },
      { nome: "Golpe Endurecedor (Hardening Strike)", descricao: "6 de dano (7 na A9) e ganha 6 de Bloqueio." },
    ],
    descricao: "Aberração da Colmeia (Ato 2). Abre invocando um Parafright que ressuscita sozinho e depois sorteia um dos três golpes, sem repetir. 123 de vida (129 na A8).",
  },
  {
    id: "axebot",
    nome: "Axebot",
    tipo: "Construto",
    ato: "Ato 3",
    icone: "🤖",
    nivel: 7,
    stats: { vida: 78, forca: 14, defesa: 10, velocidade: 7 },
    habilidades: [
      { nome: "Ligar (Boot Up)", descricao: "Ganha 10 de Bloqueio e 3 de Força (6 na A8)." },
      { nome: "Um-Dois (The One-Two)", descricao: "10 de dano ×2 (11×2 na A9)." },
      { nome: "Gancho de Martelo (Hammer Uppercut)", descricao: "14 de dano (18 na A9) e aplica 2 de Fraqueza e 2 de Frágil." },
      { nome: "Estoque (Stock)", descricao: "Ao morrer, invoca outro Axebot com +10 de vida máxima e um Ligar reforçado (15 de Bloqueio, 4 de Força na A8)." },
    ],
    descricao: "Construto da Glória (Ato 3). Cada Axebot destruído é substituído por outro mais forte — a menos que você o mate junto com o \"estoque\". Alterna Gancho de Martelo e Um-Dois após o Ligar inicial. 70–78 de vida (78–86 na A8).",
  },
  {
    id: "devoted-sculptor",
    nome: "Escultor Devoto",
    tipo: "Cultista",
    ato: "Ato 3",
    icone: "⚒️",
    nivel: 8,
    stats: { vida: 162, forca: 15, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Encantamento Proibido (Forbidden Incantation)", descricao: "Abertura: ganha 9 de Ritual." },
      { nome: "Selvageria (Savage)", descricao: "12 de dano (15 na A8), todo turno depois da abertura." },
      { nome: "Ritual", descricao: "Ganha Força no fim do turno — o dano cresce sem parar." },
    ],
    descricao: "Cultista da Glória (Ato 3). O dano dispara com o Ritual acumulado; cartas de dano frontal alto (Assassinar, Entrada Dramática) são recomendadas para derrubá-lo rápido. 162 de vida (172 na A8).",
  },
  {
    id: "fabricator",
    nome: "Fabricante",
    tipo: "Construto",
    ato: "Ato 3",
    icone: "🏭",
    nivel: 8,
    stats: { vida: 150, forca: 18, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Fabricar (Fabricate)", descricao: "Invoca 1 bot defensivo (Guardbot dá 15 de Bloqueio / Noisebot embaralha 2 Atordoado) e 1 ofensivo (Zapbot 14 de dano / Stabbot 11 + Frágil)." },
      { nome: "Golpe Fabricante (Fabricating Strike)", descricao: "18 de dano (21 na A8) e invoca 1 bot ofensivo." },
      { nome: "Desintegrar (Disintegrate)", descricao: "11 de dano (13 na A9), quando já tem 4 ou mais aliados." },
    ],
    descricao: "Construto da Glória (Ato 3). Enche o campo de bots e evita repetir o mesmo modelo; controlar a quantidade de lacaios é essencial. 150 de vida (155 na A8).",
  },
  {
    id: "frog-knight",
    nome: "Cavaleiro Sapo",
    tipo: "Anfíbio",
    ato: "Ato 3",
    icone: "⚔️",
    nivel: 9,
    stats: { vida: 191, forca: 35, defesa: 15, velocidade: 5 },
    habilidades: [
      { nome: "Lambida (Tongue Lash)", descricao: "13 de dano (14 na A9) e aplica 2 de Frágil." },
      { nome: "Golpear o Mal (Strike Down Evil)", descricao: "21 de dano (23 na A9)." },
      { nome: "Pela Rainha (For the Queen)", descricao: "Ganha 5 de Força." },
      { nome: "Investida do Besouro (Beetle Charge)", descricao: "35 de dano (40 na A9), uma única vez, ao cair abaixo de metade da vida." },
      { nome: "Blindagem (Plating 15)", descricao: "Ganha Bloqueio no fim do seu turno (19 na A8)." },
    ],
    descricao: "Anfíbio da Glória (Ato 3), montado num Besouro Adormecido menor. Abre com Lambida e cicla Golpear o Mal → Pela Rainha, com uma Investida devastadora ao chegar na metade da vida. 191 de vida (199 na A8).",
  },
  {
    id: "globe-head",
    nome: "Cabeça de Globo",
    tipo: "Construto",
    ato: "Ato 3",
    icone: "💡",
    nivel: 8,
    stats: { vida: 148, forca: 16, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Tapa Chocante (Shocking Slap)", descricao: "13 de dano (14 na A9) e aplica 2 de Frágil." },
      { nome: "Raio (Thunder Strike)", descricao: "6 de dano ×3 (7×3 na A9)." },
      { nome: "Estouro Galvânico (Galvanic Burst)", descricao: "16 de dano (17 na A9) e ganha 2 de Força." },
      { nome: "Galvânico (Galvanic 6)", descricao: "Você toma 6 de dano (8 na A9) sempre que joga uma carta — pode ser bloqueado." },
    ],
    descricao: "Construto da Glória (Ato 3). Punir cada carta jogada com dano Galvânico premia turnos curtos e Bloqueio antecipado. Ciclo fixo Tapa Chocante → Raio → Estouro Galvânico. 148 de vida (158 na A9).",
  },
  {
    id: "living-shield",
    nome: "Escudo Vivo",
    tipo: "Objeto",
    ato: "Ato 3",
    icone: "🛡️",
    nivel: 7,
    stats: { vida: 55, forca: 16, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Pancada de Escudo (Shield Slam)", descricao: "6 de dano, todo turno enquanto o Turret Operator estiver vivo." },
      { nome: "Esmagar (Smash)", descricao: "16 de dano (18 na A8) e ganha 3 de Força, depois que o Turret Operator morre." },
      { nome: "Baluarte (Rampart 25)", descricao: "No início do seu turno, o Turret Operator ganha 25 de Bloqueio." },
    ],
    descricao: "Inimigo da Glória (Ato 3), parceiro do Turret Operator (referência ao par Centurião + Místico do primeiro jogo). Protege o Operador até ele cair e então fica mais agressivo. 55 de vida (65 na A8).",
  },
  {
    id: "owl-magistrate",
    nome: "Magistrada Coruja",
    tipo: "Ave",
    ato: "Ato 3",
    icone: "🦉",
    nivel: 9,
    stats: { vida: 234, forca: 33, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Escrutínio do Magistrado (Magistrate Scrutiny)", descricao: "16 de dano (17 na A9)." },
      { nome: "Assalto de Bicadas (Peck Assault)", descricao: "4 de dano ×6." },
      { nome: "Voo Judicial (Judicial Flight)", descricao: "Ganha Planar (Soar)." },
      { nome: "Veredito (Verdict)", descricao: "33 de dano (36 na A9), aplica 4 de Vulnerável e remove Planar." },
      { nome: "Planar (Soar)", descricao: "Recebe 50% menos dano de ataque até pousar." },
    ],
    descricao: "Ave da Glória (Ato 3). Ciclo fixo de 4 turnos; enquanto plana sofre metade do dano, mas o Veredito seguinte é devastador. 234 de vida (243 na A8).",
  },
  {
    id: "scroll-of-biting",
    nome: "Pergaminho da Mordida",
    tipo: "Objeto",
    ato: "Ato 3",
    icone: "📜",
    nivel: 7,
    stats: { vida: 38, forca: 14, defesa: 0, velocidade: 8 },
    habilidades: [
      { nome: "Mordida (Chomp)", descricao: "14 de dano (16 na A9)." },
      { nome: "Mais Dentes (More Teeth)", descricao: "Ganha 2 de Força." },
      { nome: "Mastigar (Chew)", descricao: "5 de dano ×2 (6×2 na A9)." },
      { nome: "Cortes de Papel (Paper Cuts 2)", descricao: "Quando causa dano de ataque não bloqueado, você perde 2 de vida máxima." },
    ],
    descricao: "Pergaminho vivo da Glória (Ato 3), em grupos de 3 (fraco) ou 4 (normal). Cada golpe não bloqueado corrói sua vida máxima. 31–38 de vida (32–39 na A8).",
  },
  {
    id: "slimed-berserker",
    nome: "Berserker Enlodado",
    tipo: "Limo",
    ato: "Ato 3",
    icone: "🟩",
    nivel: 9,
    stats: { vida: 266, forca: 30, defesa: 0, velocidade: 5 },
    habilidades: [
      { nome: "Vomitar Icor (Vomit Ichor)", descricao: "Embaralha 10 cartas Slimed no seu descarte." },
      { nome: "Surra Furiosa (Furious Pummeling)", descricao: "4 de dano ×4 (5×4 na A8)." },
      { nome: "Abraço Sugador (Leeching Hug)", descricao: "Aplica 3 de Fraqueza e ganha 3 de Força." },
      { nome: "Sufocar (Smother)", descricao: "30 de dano (33 na A8)." },
    ],
    descricao: "Limo gigante da Glória (Ato 3). Sequência fixa de quatro ações: entope seu baralho, ataca em rajada, se fortalece e então dá um golpe pesado. 266 de vida (276 na A8).",
  },
  {
    id: "the-lost",
    nome: "O Perdido",
    tipo: "Morto-vivo",
    ato: "Ato 3",
    icone: "👻",
    nivel: 7,
    stats: { vida: 93, forca: 9, defesa: 0, velocidade: 6 },
    habilidades: [
      { nome: "Névoa Debilitante (Debilitating Smog)", descricao: "Remove 2 da sua Força e ganha 2 de Força." },
      { nome: "Raios Oculares (Eye Lasers)", descricao: "4 de dano ×2 (9×2 na A8)." },
      { nome: "Possuir Força (Possess Strength)", descricao: "Ao ser derrotado, devolve toda a Força que roubou de você." },
    ],
    descricao: "Morto-vivo da Glória (Ato 3). Rouba sua Força até morrer, quando devolve tudo. Alterna Névoa Debilitante e Raios Oculares, começando com a Névoa. 93 de vida (99 na A8).",
  },
  {
    id: "the-forgotten",
    nome: "O Esquecido",
    tipo: "Morto-vivo",
    ato: "Ato 3",
    icone: "💨",
    nivel: 7,
    stats: { vida: 106, forca: 13, defesa: 8, velocidade: 6 },
    habilidades: [
      { nome: "Miasma", descricao: "Remove 2 da sua Destreza; ganha 8 de Bloqueio e 2 de Destreza." },
      { nome: "Pavor (Dread)", descricao: "13 de dano (15 na A8) mais a Destreza atual dele." },
      { nome: "Possuir Agilidade (Possess Speed)", descricao: "Ao ser derrotado, devolve toda a Destreza que roubou de você." },
    ],
    descricao: "Morto-vivo da Glória (Ato 3), o único inimigo do jogo que ganha Destreza. Rouba a sua para engrossar o Bloqueio e o dano do Pavor. Alterna Miasma e Pavor, começando com Miasma. 106 de vida (111 na A8).",
  },
];

/* ---------------------------------------------------------------------------
 *  RELÍQUIAS
 *  Geradas a partir de relics.md — 298 itens.
 *  Campos: id, nome, categoria (origem), icone, raridade, efeito, descricao
 * ------------------------------------------------------------------------- */

const RELIQUIAS = [
  {
    id: "burning-blood--starter--ironclad",
    nome: "Sangue Ardente",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Inicial",
    efeito: "No fim do combate, cure 6 de Vida.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "black-blood--starter--ironclad",
    nome: "Sangue Negro",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Inicial",
    efeito: "No fim do combate, cure 12 de Vida.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ring-of-the-snake--starter--silent",
    nome: "Anel da Serpente",
    categoria: "Silent",
    icone: "💎",
    raridade: "Inicial",
    efeito: "No início de cada combate, compre 2 cartas a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ring-of-the-drake--starter--silent",
    nome: "Anel do Dragão",
    categoria: "Silent",
    icone: "💎",
    raridade: "Inicial",
    efeito: "No início dos seus 3 primeiros turnos, compre 2 cartas a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "divine-right--starter--regent",
    nome: "Direito Divino",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Inicial",
    efeito: "No início de cada combate, ganhe ⭐ ⭐ ⭐.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "divine-destiny--starter--regent",
    nome: "Destino Divino",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Inicial",
    efeito: "No início de cada combate, ganhe ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bound-phylactery--starter--necrobinder",
    nome: "Filactério Atado",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Inicial",
    efeito: "No início do seu turno, Invoque 1.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "phylactery-unbound--starter--necrobinder",
    nome: "Filactério Solto",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Inicial",
    efeito: "No início de cada combate, Invoque 5. No início do seu turno, Invoque 2.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "cracked-core--starter--defect",
    nome: "Núcleo Rachado",
    categoria: "Defect",
    icone: "⚡",
    raridade: "Inicial",
    efeito: "No início de cada combate, Canalize 1 ⚡ ?",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "infused-core--starter--defect",
    nome: "Núcleo Infundido",
    categoria: "Defect",
    icone: "⚡",
    raridade: "Inicial",
    efeito: "No início de cada combate, Canalize 3 ⚡ ?. Orbes ⚡ ? causam 1 de dano a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "amethyst-aubergine--common--any",
    nome: "Berinjela Ametista",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Comum",
    efeito: "Inimigos soltam 15 🪙 🪙 a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "anchor--common--any",
    nome: "Âncora",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Comum",
    efeito: "Comece cada combate com 10 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bag-of-marbles--common--any",
    nome: "Saco de Bolinhas de Gude",
    categoria: "Qualquer",
    icone: "💔",
    raridade: "Comum",
    efeito: "No início de cada combate, aplique 1 💔 💔 a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bag-of-preparation--common--any",
    nome: "Saco de Preparação",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "No início de cada combate, compre 2 cartas a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "blood-vial--common--any",
    nome: "Frasco de Sangue",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "No início de cada combate, cure 2.",
    descricao: ""
  },
  {
    id: "book-of-five-rings--common--any",
    nome: "Livro dos Cinco Anéis",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "A cada 5 cartas que você adiciona ao Baralho, cure 20.",
    descricao: ""
  },
  {
    id: "bronze-scales--common--any",
    nome: "Escamas de Bronze",
    categoria: "Qualquer",
    icone: "🌵",
    raridade: "Comum",
    efeito: "Comece cada combate com 3 🌵 🌵.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "centennial-puzzle--common--any",
    nome: "Quebra-Cabeça Centenário",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Na primeira vez que você perde Vida em cada combate, compre 3 cartas.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "festive-popper--common--any",
    nome: "Espoleta Festiva",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "No início de cada combate, cause 9 de dano a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "gorget--common--any",
    nome: "Gorjal",
    categoria: "Qualquer",
    icone: "🪖",
    raridade: "Comum",
    efeito: "No início de cada combate, ganhe 4 🪖 🪖.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "happy-flower--common--any",
    nome: "Flor Feliz",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Comum",
    efeito: "A cada 3 turnos, ganhe 🔮.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "juzu-bracelet--common--any",
    nome: "Pulseira Juzu",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Combates de inimigos comuns não são mais encontrados em Salas ?.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lantern--common--any",
    nome: "Lanterna",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Comum",
    efeito: "Comece cada combate com 🔮 a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "meal-ticket--common--any",
    nome: "Vale-Refeição",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Sempre que você entra numa sala de loja, cure 15.",
    descricao: ""
  },
  {
    id: "oddly-smooth-stone--common--any",
    nome: "Pedra Estranhamente Lisa",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Comum",
    efeito: "Comece cada combate com 1 🎯 🎯.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pendulum--common--any",
    nome: "Pêndulo",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "A cada 3 turnos, compre 1 carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "potion-belt--common--any",
    nome: "Cinto de Poções",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Ao pegar, ganhe 2 espaços de poção.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "red-mask--common--any",
    nome: "Máscara Vermelha",
    categoria: "Qualquer",
    icone: "🥱",
    raridade: "Comum",
    efeito: "No início do combate, aplique 1 🥱 🥱 a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "regal-pillow--common--any",
    nome: "Travesseiro Real",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Sempre que você Descansa, cure 15 a mais.",
    descricao: ""
  },
  {
    id: "strawberry--common--any",
    nome: "Morango",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Ao pegar, aumente sua Vida máxima em 7.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "strike-dummy--common--any",
    nome: "Boneco de Treino",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Cartas que contêm “Strike” causam 3 de dano a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "vajra--common--any",
    nome: "Vajra",
    categoria: "Qualquer",
    icone: "🗡️",
    raridade: "Comum",
    efeito: "Comece cada combate com 1 🗡️ ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "venerable-tea-set--common--any",
    nome: "Jogo de Chá Venerável",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Comum",
    efeito: "Sempre que você entra num Local de Descanso, comece o próximo combate com 🔮 🔮 a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "war-paint--common--any",
    nome: "Pintura de Guerra",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Ao pegar, Aprimore 2 Habilidades aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "whetstone--common--any",
    nome: "Pedra de Amolar",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Comum",
    efeito: "Ao pegar, Aprimore 2 Ataques aleatórios.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "red-skull--common--ironclad",
    nome: "Caveira Vermelha",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Comum",
    efeito: "Enquanto sua Vida estiver em 50% ou menos, você tem 3 ??? ??? a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "snecko-skull--common--silent",
    nome: "Caveira de Snecko",
    categoria: "Silent",
    icone: "🧪",
    raridade: "Comum",
    efeito: "Sempre que você aplica 🧪 🧪, aplique 1 🧪 🧪 a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "fencing-manual--common--regent",
    nome: "Manual de Esgrima",
    categoria: "Regent",
    icone: "💎",
    raridade: "Comum",
    efeito: "No início de cada combate, Forje 10.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bone-flute--common--necrobinder",
    nome: "Flauta de Osso",
    categoria: "Necrobinder",
    icone: "🛡️",
    raridade: "Comum",
    efeito: "Sempre que o Osty ataca, ganhe 2 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "data-disk--common--defect",
    nome: "Disco de Dados",
    categoria: "Defect",
    icone: "🧐",
    raridade: "Comum",
    efeito: "Comece cada combate com 1 🧐 🧐.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "akabeko--uncommon--any",
    nome: "Akabeko",
    categoria: "Qualquer",
    icone: "🔥",
    raridade: "Incomum",
    efeito: "No início de cada combate, ganhe 8 🔥 🔥.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bowler-hat--uncommon--any",
    nome: "Chapéu-Coco",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Incomum",
    efeito: "Ganhe 25% mais 🪙 🪙.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "candelabra--uncommon--any",
    nome: "Candelabro",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Incomum",
    efeito: "No início do seu 2º turno, ganhe 🔮 🔮.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "eternal-feather--uncommon--any",
    nome: "Pena Eterna",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Para cada 5 cartas no seu Baralho, cure 3 de Vida sempre que você entra num Local de Descanso.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "gremlin-horn--uncommon--any",
    nome: "Chifre de Gremlin",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Incomum",
    efeito: "Sempre que um inimigo morre, ganhe 🔮 e compre 1 carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "horn-cleat--uncommon--any",
    nome: "Cornamusa",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "No início do seu 2º turno, ganhe 14 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "joss-paper--uncommon--any",
    nome: "Papel Joss",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "A cada 5 vezes que você Exaure uma carta, compre 1 carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "kusarigama--uncommon--any",
    nome: "Kusarigama",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Toda vez que você joga 3 Ataques num mesmo turno, cause 6 de dano a um inimigo aleatório.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lasting-candy--uncommon--any",
    nome: "Bala Duradoura",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Em combates alternados, suas recompensas de carta ganham um Poder a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "letter-opener--uncommon--any",
    nome: "Abridor de Cartas",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Toda vez que você joga 3 Habilidades num mesmo turno, cause 5 de dano a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lucky-fysh--uncommon--any",
    nome: "Peixinho da Sorte",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Incomum",
    efeito: "Sempre que você adiciona uma carta ao Baralho, ganhe 15 🪙 🪙.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "mercury-hourglass--uncommon--any",
    nome: "Ampulheta de Mercúrio",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "No início do seu turno, cause 3 de dano a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "miniature-cannon--uncommon--any",
    nome: "Canhão em Miniatura",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Ataques Aprimorados causam 3 de dano a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "nunchaku--uncommon--any",
    nome: "Nunchaku",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Incomum",
    efeito: "Toda vez que você joga 10 Ataques, ganhe 🔮.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "orichalcum--uncommon--any",
    nome: "Oricalco",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Se você terminar o turno sem 🛡️ Bloqueio, ganhe 6 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ornamental-fan--uncommon--any",
    nome: "Leque Ornamental",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Toda vez que você joga 3 Ataques num mesmo turno, ganhe 4 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pantograph--uncommon--any",
    nome: "Pantógrafo",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "No início de cada combate de Chefe, cure 25.",
    descricao: ""
  },
  {
    id: "parrying-shield--uncommon--any",
    nome: "Escudo de Aparo",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Se você terminar um turno com pelo menos 10 de 🛡️ Bloqueio, cause 6 de dano a um inimigo aleatório.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pear--uncommon--any",
    nome: "Pera",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Ao pegar, aumente sua Vida máxima em 10.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pen-nib--uncommon--any",
    nome: "Bico de Pena",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Todo 10º Ataque que você joga causa dano dobrado.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "permafrost--uncommon--any",
    nome: "Permafrost",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Na primeira vez que você joga um Poder em cada combate, ganhe 7 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "petrified-toad--uncommon--any",
    nome: "Sapo Petrificado",
    categoria: "Qualquer",
    icone: "🪨",
    raridade: "Incomum",
    efeito: "No início de cada combate, adquira uma Poção-🪨 Pedra em Forma de Poção.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "planisphere--uncommon--any",
    nome: "Planisfério",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Sempre que você entra numa sala ?, cure 5.",
    descricao: ""
  },
  {
    id: "reptile-trinket--uncommon--any",
    nome: "Amuleto Réptil",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Sempre que você usa uma Poção, ganhe 3 ??? ??? neste turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ripple-basin--uncommon--any",
    nome: "Bacia de Ondulações",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Se você não jogou nenhum Ataque durante o seu turno, ganhe 4 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sparkling-rouge--uncommon--any",
    nome: "Blush Cintilante",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Incomum",
    efeito: "No início do seu 3º turno, ganhe 1 ??? ??? e 1 🎯 🎯.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "stone-cracker--uncommon--any",
    nome: "Quebra-Pedra",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "No início do combate, Aprimore 2 cartas aleatórias na sua Pilha de Compra pelo resto do combate.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "tiny-mailbox--uncommon--any",
    nome: "Caixa de Correio Minúscula",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Sempre que você Descansa, adquira 2 Poções aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "tuning-fork--uncommon--any",
    nome: "Diapasão",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Toda vez que você joga 10 Habilidades, ganhe 7 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "vambrace--uncommon--any",
    nome: "Braçadeira",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Na primeira vez que você ganha 🛡️ Bloqueio de uma carta em cada combate, dobre a quantidade ganha.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "paper-phrog--uncommon--ironclad",
    nome: "Sapo de Papel",
    categoria: "Ironclad",
    icone: "💔",
    raridade: "Incomum",
    efeito: "Inimigos com 💔 💔 sofrem 75% mais dano em vez de 50%.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "self-forming-clay--uncommon--ironclad",
    nome: "Argila Auto-Modeladora",
    categoria: "Ironclad",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Sempre que você perde Vida em combate, ganhe 3 de 🛡️ Bloqueio no próximo turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "tingsha--uncommon--silent",
    nome: "Tingsha",
    categoria: "Silent",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Sempre que você descarta uma carta durante o seu turno, cause 3 de dano a um inimigo aleatório para cada carta descartada.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "twisted-funnel--uncommon--silent",
    nome: "Funil Retorcido",
    categoria: "Silent",
    icone: "🧪",
    raridade: "Incomum",
    efeito: "No início de cada combate, aplique 4 🧪 🧪 a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "galactic-dust--uncommon--regent",
    nome: "Poeira Galáctica",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Incomum",
    efeito: "Para cada 10 de ⭐ gasto, ganhe 10 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "regalite--uncommon--regent",
    nome: "Regalita",
    categoria: "Regent",
    icone: "🛡️",
    raridade: "Incomum",
    efeito: "Na primeira vez que você cria uma carta a cada turno, ganhe 4 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "book-repair-knife--uncommon--necrobinder",
    nome: "Faca de Reparo de Livros",
    categoria: "Necrobinder",
    icone: "🪦",
    raridade: "Incomum",
    efeito: "Sempre que um inimigo que não é Lacaio morre por 🪦 🪦, cure 3.",
    descricao: ""
  },
  {
    id: "funerary-mask--uncommon--necrobinder",
    nome: "Máscara Funerária",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Incomum",
    efeito: "No início de cada combate, adicione 3 CardColorless Skill Token Souls na sua Pilha de Compra.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "plated-cables--uncommon--defect",
    nome: "Cabos Blindados",
    categoria: "Defect",
    icone: "💎",
    raridade: "Incomum",
    efeito: "Seu Orbe mais à direita ativa o efeito passivo dele uma vez a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "symbiotic-virus--uncommon--defect",
    nome: "Vírus Simbiótico",
    categoria: "Defect",
    icone: "😈",
    raridade: "Incomum",
    efeito: "No início de cada combate, Canalize 1 DarkOrb 😈.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "art-of-war--rare--any",
    nome: "A Arte da Guerra",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Rara",
    efeito: "Se você não jogar nenhum Ataque durante o seu turno, ganhe 🔮 a mais no próximo turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "beating-remnant--rare--any",
    nome: "Remanescente Pulsante",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Você não pode perder mais de 20 de Vida num mesmo turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bellows--rare--any",
    nome: "Fole",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "A primeira Mão que você compra em cada combate vem Aprimorada.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "captain-s-wheel--rare--any",
    nome: "Timão do Capitão",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Rara",
    efeito: "No início do seu 3º turno, ganhe 18 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "chandelier--rare--any",
    nome: "Lustre",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Rara",
    efeito: "No início do seu 3º turno, ganhe 🔮 🔮 🔮.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "cloak-clasp--rare--any",
    nome: "Broche de Capa",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Rara",
    efeito: "No fim do seu turno, ganhe 1 de 🛡️ Bloqueio para cada carta na sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "frozen-egg--rare--any",
    nome: "Ovo Congelado",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você adiciona um Poder ao Baralho, Aprimore-o.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "gambling-chip--rare--any",
    nome: "Ficha de Aposta",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "No início de cada combate, descarte quantas cartas quiser e compre a mesma quantidade.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "game-piece--rare--any",
    nome: "Peça de Jogo",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você joga um Poder, compre 1 carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "girya--rare--any",
    nome: "Girya",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Você agora pode ganhar ??? ??? em Local de Descanso. (máx. 3 vezes).",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ice-cream--rare--any",
    nome: "Sorvete",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Rara",
    efeito: "🔮 A Energia agora é conservada entre os turnos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "intimidating-helmet--rare--any",
    nome: "Elmo Intimidador",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Rara",
    efeito: "Sempre que você joga uma carta que custa 🔮 🔮 ou mais, ganhe 4 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "kunai--rare--any",
    nome: "Kunai",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Rara",
    efeito: "Toda vez que você joga 3 Ataques num mesmo turno, ganhe 1 🎯 🎯.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lizard-tail--rare--any",
    nome: "Cauda de Lagarto",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Quando sua Vida seria reduzida a 0, cure até 50% da sua Vida máxima em vez disso (funciona uma vez).",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "mango--rare--any",
    nome: "Manga",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Ao pegar, aumente sua Vida máxima em 14.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "meat-on-the-bone--rare--any",
    nome: "Carne no Osso",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Se sua Vida estiver em 50% ou menos no fim do combate, cure 12.",
    descricao: ""
  },
  {
    id: "molten-egg--rare--any",
    nome: "Ovo Fundido",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você adiciona uma carta de Ataque ao Baralho, Aprimore-a.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "mummified-hand--rare--any",
    nome: "Mão Mumificada",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você joga um Poder, uma carta aleatória da sua Mão fica de graça para jogar naquele turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "old-coin--rare--any",
    nome: "Moeda Antiga",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Rara",
    efeito: "Ao pegar, ganhe 300 🪙 🪙.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pocketwatch--rare--any",
    nome: "Relógio de Bolso",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você joga 3 cartas ou menos durante o seu turno, compre 3 cartas a mais no início do seu próximo turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "prayer-wheel--rare--any",
    nome: "Roda de Oração",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Inimigos comuns soltam uma recompensa de carta a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "rainbow-ring--rare--any",
    nome: "Anel Arco-Íris",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Rara",
    efeito: "Na primeira vez que você joga um Ataque, uma Habilidade e um Poder a cada turno, ganhe 1 ??? ??? e 1 🎯 🎯.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "razor-tooth--rare--any",
    nome: "Dente Navalha",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Toda vez que você joga um Ataque ou Habilidade, Aprimore-o pelo resto do combate.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "shovel--rare--any",
    nome: "Pá",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Você agora pode escavar em Local de Descanso para obter uma Relíquia aleatória.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "shuriken--rare--any",
    nome: "Shuriken",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Toda vez que você joga 3 Ataques num mesmo turno, ganhe 1 ??? ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "stone-calendar--rare--any",
    nome: "Calendário de Pedra",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "No fim do turno 7, cause 52 de dano a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sturdy-clamp--rare--any",
    nome: "Grampo Resistente",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Rara",
    efeito: "Até 10 de 🛡️ Bloqueio persiste entre os turnos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "the-courier--rare--any",
    nome: "O Mensageiro",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "O mercador nunca mais fica sem cartas, relíquias ou Poção e os preços dele ficam 20% menores.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "toxic-egg--rare--any",
    nome: "Ovo Tóxico",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você adiciona uma Habilidade ao Baralho, Aprimore-a.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "tungsten-rod--rare--any",
    nome: "Barra de Tungstênio",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você fosse perder Vida, perca 1 a menos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "unceasing-top--rare--any",
    nome: "Pião Incessante",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você fica sem cartas na Mão durante o seu turno, compre uma carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "unsettling-lamp--rare--any",
    nome: "Lâmpada Perturbadora",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Em cada combate, na primeira vez que você joga uma carta que aplica Debuff em um inimigo, dobre o efeito dela.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "vexing-puzzlebox--rare--any",
    nome: "Caixa-Quebra-Cabeça Irritante",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "No início de cada combate, adicione uma carta aleatória à sua Mão. É de graça para jogá-la neste turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "white-beast-statue--rare--any",
    nome: "Estátua da Besta Branca",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Poções sempre aparecem nas recompensas de combate.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "white-star--rare--any",
    nome: "Estrela Branca",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rara",
    efeito: "Elites soltam uma recompensa de carta Rara a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "charon-s-ashes--rare--ironclad",
    nome: "Cinzas de Caronte",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Rara",
    efeito: "Sempre que você Exaure uma carta, cause 3 de dano a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "demon-tongue--rare--ironclad",
    nome: "Língua de Demônio",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Rara",
    efeito: "Na primeira vez que você perde Vida no seu turno, cure Vida igual à quantidade perdida.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ruined-helmet--rare--ironclad",
    nome: "Elmo Arruinado",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Rara",
    efeito: "Na primeira vez que você ganha ??? ??? em cada combate, dobre a quantidade ganha.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "helical-dart--rare--silent",
    nome: "Dardo Helicoidal",
    categoria: "Silent",
    icone: "🎯",
    raridade: "Rara",
    efeito: "Sempre que você joga um Shiv, ganhe 1 🎯 🎯 neste turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "paper-krane--rare--silent",
    nome: "Grou de Papel",
    categoria: "Silent",
    icone: "🥱",
    raridade: "Rara",
    efeito: "Inimigos com 🥱 🥱 causam 40% menos dano a você em vez de 25%.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "tough-bandages--rare--silent",
    nome: "Bandagens Resistentes",
    categoria: "Silent",
    icone: "🛡️",
    raridade: "Rara",
    efeito: "Sempre que você descarta uma carta durante o seu turno, ganhe 3 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lunar-pastry--rare--regent",
    nome: "Doce Lunar",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Rara",
    efeito: "No fim do seu turno, ganhe ⭐.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "mini-regent--rare--regent",
    nome: "Mini Regent",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Rara",
    efeito: "Na primeira vez que você gasta ⭐ a cada turno, ganhe 1 ??? ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "orange-dough--rare--regent",
    nome: "Massa de Laranja",
    categoria: "Regent",
    icone: "💎",
    raridade: "Rara",
    efeito: "No início de cada combate, adicione 2 cartas Incolores aleatórias à sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "big-hat--rare--necrobinder",
    nome: "Chapéu Grande",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Rara",
    efeito: "No início de cada combate, adicione 2 cartas Etéreas aleatórias à sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bookmark--rare--necrobinder",
    nome: "Marcador de Página",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Rara",
    efeito: "No fim de cada turno, reduza em 1 o custo de uma carta Retida aleatória até ela ser jogada.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ivory-tile--rare--necrobinder",
    nome: "Peça de Marfim",
    categoria: "Necrobinder",
    icone: "🌸",
    raridade: "Rara",
    efeito: "Sempre que você joga uma carta que custa 🌸 🌸 🌸 ou mais, ganhe 🌸.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "emotion-chip--rare--defect",
    nome: "Chip de Emoção",
    categoria: "Defect",
    icone: "💎",
    raridade: "Rara",
    efeito: "Se você perdeu Vida no turno anterior, ative a habilidade passiva de todos os Orbes no início do seu turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "metronome--rare--defect",
    nome: "Metrônomo",
    categoria: "Defect",
    icone: "💎",
    raridade: "Rara",
    efeito: "Na primeira vez que você Canaliza 7 Orbes em cada combate, cause 30 de dano a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "power-cell--rare--defect",
    nome: "Célula de Energia",
    categoria: "Defect",
    icone: "💎",
    raridade: "Rara",
    efeito: "No início de cada combate, adicione 2 cartas de custo zero da sua Pilha de Compra à sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "arcane-scroll--ancient--neow",
    nome: "Pergaminho Arcano",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, obtenha uma Carta Rara aleatória para adicionar ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "booming-conch--ancient--neow",
    nome: "Concha Estrondosa",
    categoria: "Neow",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "No início de combates de Elite, compre 2 cartas a mais e ganhe 🔮.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "cursed-pearl--ancient--neow",
    nome: "Pérola Amaldiçoada",
    categoria: "Neow",
    icone: "🤑",
    raridade: "Antiga",
    efeito: "Ao pegar, receba a Maldição 🤑. Ganhe 333 🪙.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "rod--ancient--neow",
    nome: "Vara",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, adicione 1 CardQuest ?? ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "fishing-rod--ancient--neow",
    nome: "Vara de Pesca",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "A cada 3 combates comuns, Aprimore uma carta aleatória do seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "golden-pearl--ancient--neow",
    nome: "Pérola Dourada",
    categoria: "Neow",
    icone: "🪙",
    raridade: "Antiga",
    efeito: "Ao pegar, ganhe 150 🪙 🪙.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "hefty-tablet--ancient--neow",
    nome: "Tábua Pesada",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Escolha 1 de 3 cartas Raras para adicionar ao seu Baralho. Adicione 1 Maldição ?? ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "kaleidoscope--ancient--neow",
    nome: "Caleidoscópio",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, obtenha 2 recompensas de carta de outros personagens.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "large-capsule--ancient--neow",
    nome: "Cápsula Grande",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, obtenha 2 Relíquias aleatórias. Adicione um Strike e um Defend a mais ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lava-rock--ancient--neow",
    nome: "Rocha de Lava",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "O Chefe do Ato 1 solta 2 Relíquias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lead-paperweight--ancient--neow",
    nome: "Peso de Papel de Chumbo",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, escolha 1 de 2 cartas Incolores para adicionar ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "leafy-poultice--ancient--neow",
    nome: "Cataplasma de Folhas",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Transforme 1 dos seus Strikes e 1 dos seus Defends e perca 12 de Vida máxima.",
    descricao: ""
  },
  {
    id: "lost-coffer--ancient--neow",
    nome: "Cofre Perdido",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, ganhe 1 recompensa de carta e adquira 1 Poção aleatória.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "massive-scroll--ancient--neow",
    nome: "Pergaminho Enorme",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, escolha 1 de 3 Cartas Multijogador para adicionar ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "neow-s-bones--ancient--neow",
    nome: "Ossos de Neow",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, ganhe 2 Relíquias de Neow aleatórias. Adicione 1 Maldição aleatória ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "neow-s-sacrifice--ancient--neow",
    nome: "Sacrifício de Neow",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, adquira 1 Ambergris Ambergris e 1 Maldição Guilty para o seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "neow-s-talisman--ancient--neow",
    nome: "Talismã de Neow",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Aprimore 1 dos seus Strikes e 1 dos seus Defends.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "neow-s-torment--ancient--neow",
    nome: "Tormento de Neow",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, adicione 1 CardColorless Attack Ancient Neow's Fury ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "new-leaf--ancient--neow",
    nome: "Folha Nova",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Transforme 1 carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "nutritious-oyster--ancient--neow",
    nome: "Ostra Nutritiva",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, aumente sua Vida máxima em 11.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "phial-holster--ancient--neow",
    nome: "Coldre de Frascos",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, ganhe 1 espaço de poção e adquira 2 Poções aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pomander--ancient--neow",
    nome: "Pomo Aromático",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Aprimore uma carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "precarious-shears--ancient--neow",
    nome: "Tesoura Precária",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, remova 2 cartas do seu Baralho e sofra 16 de dano.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "precise-scissors--ancient--neow",
    nome: "Tesoura Precisa",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, remova 1 carta do seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "scroll-boxes--ancient--neow",
    nome: "Caixas de Pergaminhos",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Escolha 1 de 2 pacotes de cartas para adicionar ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "silken-tress--ancient--neow",
    nome: "Mecha de Seda",
    categoria: "Neow",
    icone: "🪙",
    raridade: "Antiga",
    efeito: "Ao pegar, perca todo o 🪙. Encante todas as cartas da sua primeira recompensa de carta com Enchant Glam Glam.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "silver-crucible--ancient--neow",
    nome: "Cadinho de Prata",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "As 3 primeiras recompensas de carta que você vê vêm Aprimoradas. O primeiro Baú do Tesouro que você abre está vazio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "small-capsule--ancient--neow",
    nome: "Cápsula Pequena",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, obtenha uma Relíquia aleatória.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "stone-humidifier--ancient--neow",
    nome: "Umidificador de Pedra",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Sempre que você Descansa num Local de Descanso, aumente sua Vida máxima em 5.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "winged-boots--ancient--neow",
    nome: "Botas Aladas",
    categoria: "Neow",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Você pode ignorar os caminhos ao escolher as próximas salas 3 vezes.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "alchemical-coffer--ancient--orobas",
    nome: "Cofre Alquímico",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, ganhe 4 espaços de poção cheios com Poções aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "archaic-tooth--ancient--orobas",
    nome: "Dente Arcaico",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Transforme uma carta inicial numa versão antiga.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "driftwood--ancient--orobas",
    nome: "Madeira à Deriva",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Você pode re-rolar cada recompensa de carta uma vez.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "electric-shrymp--ancient--orobas",
    nome: "Camarão Elétrico",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Encante uma Habilidade com Enchant Imbued Imbued.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "glass-eye--ancient--orobas",
    nome: "Olho de Vidro",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, obtenha 2 cartas Comuns, 2 Incomuns e 1 Rara.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "prismatic-gem--ancient--orobas",
    nome: "Gema Prismática",
    categoria: "Orobas",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 no início de cada turno. As recompensas de carta agora contêm cartas de outras cores.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "radiant-pearl--ancient--orobas",
    nome: "Pérola Radiante",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início de cada combate, adicione 1 CardColorless Skill Token Luminesce à sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sand-castle--ancient--orobas",
    nome: "Castelo de Areia",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Aprimore 6 cartas aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sea-glass--ancient--orobas",
    nome: "Vidro do Mar",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Veja 15 cartas de outro personagem. Escolha quantas quiser para adicionar ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "touch-of-orobas--ancient--orobas",
    nome: "Toque de Orobas",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, substitua sua Relíquia inicial por uma versão Antiga.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-blood--ancient--pael",
    nome: "Sangue de Pael",
    categoria: "Pael",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início do seu turno, compre 1 carta a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-claw--ancient--pael",
    nome: "Garra de Pael",
    categoria: "Pael",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Encante todos os Defends com Enchant Goopy Goopy.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-eye--ancient--pael",
    nome: "Olho de Pael",
    categoria: "Pael",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Na primeira vez em cada combate que você termina o turno sem jogar cartas, Exaure sua Mão e ganha um turno extra.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-flesh--ancient--pael",
    nome: "Carne de Pael",
    categoria: "Pael",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 a mais no início do seu 3º turno, e em todo turno depois disso.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-growth--ancient--pael",
    nome: "Crescimento de Pael",
    categoria: "Pael",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Encante uma carta com Enchant Clone Clone.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-horn--ancient--pael",
    nome: "Chifre de Pael",
    categoria: "Pael",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, adicione 2 CardColorless Skill Ancient Relax ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-legion--ancient--pael",
    nome: "Legião de Pael",
    categoria: "Pael",
    icone: "🛡️",
    raridade: "Antiga",
    efeito: "Dobra o 🛡️ Bloqueio ganho de uma carta, e então adormece por 2 turnos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-tears--ancient--pael",
    nome: "Lágrimas de Pael",
    categoria: "Pael",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Se você terminar o turno com 🔮 não gasto, ganhe 🔮 🔮 a mais no próximo turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-tooth--ancient--pael",
    nome: "Dente de Pael",
    categoria: "Pael",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, remova 5 cartas do seu Baralho. Depois de cada combate, adiciona 1 de volta ao acaso, Aprimorada.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pael-s-wing--ancient--pael",
    nome: "Asa de Pael",
    categoria: "Pael",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Você pode sacrificar recompensas de carta ao Pael. A cada 2 sacrifícios, obtenha uma Relíquia.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "biiig-hug--ancient--tezcatara",
    nome: "Abraaaço",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, remova 4 cartas do seu Baralho. Sempre que você embaralha sua Pilha de Compra, adicione uma carta Soot na sua Pilha de Compra.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "golden-compass--ancient--tezcatara",
    nome: "Bússola Dourada",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, substitua o Mapa do Ato 2 por um único caminho especial.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "nutritious-soup--ancient--tezcatara",
    nome: "Sopa Nutritiva",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Encante todos os Strikes no seu Baralho com Enchant TezcatarasEmber Tezcatara's Ember.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pumpkin-candle--ancient--tezcatara",
    nome: "Vela de Abóbora",
    categoria: "Tezcatara",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 no início de cada turno. Apaga depois de 5 combates. Pode ser Reacesa nos Locais de Descanso.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "seal-of--ancient--tezcatara",
    nome: "Selo de 🪙",
    categoria: "Tezcatara",
    icone: "🪙",
    raridade: "Antiga",
    efeito: "No início do seu turno, gaste 3 🪙 🪙 para ganhar 🔮.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "storybook--ancient--tezcatara",
    nome: "Livro de Histórias",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, adicione 1 CardColorless Skill Ancient Brightest Flame ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "toasty-mittens--ancient--tezcatara",
    nome: "Luvas Quentinhas",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início do seu turno, Exaure 1 carta da sua Mão e ganhe 1 ??? ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "toy-box--ancient--tezcatara",
    nome: "Caixa de Brinquedos",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, obtenha 5 Relíquias de Cera. A cada 3 combates, sua Relíquia de Cera mais à esquerda derrete.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "very-hot-cocoa--ancient--tezcatara",
    nome: "Chocolate Quente Bem Quente",
    categoria: "Tezcatara",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Comece cada combate com 4 🔮 a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "yummy-cookie--ancient--tezcatara",
    nome: "Biscoito Gostoso",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Aprimore 4 cartas.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "beautiful-bracelet--ancient--nonupeipe",
    nome: "Pulseira Bonita",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Encante 4 cartas aleatórias no seu Baralho com Enchant Swift Swift 2.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "blessed-antler--ancient--nonupeipe",
    nome: "Chifre Abençoado",
    categoria: "Nonupeipe",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 no início de cada turno. No início de cada combate, embaralhe 3 cartas Atordoado na sua Pilha de Compra.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "brilliant-scarf--ancient--nonupeipe",
    nome: "Cachecol Brilhante",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Antiga",
    efeito: "A 5ª carta que você joga da mão a cada turno é de graça.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "delicate-frond--ancient--nonupeipe",
    nome: "Fronde Delicada",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início de cada combate, encha todos os espaços de poção vazios com Poções aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "diamond-diadem--ancient--nonupeipe",
    nome: "Diadema de Diamante",
    categoria: "Nonupeipe",
    icone: "🛡️",
    raridade: "Antiga",
    efeito: "Comece o combate com 20 de 🛡️ Bloqueio. Seu 🛡️ Bloqueio não é removido no início do seu 2º turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "fur-coat--ancient--nonupeipe",
    nome: "Casaco de Pele",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, marque 8 combates aleatórios. Inimigos nessas salas têm 1.",
    descricao: ""
  },
  {
    id: "glitter--ancient--nonupeipe",
    nome: "Purpurina",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Encante todas as recompensas de carta com Enchant Glam Glam.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "jewelry-box--ancient--nonupeipe",
    nome: "Caixa de Joias",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, adicione 1 CardColorless Skill Ancient Apotheosis ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "looming-fruit--ancient--nonupeipe",
    nome: "Fruto Iminente",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, aumente sua Vida máxima em 31.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "signet-ring--ancient--nonupeipe",
    nome: "Anel de Sinete",
    categoria: "Nonupeipe",
    icone: "🪙",
    raridade: "Antiga",
    efeito: "Ao pegar, ganhe 888 🪙 🪙.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "claws--ancient--tanx",
    nome: "Garras",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Transforme até 6 cartas em CardColorless Attack Ancient Maul.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "crossbow--ancient--tanx",
    nome: "Besta",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início do seu turno, adicione um Ataque aleatório à sua Mão. É de graça para jogá-lo neste turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "iron-club--ancient--tanx",
    nome: "Clava de Ferro",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Antiga",
    efeito: "A cada 4 cartas que você joga, compre 1 carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "meat-cleaver--ancient--tanx",
    nome: "Cutelo",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Você pode Cozinhar nos Locais de Descanso.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sai--ancient--tanx",
    nome: "Sai",
    categoria: "Tanx",
    icone: "🛡️",
    raridade: "Antiga",
    efeito: "No início do seu turno, ganhe 7 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "spiked-gauntlets--ancient--tanx",
    nome: "Manoplas com Espinhos",
    categoria: "Tanx",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 no início de cada turno. Poderes custam 1 🔮 a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "tanx-s-whistle--ancient--tanx",
    nome: "Apito de Tanx",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, adicione 1 CardColorless Attack Ancient Whistle ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "throwing-axe--ancient--tanx",
    nome: "Machado de Arremesso",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Antiga",
    efeito: "A primeira carta que você joga em cada combate é jogada uma vez a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "tri-boomerang--ancient--tanx",
    nome: "Tri-Bumerangue",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Escolha 3 Ataques no seu Baralho. Encante-os com Enchant Instinct Instinct.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "war-hammer--ancient--tanx",
    nome: "Martelo de Guerra",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Sempre que você mata um Elite, Aprimore 4 cartas aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "blood-soaked-rose--ancient--vakuu",
    nome: "Rosa Encharcada de Sangue",
    categoria: "Vakuu",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ao pegar, adicione 1 Maldição Enthralled ao seu Baralho. Ganhe 🔮 no início de cada turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "choices-paradox--ancient--vakuu",
    nome: "Paradoxo das Escolhas",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início de cada combate, adicione 1 de 5 cartas aleatórias à sua Mão. Adicione Reter à carta escolhida.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "distinguished-cape--ancient--vakuu",
    nome: "Capa Distinta",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, adicione 2 Maldições aleatórias e 3 CardColorless Skill Ancient Apparitions ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "fiddle--ancient--vakuu",
    nome: "Rabeca",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início de cada turno, compre 2 cartas a mais. Você não pode comprar cartas durante o seu turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "jeweled-mask--ancient--vakuu",
    nome: "Máscara Enjoiada",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início de cada combate, coloque um Poder aleatório da sua Pilha de Compra na sua Mão. É de graça para jogá-lo neste combate.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lord-s-parasol--ancient--vakuu",
    nome: "Sombrinha do Lorde",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Quando você encontra o Mercador, obtém na hora TUDO que ele vende.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "music-box--ancient--vakuu",
    nome: "Caixa de Música",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Crie uma cópia Etérea do primeiro Ataque que você joga a cada turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "preserved-fog--ancient--vakuu",
    nome: "Névoa Preservada",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, remova 3 cartas do seu Baralho. Adicione a Maldição Folly ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sere-talon--ancient--vakuu",
    nome: "Garra Ressequida",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, perca 9 de Vida máxima. Adicione 3 CardColorless Skill Ancient Wishes ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "whispering-earring--ancient--vakuu",
    nome: "Brinco Sussurrante",
    categoria: "Vakuu",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 no início de cada turno. O Vakuu joga o seu primeiro turno por você.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "astrolabe--ancient--darv",
    nome: "Astrolábio",
    categoria: "Darv",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, Transforme 3 cartas e depois Aprimore-as.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "black-star--ancient--darv",
    nome: "Estrela Negra",
    categoria: "Darv",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Elites soltam uma Relíquia a mais ao serem derrotados.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "calling-bell--ancient--darv",
    nome: "Sino de Chamado",
    categoria: "Darv",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, obtenha uma Maldição única e 3 Relíquias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "dusty-tome--ancient--darv",
    nome: "Tomo Empoeirado",
    categoria: "Darv",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, obtenha uma Carta Antiga.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ectoplasm--ancient--darv",
    nome: "Ectoplasma",
    categoria: "Darv",
    icone: "🪙",
    raridade: "Antiga",
    efeito: "Você não pode mais ganhar 🪙 🪙. Ganhe 🔮 no início de cada turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "empty-cage--ancient--darv",
    nome: "Gaiola Vazia",
    categoria: "Darv",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Ao pegar, remova 2 cartas do seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pandora-s-box--ancient--darv",
    nome: "Caixa de Pandora",
    categoria: "Darv",
    icone: "💎",
    raridade: "Antiga",
    efeito: "Transforme TODOS os Strikes e Defends.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "philosopher-s-stone--ancient--darv",
    nome: "Pedra Filosofal",
    categoria: "Darv",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 no início de cada turno. TODOS os inimigos começam o combate com 1 ??? ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "runic-pyramid--ancient--darv",
    nome: "Pirâmide Rúnica",
    categoria: "Darv",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No fim do seu turno, você não descarta mais a sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "snecko-eye--ancient--darv",
    nome: "Olho de Snecko",
    categoria: "Darv",
    icone: "💎",
    raridade: "Antiga",
    efeito: "No início do seu turno, compre 2 cartas a mais. Comece cada combate ?? ??",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sozu--ancient--darv",
    nome: "Sozu",
    categoria: "Darv",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 no início de cada turno. Você não pode mais obter Poções.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "velvet-choker--ancient--darv",
    nome: "Gargantilha de Veludo",
    categoria: "Darv",
    icone: "🔮",
    raridade: "Antiga",
    efeito: "Ganhe 🔮 no início de cada turno. Você não pode jogar mais de 6 cartas por turno.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "belt-buckle--shop--any",
    nome: "Fivela de Cinto",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Loja",
    efeito: "Enquanto você não tiver Poções, você tem 2 🎯 🎯 a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bread--shop--any",
    nome: "Pão",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Loja",
    efeito: "No início do seu primeiro turno, perca 🔮 🔮. No início de todos os outros turnos, ganhe 🔮.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "burning-sticks--shop--any",
    nome: "Gravetos em Chamas",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Na primeira vez em cada combate que você Exaure uma Habilidade, adicione uma cópia dela à sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "cauldron--shop--any",
    nome: "Caldeirão",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ao pegar, prepara 5 Poções aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "chemical-x--shop--any",
    nome: "Químico X",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Os efeitos das suas cartas de custo X aumentam em 2. AVISO: não combine com açúcar, tempero e tudo o que há de bom.",
    descricao: ""
  },
  {
    id: "dingy-rug--shop--any",
    nome: "Tapete Encardido",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "As recompensas de carta agora podem conter cartas Incolores.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "dolly-s-mirror--shop--any",
    nome: "Espelho da Dolly",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ao pegar, obtenha uma cópia extra de uma carta do seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "dragon-fruit--shop--any",
    nome: "Pitaya",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Loja",
    efeito: "Sempre que você ganha 🪙 🪙, aumente sua Vida máxima em 1.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ghost-seed--shop--any",
    nome: "Semente Fantasma",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Strikes e Defends ganham Etéreo.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "gnarled-hammer--shop--any",
    nome: "Martelo Retorcido",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ao pegar, Encante até 3 Ataques com Enchant Sharp Sharp 3.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "kifuda--shop--any",
    nome: "Kifuda",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ao pegar, Encante até 3 cartas com Enchant Adroit Adroit.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lava-lamp--shop--any",
    nome: "Luminária de Lava",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "No fim do combate, Aprimore todas as recompensas de carta se você não sofreu dano.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lee-s-waffle--shop--any",
    nome: "Waffle do Lee",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ao pegar, aumente sua Vida máxima em 7 e cure toda a sua Vida.",
    descricao: ""
  },
  {
    id: "membership-card--shop--any",
    nome: "Cartão de Sócio",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "50% de desconto em todos os produtos!",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "miniature-tent--shop--any",
    nome: "Barraca em Miniatura",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Você pode escolher quantas opções quiser nos Locais de Descanso.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "mystic-lighter--shop--any",
    nome: "Isqueiro Místico",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ataques Encantados causam 9 de dano a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "orrery--shop--any",
    nome: "Planetário Mecânico",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ao pegar, ganhe 5 recompensas de carta.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "punch-dagger--shop--any",
    nome: "Adaga de Soco",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ao pegar, Encante um Ataque com Enchant Momentum Momentum 5.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ringing-triangle--shop--any",
    nome: "Triângulo Tilintante",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Retenha sua Mão no primeiro turno do combate.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "royal-stamp--shop--any",
    nome: "Selo Real",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Ao pegar, escolha um Ataque ou Habilidade do seu Baralho para Encantar com Enchant RoyallyApproved Royally Approved.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "screaming-flagon--shop--any",
    nome: "Caneca Gritante",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Se você terminar o turno sem cartas na Mão, cause 20 de dano a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sling-of-courage--shop--any",
    nome: "Funda da Coragem",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Comece cada combate de Elite com 2 ??? ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "the-abacus--shop--any",
    nome: "O Ábaco",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Loja",
    efeito: "Sempre que você embaralha sua Pilha de Compra, ganhe 6 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "toolbox--shop--any",
    nome: "Caixa de Ferramentas",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "No início de cada combate, escolha 1 de 3 cartas Incolores aleatórias e adicione a carta escolhida à sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "wing-charm--shop--any",
    nome: "Amuleto de Asa",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Loja",
    efeito: "Uma carta aleatória em cada recompensa de carta é Encantada com Enchant Swift Swift 1.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "brimstone--shop--ironclad",
    nome: "Enxofre",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Loja",
    efeito: "No início do seu turno, ganhe 2 ??? ??? e TODOS os inimigos ganham 1 ??? ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ninja-scroll--shop--silent",
    nome: "Pergaminho Ninja",
    categoria: "Silent",
    icone: "💎",
    raridade: "Loja",
    efeito: "No início de cada combate, adicione 3 CardColorless Attack Token Shivs à sua Mão.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "vitruvian-minion--shop--regent",
    nome: "Lacaio Vitruviano",
    categoria: "Regent",
    icone: "🛡️",
    raridade: "Loja",
    efeito: "Cartas que contêm \"Minion\" causam dano dobrado e ganham 🛡️ Bloqueio dobrado.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "undying-sigil--shop--necrobinder",
    nome: "Sigilo Imorredouro",
    categoria: "Necrobinder",
    icone: "🪦",
    raridade: "Loja",
    efeito: "Inimigos com pelo menos tanto 🪦 🪦 quanto Vida causam 50% menos dano.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "runic-capacitor--shop--defect",
    nome: "Capacitor Rúnico",
    categoria: "Defect",
    icone: "💎",
    raridade: "Loja",
    efeito: "Comece cada combate com 3 espaços de Orbe a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "anchor--event--any",
    nome: "Âncora",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Evento",
    efeito: "Comece cada combate com 4 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "big-mushroom--event--any",
    nome: "Cogumelo Grande",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Ao pegar, aumente sua Vida máxima em 20. No início de cada combate, compre 2 cartas a menos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "bing-bong--event--any",
    nome: "Bing Bong",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Sempre que você adiciona uma carta ao Baralho, adicione uma cópia a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "blood-vial--event--any",
    nome: "Frasco de Sangue",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "No início de cada combate, cure 1.",
    descricao: ""
  },
  {
    id: "bone-tea--event--any",
    nome: "Chá de Osso",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "No início do próximo combate, Aprimore sua mão inicial.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "byrdpip--event--any",
    nome: "Byrdpip",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Ao pegar, ganhe a carta CardColorless Attack Event Byrd Swoop. Um Byrdpip vai te acompanhar nas batalhas.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "darkstone-periapt--event--any",
    nome: "Amuleto de Pedra Negra",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Sempre que você obtém uma Maldição, aumente sua Vida máxima em 6.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "daughter-of-the-wind--event--any",
    nome: "Filha do Vento",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Evento",
    efeito: "Sempre que você joga um Ataque, ganhe 1 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "dream-catcher--event--any",
    nome: "Filtro dos Sonhos",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Sempre que você Descansa, você pode adicionar uma carta ao seu Baralho.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "ember-tea--event--any",
    nome: "Chá de Brasa",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "No início dos próximos 5 combates, ganhe 2 ??? ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "forgotten--event--any",
    nome: "Esquecido 👻",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Sempre que você Exaure uma carta, cause 1 de dano a um inimigo aleatório.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "fragrant-mushroom--event--any",
    nome: "Cogumelo Perfumado",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Ao pegar, perca 15 de Vida e Aprimore 2 cartas aleatórias.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "fresnel-lens--event--any",
    nome: "Lente de Fresnel",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Evento",
    efeito: "Sempre que você adiciona ao Baralho uma carta que dá 🛡️ Bloqueio, Encante-a com Enchant Nimble Nimble 2.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "hand-drill--event--any",
    nome: "Furadeira Manual",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Evento",
    efeito: "Sempre que você quebra o 🛡️ Bloqueio de um inimigo, aplique 2 💔 💔.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "happy-flower--event--any",
    nome: "Flor Feliz",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Evento",
    efeito: "A cada 5 turnos, ganhe 🔮.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "history-course--event--any",
    nome: "Curso de História",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "No início do seu turno, joga uma cópia do último Ataque que você jogou.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "lee-s-waffle--event--any",
    nome: "Waffle do Lee",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Ao pegar, cure 10% da sua Vida.",
    descricao: ""
  },
  {
    id: "lost-wisp--event--any",
    nome: "Fátuo Perdido",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Sempre que você joga um Poder, cause 8 de dano a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "mango--event--any",
    nome: "Manga",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Ao pegar, aumente sua Vida máxima em 3.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "maw-bank--event--any",
    nome: "Cofrinho Bocarra",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Evento",
    efeito: "Sempre que você sobe um andar, ganhe 12 🪙 🪙. Deixa de funcionar quando você gasta qualquer 🪙 🪙 na loja.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "mr-struggles--event--any",
    nome: "Sr. Dificuldades",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "No início do seu turno, cause dano igual ao número do turno a TODOS os inimigos.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "orichalcum--event--any",
    nome: "Oricalco",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Evento",
    efeito: "Se você terminar o turno sem 🛡️ Bloqueio, ganhe 3 de 🛡️ Bloqueio.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "pollinous-core--event--any",
    nome: "Núcleo Polinoso",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "A cada 4 turnos, compre 2 cartas a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "royal--event--any",
    nome: "🧪 Real",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "No início de cada combate, perca 4.",
    descricao: ""
  },
  {
    id: "snecko-eye--event--any",
    nome: "Olho de Snecko",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Comece cada combate ?? ??",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "strike-dummy--event--any",
    nome: "Boneco de Treino",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Cartas que contêm “Strike” causam 1 de dano a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sword-of-jade--event--any",
    nome: "Espada de Jade",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Comece cada combate com 3 ??? ???",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "sword-of-stone--event--any",
    nome: "Espada de Pedra",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Transforma-se numa Relíquia poderosa depois de derrotar 5 Elites.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "tea-of-discourtesy--event--any",
    nome: "Chá da Descortesia",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "No início do próximo combate, embaralhe 2 cartas Atordoado na sua Pilha de Compra.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "the-boot--event--any",
    nome: "A Bota",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Sempre que você fosse causar 4 ou menos de dano de ataque não bloqueado, aumente para 5.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "the-chosen-cheese--event--any",
    nome: "O Queijo Escolhido",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "No fim do combate, ganhe 1 de Vida máxima.",
    descricao: ""
  },
  {
    id: "the-merchant-s-rug--event--any",
    nome: "O Tapete do Mercador",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Imitação barata. Não faz nada.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "venerable-tea-set--event--any",
    nome: "Jogo de Chá Venerável",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Evento",
    efeito: "Sempre que você entra num Local de Descanso, comece o próximo combate com 🔮 a mais.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "wongo-customer-appreciation-badge--event--any",
    nome: "Broche de Gratidão ao Cliente Wongo",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Não faz nada.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "wongo-s-mystery-ticket--event--any",
    nome: "Bilhete Misterioso do Wongo",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Evento",
    efeito: "Receba 3 Relíquias aleatórias depois de 5 combates.",
    descricao: "Os detalhes desta relíquia serão revelados no futuro..."
  },
  {
    id: "circlet--special--any",
    nome: "Diadema",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Especial",
    efeito: "É um diadema. Uma relíquia curiosa que aparece quando há um problema na Torre ou quando não há mais relíquias para descobrir.",
    descricao: ""
  },
];

/* ---------------------------------------------------------------------------
 *  GUIA DE SÍMBOLOS
 *  Legenda de emojis usada nos efeitos das relíquias (do topo de relics.md).
 * ------------------------------------------------------------------------- */

const LEGENDA = [
  { emoji: "⭐",  nome: "Star Regent" },
  { emoji: "⚡",  nome: "Lightning Orb" },
  { emoji: "🪙", nome: "Gold" },
  { emoji: "🛡️", nome: "Intent Defend" },
  { emoji: "💔", nome: "Vulnerable" },
  { emoji: "🌵", nome: "Thorns" },
  { emoji: "🪖", nome: "Plating" },
  { emoji: "🔮", nome: "Energy Colorless" },
  { emoji: "🎯", nome: "Dexterity" },
  { emoji: "🥱", nome: "Weak" },
  { emoji: "🧪", nome: "Poison" },
  { emoji: "🧐", nome: "Focus" },
  { emoji: "🔥", nome: "Vigor" },
  { emoji: "🪨", nome: "Shaped Rock" },
  { emoji: "🪦", nome: "Doom" },
  { emoji: "👻", nome: "Soul" },
  { emoji: "😈", nome: "Dark" },
  { emoji: "🌸", nome: "Energy Necrobinder" },
  { emoji: "🤑", nome: "Greed" },
  { emoji: "🪄", nome: "Dowsing" },
  { emoji: "🤕", nome: "Injury" },
];

/* ---------------------------------------------------------------------------
 *  ANCIÕES
 *  Encontros que concedem relíquias (não são combates). O campo `categoria`
 *  liga o Ancião às relíquias de raridade "Antiga" que ele oferece.
 * ------------------------------------------------------------------------- */

const ANCIOES = [
  {
    id: "neow",
    nome: "Neow",
    categoria: "Neow",
    icone: "🌟",
    local: "Ato 1 — Matagal / Docas Submersas",
    descricao: "A \"Mãe da Ressurreição\". Não é um combate: ao iniciar uma nova jornada (depois da primeira), Neow oferece 3 relíquias — 1 do Pool de Maldição e 2 do Pool Positivo — para você escolher uma. Fala em frases fragmentadas que sugerem ter refeito ou ressuscitado o personagem, com diálogo próprio para cada protagonista.",
    pools: [
      {
        titulo: "Pool de Maldição — 1 oferecida",
        nota: "Relíquias com desvantagem. Uma é sorteada primeiro; ela e mais 2 do Pool Positivo são oferecidas.",
        relics: ["Pérola Amaldiçoada", "Vara", "Tábua Pesada", "Cápsula Grande", "Cataplasma de Folhas", "Ossos de Neow", "Sacrifício de Neow", "Tesoura Precária", "Mecha de Seda", "Cadinho de Prata"],
      },
      {
        titulo: "Pool Positivo — 2 oferecidas",
        nota: "As 6 primeiras são fixas; as demais só entram se a maldição correspondente NÃO foi sorteada (ou dependem de modo de jogo).",
        relics: ["Concha Estrondosa", "Vara de Pesca", "Caleidoscópio", "Peso de Papel de Chumbo", "Tormento de Neow", "Caixas de Pergaminhos", "Pérola Dourada", "Pergaminho Arcano", "Folha Nova", "Tesoura Precisa", "Coldre de Frascos", "Cofre Perdido", "Rocha de Lava", "Cápsula Pequena", "Ostra Nutritiva", "Umidificador de Pedra", "Talismã de Neow", "Pomo Aromático", "Pergaminho Enorme", "Botas Aladas"],
      },
    ],
  },
  {
    id: "orobas",
    nome: "Orobas",
    categoria: "Orobas",
    icone: "🐴",
    local: "Ato 2 — Colmeia",
    descricao: "Ancião nomeado a partir de um demônio do grimório Ars Goetia, tradicionalmente retratado como sincero e confiável — o que combina com seu jeito prestativo e esquisito. Diz \"Puppet puppet!! Lá em cima?! Peguem isto, peguem peguem!\" e oferece 1 relíquia de cada um de 3 pools. Desbloqueio: completar o evento Orobas – Capítulo 2 (jogar uma jornada com cada personagem).",
    pools: [
      {
        titulo: "Pool 1 — 1 oferecida",
        nota: "Chances: 33,3% / 33,3% / 22,2% / 11,1%.",
        relics: ["Camarão Elétrico", "Olho de Vidro", "Vidro do Mar", "Gema Prismática"],
      },
      {
        titulo: "Pool 2 — 1 oferecida",
        nota: "25% cada.",
        relics: ["Cofre Alquímico", "Madeira à Deriva", "Pérola Radiante", "Castelo de Areia"],
      },
      {
        titulo: "Pool 3 — 1 oferecida",
        nota: "50% cada.",
        relics: ["Dente Arcaico", "Toque de Orobas"],
      },
    ],
  },
  {
    id: "pael",
    nome: "Pael",
    categoria: "Pael",
    icone: "🌙",
    local: "Ato 2 — Colmeia",
    descricao: "Ancião sonolento e meditativo. \"Uma marionete chegou?\" Fala com temas de paz contra conflito e pede para você \"checar o Pai\". Oferece 1 relíquia de cada um de 3 pools; algumas são condicionais.",
    pools: [
      {
        titulo: "Pool 1 — 1 oferecida",
        nota: "33,3% cada.",
        relics: ["Carne de Pael", "Chifre de Pael", "Lágrimas de Pael"],
      },
      {
        titulo: "Pool 2 — 1 oferecida",
        nota: "Depende do baralho: Garra de Pael exige 3+ Defends encantáveis; Dente de Pael exige 5+ cartas removíveis; Crescimento de Pael tem metade da chance quando tudo está disponível.",
        relics: ["Asa de Pael", "Garra de Pael", "Dente de Pael", "Crescimento de Pael"],
      },
      {
        titulo: "Pool 3 — 1 oferecida",
        nota: "Legião de Pael fica indisponível se você já tiver um bicho de estimação (Byrdpip / Ovo de Byrdonis); nesse caso Sangue e Olho ficam com 50% cada.",
        relics: ["Sangue de Pael", "Olho de Pael", "Legião de Pael"],
      },
    ],
  },
  {
    id: "tezcatara",
    nome: "Tezcatara",
    categoria: "Tezcatara",
    icone: "🔥",
    local: "Ato 2 — Colmeia",
    descricao: "Ancião hospitaleiro e acolhedor, com mecânicas e falas temáticas de fogo — oferece \"guloseimas\" e fala em \"queimar seus defeitos\". Dá 1 relíquia de cada um de 3 pools. O diálogo varia por personagem. (Conteúdo beta.)",
    pools: [
      {
        titulo: "Pool 1 — 1 oferecida",
        nota: "33,3% cada.",
        relics: ["Sopa Nutritiva", "Chocolate Quente Bem Quente", "Biscoito Gostoso"],
      },
      {
        titulo: "Pool 2 — 1 oferecida",
        nota: "33,3% cada.",
        relics: ["Abraaaço", "Livro de Histórias", "Luvas Quentinhas"],
      },
      {
        titulo: "Pool 3 — 1 oferecida",
        nota: "25% cada.",
        relics: ["Bússola Dourada", "Vela de Abóbora", "Caixa de Brinquedos", "Selo de 🪙"],
      },
    ],
  },
  {
    id: "nonupeipe",
    nome: "Nonupeipe",
    categoria: "Nonupeipe",
    icone: "💍",
    local: "Ato 3 — Glória",
    descricao: "Ancião vaidoso e acolhedor: \"Não recebo visita há um milênio! Você está bem sem graça, vem, vamos achar algo encantador pra você usar.\" Oferece 3 relíquias sorteadas de um pool. Tem diálogo próprio para cada personagem.",
    pools: [
      {
        titulo: "Pool — 3 sorteadas",
        nota: "9 relíquias fixas (33,3% cada). Pulseira Bonita só entra se você tiver 4+ cartas encantáveis com Swift — nesse caso todas ficam com 30%.",
        relics: ["Chifre Abençoado", "Cachecol Brilhante", "Fronde Delicada", "Diadema de Diamante", "Casaco de Pele", "Purpurina", "Caixa de Joias", "Fruto Iminente", "Anel de Sinete", "Pulseira Bonita"],
      },
    ],
  },
  {
    id: "tanx",
    nome: "Tanx",
    categoria: "Tanx",
    icone: "🦁",
    local: "Ato 3 — Glória",
    descricao: "O \"Rei Khimera\", inspirado na Quimera da mitologia grega, obcecado por armas: \"TÃO FRACO! MAS VOCÊ TEM POTENCIAL! USE ESTA ARMA!!\" Oferece 3 relíquias sorteadas de um pool.",
    pools: [
      {
        titulo: "Pool — 3 sorteadas",
        nota: "9 relíquias fixas (33,3% cada). Tri-Bumerangue só entra se você tiver 3+ Ataques encantáveis com Instinct — nesse caso todas ficam com 30%.",
        relics: ["Garras", "Besta", "Clava de Ferro", "Cutelo", "Sai", "Manoplas com Espinhos", "Apito de Tanx", "Machado de Arremesso", "Martelo de Guerra", "Tri-Bumerangue"],
      },
    ],
  },
  {
    id: "vakuu",
    nome: "Vakuu",
    categoria: "Vakuu",
    icone: "👹",
    local: "Ato 3 — Glória",
    descricao: "Ancião ameaçador: \"Entregue-se a mim e você será temido tanto quanto eu.\" O Ironclad o reconhece como \"DEMÔNIO SAGRADO\" e o Necrobinder cita uma vingança em comum contra o Arquiteto. Oferece 1 relíquia de cada um de 3 pools. (Conteúdo beta.)",
    pools: [
      {
        titulo: "Pool 1 — 1 oferecida",
        nota: "33,3% cada.",
        relics: ["Rosa Encharcada de Sangue", "Rabeca", "Brinco Sussurrante"],
      },
      {
        titulo: "Pool 2 — 1 oferecida",
        nota: "33,3% cada.",
        relics: ["Capa Distinta", "Névoa Preservada", "Garra Ressequida"],
      },
      {
        titulo: "Pool 3 — 1 oferecida",
        nota: "25% cada.",
        relics: ["Paradoxo das Escolhas", "Máscara Enjoiada", "Sombrinha do Lorde", "Caixa de Música"],
      },
    ],
  },
  {
    id: "darv",
    nome: "Darv",
    categoria: "Darv",
    icone: "🗃️",
    local: "Atos 2 e 3 — Colmeia / Glória",
    descricao: "O único Ancião que aparece em mais de um ato. \"Veio ver minha coleção!? Pega qualquer coisa daquela pilha ali, dá bom uso!\" Distribuição 50/50: metade das vezes dá 3 relíquias do Pool 1; a outra metade dá 2 do Pool 1 mais o Tomo Empoeirado. Desbloqueio: concluir Darv – Capítulo 5 na Linha do Tempo (ter encontrado todos os outros Anciões pelo menos uma vez).",
    pools: [
      {
        titulo: "Pool 1",
        nota: "Ectoplasma e Sozu só aparecem no Ato 2.",
        relics: ["Astrolábio", "Estrela Negra", "Sino de Chamado", "Gaiola Vazia", "Pedra Filosofal", "Pirâmide Rúnica", "Olho de Snecko", "Gargantilha de Veludo", "Caixa de Pandora", "Ectoplasma", "Sozu"],
      },
      {
        titulo: "Pool 2",
        nota: "Concede uma Carta de Poder Antiga da sua classe (Corruption, Wraith Form, The Sealed Throne, Forbidden Grimoire ou Biased Cognition).",
        relics: ["Tomo Empoeirado"],
      },
    ],
  },
];

/* Exposição global para o app.js */
window.COMPENDIO = { MONSTROS, RELIQUIAS, LEGENDA, ANCIOES };
