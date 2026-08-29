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
    nome: "Leaf Slime (S)",
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
    descricao: "Limo pequeno do Matagal (Ato 1). Os Slimes vêm em quatro variedades (dois Leaf, dois Twig, cada um em tamanho P e M); este é o Leaf Slime pequeno, um dos inimigos mais fracos do início. 11–15 de vida (12–16 na A8).",
  },
  {
    id: "shrinker-beetle",
    nome: "Shrinker Beetle",
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
    nome: "Fuzzy Wurm Crawler",
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
    nome: "Eye With Teeth",
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
    nome: "Snapping Jaxfruit",
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
    nome: "Slithering Strangler",
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
    nome: "Vine Shambler",
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
    nome: "Cubex Construct",
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
    nome: "Axe Raider",
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
    nome: "Assassin Raider",
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
    nome: "Brute Raider",
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
    nome: "Crossbow Raider",
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
    nome: "Tracker Raider",
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
    nome: "Sludge Spinner",
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
    nome: "Toadpole",
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
    nome: "Calcified Cultist",
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
    nome: "Damp Cultist",
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
    nome: "Living Fog",
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
    nome: "Fossil Stalker",
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
    nome: "Gremlin Merc",
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
    nome: "Haunted Ship",
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
    nome: "Punch Construct",
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
    nome: "Sewer Clam",
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
    nome: "Two-Tailed Rat",
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
    nome: "Bowlbug (Rock)",
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
    descricao: "Inseto da Colmeia (Ato 2), o Bowlbug de casco de pedra. Bloquear a Cabeçada por inteiro o desativa por um turno. Vem acompanhado de Bowlbugs operários (Ovo/Seda/Néctar) ou de um Tunneler e um Besouro Sonolento. 45–48 de vida (46–49 na A8).",
  },
  {
    id: "exoskeleton",
    nome: "Exoskeleton",
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
    nome: "Thieving Hopper",
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
    nome: "Tunneler",
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
    nome: "Chomper",
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
    nome: "Hunter Killer",
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
    nome: "Louse Progenitor",
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
    nome: "Ovicopter",
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
    nome: "Slumbering Beetle",
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
    nome: "Spiny Toad",
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
    descricao: "Anfíbio da Colmeia (Ato 2), a forma adulta do Toadpole. Ciclo fixo: acumula Espinhos e depois os gasta na explosão. 116–119 de vida (121–124 na A8).",
  },
  {
    id: "the-obscura",
    nome: "The Obscura",
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
    nome: "Devoted Sculptor",
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
    nome: "Fabricator",
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
    nome: "Frog Knight",
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
    descricao: "Anfíbio da Glória (Ato 3), montado num Besouro Sonolento menor. Abre com Lambida e cicla Golpear o Mal → Pela Rainha, com uma Investida devastadora ao chegar na metade da vida. 191 de vida (199 na A8).",
  },
  {
    id: "globe-head",
    nome: "Globe Head",
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
    nome: "Living Shield",
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
    nome: "Owl Magistrate",
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
    nome: "Scroll of Biting",
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
    nome: "Slimed Berserker",
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
    nome: "The Lost",
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
    nome: "The Forgotten",
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
    nome: "Burning Blood",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Starter",
    efeito: "At the end of combat, heal 6 HP.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "black-blood--starter--ironclad",
    nome: "Black Blood",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Starter",
    efeito: "At the end of combat, heal 12 HP.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ring-of-the-snake--starter--silent",
    nome: "Ring of the Snake",
    categoria: "Silent",
    icone: "💎",
    raridade: "Starter",
    efeito: "At the start of each combat, draw 2 additional cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ring-of-the-drake--starter--silent",
    nome: "Ring of the Drake",
    categoria: "Silent",
    icone: "💎",
    raridade: "Starter",
    efeito: "At the start of your first 3 turns, draw 2 additional cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "divine-right--starter--regent",
    nome: "Divine Right",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Starter",
    efeito: "At the start of each combat, gain ⭐ ⭐ ⭐.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "divine-destiny--starter--regent",
    nome: "Divine Destiny",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Starter",
    efeito: "At the start of each combat, gain ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bound-phylactery--starter--necrobinder",
    nome: "Bound Phylactery",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Starter",
    efeito: "At the start of your turn, Summon 1.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "phylactery-unbound--starter--necrobinder",
    nome: "Phylactery Unbound",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Starter",
    efeito: "At the start of each combat, Summon 5. At the start of your turn, Summon 2.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "cracked-core--starter--defect",
    nome: "Cracked Core",
    categoria: "Defect",
    icone: "⚡",
    raridade: "Starter",
    efeito: "At the start of each combat, Channel 1 ⚡ ?",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "infused-core--starter--defect",
    nome: "Infused Core",
    categoria: "Defect",
    icone: "⚡",
    raridade: "Starter",
    efeito: "At the start of each combat, Channel 3 ⚡ ?. ⚡ ? Orbs deal 1 additional damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "amethyst-aubergine--common--any",
    nome: "Amethyst Aubergine",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Common",
    efeito: "Enemies drop 15 additional 🪙 🪙.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "anchor--common--any",
    nome: "Anchor",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Common",
    efeito: "Start each combat with 10 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bag-of-marbles--common--any",
    nome: "Bag of Marbles",
    categoria: "Qualquer",
    icone: "💔",
    raridade: "Common",
    efeito: "At the start of each combat, apply 1 💔 💔 to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bag-of-preparation--common--any",
    nome: "Bag of Preparation",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "At the start of each combat, draw 2 additional cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "blood-vial--common--any",
    nome: "Blood Vial",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "At the start of each combat, heal 2.",
    descricao: ""
  },
  {
    id: "book-of-five-rings--common--any",
    nome: "Book of Five Rings",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Every 5 cards you add to your Deck, heal 20.",
    descricao: ""
  },
  {
    id: "bronze-scales--common--any",
    nome: "Bronze Scales",
    categoria: "Qualquer",
    icone: "🌵",
    raridade: "Common",
    efeito: "Start each combat with 3 🌵 🌵.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "centennial-puzzle--common--any",
    nome: "Centennial Puzzle",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "The first time you lose HP each combat, draw 3 cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "festive-popper--common--any",
    nome: "Festive Popper",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "At the start of each combat, deal 9 damage to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "gorget--common--any",
    nome: "Gorget",
    categoria: "Qualquer",
    icone: "🪖",
    raridade: "Common",
    efeito: "At the start of each combat, gain 4 🪖 🪖.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "happy-flower--common--any",
    nome: "Happy Flower",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Common",
    efeito: "Every 3 turns, gain 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "juzu-bracelet--common--any",
    nome: "Juzu Bracelet",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Regular enemy combats are no longer encountered in ? Rooms.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lantern--common--any",
    nome: "Lantern",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Common",
    efeito: "Start each combat with an additional 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "meal-ticket--common--any",
    nome: "Meal Ticket",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Whenever you enter a shop room, heal 15.",
    descricao: ""
  },
  {
    id: "oddly-smooth-stone--common--any",
    nome: "Oddly Smooth Stone",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Common",
    efeito: "Start each combat with 1 🎯 🎯.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pendulum--common--any",
    nome: "Pendulum",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Every 3 turns, draw 1 card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "potion-belt--common--any",
    nome: "Potion Belt",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Upon pickup, gain 2 potion slots.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "red-mask--common--any",
    nome: "Red Mask",
    categoria: "Qualquer",
    icone: "🥱",
    raridade: "Common",
    efeito: "At the start of combat, apply 1 🥱 🥱 to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "regal-pillow--common--any",
    nome: "Regal Pillow",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Whenever you Rest, heal an additional 15.",
    descricao: ""
  },
  {
    id: "strawberry--common--any",
    nome: "Strawberry",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Upon pickup, raise your Max HP by 7.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "strike-dummy--common--any",
    nome: "Strike Dummy",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Cards containing “Strike” deal 3 additional damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "vajra--common--any",
    nome: "Vajra",
    categoria: "Qualquer",
    icone: "🗡️",
    raridade: "Common",
    efeito: "Start each combat with 1 🗡️ ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "venerable-tea-set--common--any",
    nome: "Venerable Tea Set",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Common",
    efeito: "Whenever you enter a Rest Site, start the next combat with an additional 🔮 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "war-paint--common--any",
    nome: "War Paint",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Upon pickup, Upgrade 2 random Skills.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "whetstone--common--any",
    nome: "Whetstone",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Common",
    efeito: "Upon pickup, Upgrade 2 random Attacks.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "red-skull--common--ironclad",
    nome: "Red Skull",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Common",
    efeito: "While your HP is at or below 50%, you have 3 additional ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "snecko-skull--common--silent",
    nome: "Snecko Skull",
    categoria: "Silent",
    icone: "🧪",
    raridade: "Common",
    efeito: "Whenever you apply 🧪 🧪, apply an additional 1 🧪 🧪.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "fencing-manual--common--regent",
    nome: "Fencing Manual",
    categoria: "Regent",
    icone: "💎",
    raridade: "Common",
    efeito: "At the start of each combat, Forge 10.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bone-flute--common--necrobinder",
    nome: "Bone Flute",
    categoria: "Necrobinder",
    icone: "🛡️",
    raridade: "Common",
    efeito: "Whenever Osty attacks, gain 2 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "data-disk--common--defect",
    nome: "Data Disk",
    categoria: "Defect",
    icone: "🧐",
    raridade: "Common",
    efeito: "Start each combat with 1 🧐 🧐.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "akabeko--uncommon--any",
    nome: "Akabeko",
    categoria: "Qualquer",
    icone: "🔥",
    raridade: "Uncommon",
    efeito: "At the start of each combat, gain 8 🔥 🔥.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bowler-hat--uncommon--any",
    nome: "Bowler Hat",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Uncommon",
    efeito: "Gain 25% additional 🪙 🪙.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "candelabra--uncommon--any",
    nome: "Candelabra",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Uncommon",
    efeito: "At the start of your 2nd turn, gain 🔮 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "eternal-feather--uncommon--any",
    nome: "Eternal Feather",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "For every 5 cards in your Deck, heal 3 HP whenever you enter a Rest Site.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "gremlin-horn--uncommon--any",
    nome: "Gremlin Horn",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Uncommon",
    efeito: "Whenever an enemy dies, gain 🔮 and draw 1 card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "horn-cleat--uncommon--any",
    nome: "Horn Cleat",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "At the start of your 2nd turn, gain 14 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "joss-paper--uncommon--any",
    nome: "Joss Paper",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Every 5 times you Exhaust a card, draw 1 card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "kusarigama--uncommon--any",
    nome: "Kusarigama",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Every time you play 3 Attacks in a single turn, deal 6 damage to a random enemy.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lasting-candy--uncommon--any",
    nome: "Lasting Candy",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Every other combat, your card rewards gain an additional Power.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "letter-opener--uncommon--any",
    nome: "Letter Opener",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Every time you play 3 Skills in a single turn, deal 5 damage to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lucky-fysh--uncommon--any",
    nome: "Lucky Fysh",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Uncommon",
    efeito: "Whenever you add a card to your Deck, gain 15 🪙 🪙.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "mercury-hourglass--uncommon--any",
    nome: "Mercury Hourglass",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "At the start of your turn, deal 3 damage to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "miniature-cannon--uncommon--any",
    nome: "Miniature Cannon",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Upgraded Attacks deal 3 additional damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "nunchaku--uncommon--any",
    nome: "Nunchaku",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Uncommon",
    efeito: "Every time you play 10 Attacks, gain 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "orichalcum--uncommon--any",
    nome: "Orichalcum",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "If you end your turn without 🛡️ Block, gain 6 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ornamental-fan--uncommon--any",
    nome: "Ornamental Fan",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "Every time you play 3 Attacks in a single turn, gain 4 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pantograph--uncommon--any",
    nome: "Pantograph",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "At the start of each Boss combat, heal 25.",
    descricao: ""
  },
  {
    id: "parrying-shield--uncommon--any",
    nome: "Parrying Shield",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "If you end a turn with at least 10 🛡️ Block, deal 6 damage to a random enemy.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pear--uncommon--any",
    nome: "Pear",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Upon pickup, raise your Max HP by 10.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pen-nib--uncommon--any",
    nome: "Pen Nib",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Every 10th Attack you play deals double damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "permafrost--uncommon--any",
    nome: "Permafrost",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "The first time you play a Power each combat, gain 7 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "petrified-toad--uncommon--any",
    nome: "Petrified Toad",
    categoria: "Qualquer",
    icone: "🪨",
    raridade: "Uncommon",
    efeito: "At the start of each combat, procure a Potion-🪨 Potion-Shaped Rock.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "planisphere--uncommon--any",
    nome: "Planisphere",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Whenever you enter a ? room, heal 5.",
    descricao: ""
  },
  {
    id: "reptile-trinket--uncommon--any",
    nome: "Reptile Trinket",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Whenever you use a Potion, gain 3 ??? ??? this turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ripple-basin--uncommon--any",
    nome: "Ripple Basin",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "If you did not play any Attacks during your turn, gain 4 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sparkling-rouge--uncommon--any",
    nome: "Sparkling Rouge",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Uncommon",
    efeito: "At the start of your 3rd turn, gain 1 ??? ??? and 1 🎯 🎯.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "stone-cracker--uncommon--any",
    nome: "Stone Cracker",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "At the start of combat, Upgrade 2 random cards in your Draw Pile for the rest of combat.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "tiny-mailbox--uncommon--any",
    nome: "Tiny Mailbox",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Whenever you Rest, procure 2 random Potion.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "tuning-fork--uncommon--any",
    nome: "Tuning Fork",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "Every time you play 10 Skills, gain 7 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "vambrace--uncommon--any",
    nome: "Vambrace",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "The first time you gain 🛡️ Block from a card each combat, double the amount gained.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "paper-phrog--uncommon--ironclad",
    nome: "Paper Phrog",
    categoria: "Ironclad",
    icone: "💔",
    raridade: "Uncommon",
    efeito: "Enemies with 💔 💔 take 75% more damage rather than 50%.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "self-forming-clay--uncommon--ironclad",
    nome: "Self-Forming Clay",
    categoria: "Ironclad",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "Whenever you lose HP in combat, gain 3 🛡️ Block next turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "tingsha--uncommon--silent",
    nome: "Tingsha",
    categoria: "Silent",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Whenever you discard a card during your turn, deal 3 damage to a random enemy for each card discarded.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "twisted-funnel--uncommon--silent",
    nome: "Twisted Funnel",
    categoria: "Silent",
    icone: "🧪",
    raridade: "Uncommon",
    efeito: "At the start of each combat, apply 4 🧪 🧪 to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "galactic-dust--uncommon--regent",
    nome: "Galactic Dust",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Uncommon",
    efeito: "For every 10 ⭐ spent, gain 10 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "regalite--uncommon--regent",
    nome: "Regalite",
    categoria: "Regent",
    icone: "🛡️",
    raridade: "Uncommon",
    efeito: "The first time you create a card each turn, gain 4 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "book-repair-knife--uncommon--necrobinder",
    nome: "Book Repair Knife",
    categoria: "Necrobinder",
    icone: "🪦",
    raridade: "Uncommon",
    efeito: "Whenever a non-Minion enemy dies to 🪦 🪦, heal 3.",
    descricao: ""
  },
  {
    id: "funerary-mask--uncommon--necrobinder",
    nome: "Funerary Mask",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "At the start of each combat, add 3 CardColorless Skill Token Souls into your Draw Pile.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "plated-cables--uncommon--defect",
    nome: "Plated Cables",
    categoria: "Defect",
    icone: "💎",
    raridade: "Uncommon",
    efeito: "Your rightmost Orb triggers its passive an additional time.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "symbiotic-virus--uncommon--defect",
    nome: "Symbiotic Virus",
    categoria: "Defect",
    icone: "😈",
    raridade: "Uncommon",
    efeito: "At the start of each combat, Channel 1 DarkOrb 😈.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "art-of-war--rare--any",
    nome: "Art of War",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Rare",
    efeito: "If you do not play any Attacks during your turn, gain an additional 🔮 next turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "beating-remnant--rare--any",
    nome: "Beating Remnant",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "You cannot lose more than 20 HP in a single turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bellows--rare--any",
    nome: "Bellows",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "The first Hand you draw each combat is Upgraded.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "captain-s-wheel--rare--any",
    nome: "Captain's Wheel",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Rare",
    efeito: "At the start of your 3rd turn, gain 18 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "chandelier--rare--any",
    nome: "Chandelier",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Rare",
    efeito: "At the start of your 3rd turn, gain 🔮 🔮 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "cloak-clasp--rare--any",
    nome: "Cloak Clasp",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Rare",
    efeito: "At the end of your turn, gain 1 🛡️ Block for each card in your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "frozen-egg--rare--any",
    nome: "Frozen Egg",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you add a Power into your Deck, Upgrade it.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "gambling-chip--rare--any",
    nome: "Gambling Chip",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "At the start of each combat, discard any number of cards then draw that many.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "game-piece--rare--any",
    nome: "Game Piece",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you play a Power, draw 1 card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "girya--rare--any",
    nome: "Girya",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "You can now gain ??? ??? at Rest Site. (3 times max).",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ice-cream--rare--any",
    nome: "Ice Cream",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Rare",
    efeito: "🔮 Energy is now conserved between turns.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "intimidating-helmet--rare--any",
    nome: "Intimidating Helmet",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Rare",
    efeito: "Whenever you play a card that costs 🔮 🔮 or more, gain 4 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "kunai--rare--any",
    nome: "Kunai",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Rare",
    efeito: "Every time you play 3 Attacks in a single turn, gain 1 🎯 🎯.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lizard-tail--rare--any",
    nome: "Lizard Tail",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "When your HP would be reduced to 0, heal to 50% of your Max HP instead (works once).",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "mango--rare--any",
    nome: "Mango",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Upon pickup, raise your Max HP by 14.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "meat-on-the-bone--rare--any",
    nome: "Meat on the Bone",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "If your HP is at or below 50% at the end of combat, heal 12.",
    descricao: ""
  },
  {
    id: "molten-egg--rare--any",
    nome: "Molten Egg",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you add an Attack card to your Deck, Upgrade it.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "mummified-hand--rare--any",
    nome: "Mummified Hand",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you play a Power, a random card in your Hand is free to play that turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "old-coin--rare--any",
    nome: "Old Coin",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Rare",
    efeito: "Upon pickup, gain 300 🪙 🪙.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pocketwatch--rare--any",
    nome: "Pocketwatch",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you play 3 or fewer cards during your turn, draw 3 additional cards at the start of your next turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "prayer-wheel--rare--any",
    nome: "Prayer Wheel",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Normal enemies drop an additional card reward.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "rainbow-ring--rare--any",
    nome: "Rainbow Ring",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Rare",
    efeito: "The first time you play an Attack, Skill, and Power each turn, gain 1 ??? ??? and 1 🎯 🎯.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "razor-tooth--rare--any",
    nome: "Razor Tooth",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Every time you play an Attack or Skill, Upgrade it for the remainder of combat.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "shovel--rare--any",
    nome: "Shovel",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "You can now dig at Rest Site to obtain a random Relic.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "shuriken--rare--any",
    nome: "Shuriken",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Every time you play 3 Attacks in a single turn, gain 1 ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "stone-calendar--rare--any",
    nome: "Stone Calendar",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "At the end of turn 7, deal 52 damage to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sturdy-clamp--rare--any",
    nome: "Sturdy Clamp",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Rare",
    efeito: "Up to 10 🛡️ Block persists across turns.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "the-courier--rare--any",
    nome: "The Courier",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "The merchant no longer runs out of cards, relics, or Potion and his prices are reduced by 20%.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "toxic-egg--rare--any",
    nome: "Toxic Egg",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you add a Skill into your Deck, Upgrade it.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "tungsten-rod--rare--any",
    nome: "Tungsten Rod",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you would lose HP, lose 1 less.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "unceasing-top--rare--any",
    nome: "Unceasing Top",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you have no cards in Hand during your turn, draw a card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "unsettling-lamp--rare--any",
    nome: "Unsettling Lamp",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Each combat, the first time you play a card that Debuffs an enemy, double its effect.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "vexing-puzzlebox--rare--any",
    nome: "Vexing Puzzlebox",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "At the start of each combat, add a random card into your Hand. It's free to play this turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "white-beast-statue--rare--any",
    nome: "White Beast Statue",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Potion always appear in combat rewards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "white-star--rare--any",
    nome: "White Star",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Rare",
    efeito: "Elites drop an additional Rare card reward.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "charon-s-ashes--rare--ironclad",
    nome: "Charon's Ashes",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Rare",
    efeito: "Whenever you Exhaust a card, deal 3 damage to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "demon-tongue--rare--ironclad",
    nome: "Demon Tongue",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Rare",
    efeito: "The first time you lose HP on your turn, heal HP equal to the amount lost.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ruined-helmet--rare--ironclad",
    nome: "Ruined Helmet",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Rare",
    efeito: "The first time you gain ??? ??? each combat, double the amount gained.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "helical-dart--rare--silent",
    nome: "Helical Dart",
    categoria: "Silent",
    icone: "🎯",
    raridade: "Rare",
    efeito: "Whenever you play a Shiv, gain 1 🎯 🎯 this turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "paper-krane--rare--silent",
    nome: "Paper Krane",
    categoria: "Silent",
    icone: "🥱",
    raridade: "Rare",
    efeito: "Enemies with 🥱 🥱 deal 40% less damage to you rather than 25%.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "tough-bandages--rare--silent",
    nome: "Tough Bandages",
    categoria: "Silent",
    icone: "🛡️",
    raridade: "Rare",
    efeito: "Whenever you discard a card during your turn, gain 3 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lunar-pastry--rare--regent",
    nome: "Lunar Pastry",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Rare",
    efeito: "At the end of your turn, gain ⭐.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "mini-regent--rare--regent",
    nome: "Mini Regent",
    categoria: "Regent",
    icone: "⭐",
    raridade: "Rare",
    efeito: "The first time you spend ⭐ each turn, gain 1 ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "orange-dough--rare--regent",
    nome: "Orange Dough",
    categoria: "Regent",
    icone: "💎",
    raridade: "Rare",
    efeito: "At the start of each combat, add 2 random Colorless cards into your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "big-hat--rare--necrobinder",
    nome: "Big Hat",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Rare",
    efeito: "At the start of each combat, add 2 random Ethereal cards into your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bookmark--rare--necrobinder",
    nome: "Bookmark",
    categoria: "Necrobinder",
    icone: "💎",
    raridade: "Rare",
    efeito: "At the end of each turn, lower the cost of a random Retained card by 1 until played.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ivory-tile--rare--necrobinder",
    nome: "Ivory Tile",
    categoria: "Necrobinder",
    icone: "🌸",
    raridade: "Rare",
    efeito: "Whenever you play a card that costs 🌸 🌸 🌸 or more, gain 🌸.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "emotion-chip--rare--defect",
    nome: "Emotion Chip",
    categoria: "Defect",
    icone: "💎",
    raridade: "Rare",
    efeito: "If you lost HP during the previous turn, trigger the passive ability of all Orbs at the start of your turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "metronome--rare--defect",
    nome: "Metronome",
    categoria: "Defect",
    icone: "💎",
    raridade: "Rare",
    efeito: "The first time you Channel 7 Orbs each combat, deal 30 damage to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "power-cell--rare--defect",
    nome: "Power Cell",
    categoria: "Defect",
    icone: "💎",
    raridade: "Rare",
    efeito: "At the start of each combat, add 2 zero-cost cards from your Draw Pile into your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "arcane-scroll--ancient--neow",
    nome: "Arcane Scroll",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, obtain a random Rare Card to add to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "booming-conch--ancient--neow",
    nome: "Booming Conch",
    categoria: "Neow",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "At the start of Elite combats, draw 2 additional cards and gain 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "cursed-pearl--ancient--neow",
    nome: "Cursed Pearl",
    categoria: "Neow",
    icone: "🤑",
    raridade: "Ancient",
    efeito: "Upon pickup, receive CardCurse 🤑. Gain 333 🪙.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "rod--ancient--neow",
    nome: "Rod",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, add 1 CardQuest ?? to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "fishing-rod--ancient--neow",
    nome: "Fishing Rod",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Every 3 normal combats, Upgrade a random card in your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "golden-pearl--ancient--neow",
    nome: "Golden Pearl",
    categoria: "Neow",
    icone: "🪙",
    raridade: "Ancient",
    efeito: "Upon pickup, gain 150 🪙 🪙.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "hefty-tablet--ancient--neow",
    nome: "Hefty Tablet",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Choose 1 of 3 Rare cards to add to your Deck. Add 1 CardCurse ?? to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "kaleidoscope--ancient--neow",
    nome: "Kaleidoscope",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, obtain 2 card rewards from other characters.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "large-capsule--ancient--neow",
    nome: "Large Capsule",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, obtain 2 random Relics. Add an additional Strike and Defend to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lava-rock--ancient--neow",
    nome: "Lava Rock",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "The Act 1 Boss drops 2 Relics.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lead-paperweight--ancient--neow",
    nome: "Lead Paperweight",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, choose 1 of 2 Colorless cards to add to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "leafy-poultice--ancient--neow",
    nome: "Leafy Poultice",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Transform 1 of your Strikes and 1 of your Defends and lose 12 Max.",
    descricao: ""
  },
  {
    id: "lost-coffer--ancient--neow",
    nome: "Lost Coffer",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, gain 1 card reward and procure 1 random Potion.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "massive-scroll--ancient--neow",
    nome: "Massive Scroll",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, choose 1 of 3 Multiplayer Cards to add to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "neow-s-bones--ancient--neow",
    nome: "Neow's Bones",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, gain 2 random Neow Relics. Add 1 random Curse to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "neow-s-sacrifice--ancient--neow",
    nome: "Neow's Sacrifice",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, procure 1 Ambergris Ambergris and 1 CardCurse Guilty to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "neow-s-talisman--ancient--neow",
    nome: "Neow's Talisman",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Upgrade 1 of your Strikes and 1 of your Defends.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "neow-s-torment--ancient--neow",
    nome: "Neow's Torment",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, add 1 CardColorless Attack Ancient Neow's Fury to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "new-leaf--ancient--neow",
    nome: "New Leaf",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Transform 1 card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "nutritious-oyster--ancient--neow",
    nome: "Nutritious Oyster",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, raise your Max HP by 11.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "phial-holster--ancient--neow",
    nome: "Phial Holster",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, gain 1 potion slot and procure 2 random Potion.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pomander--ancient--neow",
    nome: "Pomander",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Upgrade a card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "precarious-shears--ancient--neow",
    nome: "Precarious Shears",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, remove 2 cards from your Deck and take 16 damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "precise-scissors--ancient--neow",
    nome: "Precise Scissors",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, remove 1 card from your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "scroll-boxes--ancient--neow",
    nome: "Scroll Boxes",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Choose 1 of 2 packs of cards to add to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "silken-tress--ancient--neow",
    nome: "Silken Tress",
    categoria: "Neow",
    icone: "🪙",
    raridade: "Ancient",
    efeito: "Upon pickup, lose all 🪙. Enchant all cards in your first card reward with Enchant Glam Glam.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "silver-crucible--ancient--neow",
    nome: "Silver Crucible",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "The first 3 card rewards you see are Upgraded. The first Treasure Chest you open is empty.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "small-capsule--ancient--neow",
    nome: "Small Capsule",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, obtain a random Relic.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "stone-humidifier--ancient--neow",
    nome: "Stone Humidifier",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Whenever you Rest at a Rest Site, raise your Max HP by 5.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "winged-boots--ancient--neow",
    nome: "Winged Boots",
    categoria: "Neow",
    icone: "💎",
    raridade: "Ancient",
    efeito: "You may ignore paths when choosing the next rooms to travel to 3 times.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "alchemical-coffer--ancient--orobas",
    nome: "Alchemical Coffer",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, gain 4 Potion slots filled with random Potion.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "archaic-tooth--ancient--orobas",
    nome: "Archaic Tooth",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Transform a starter card into an ancient version.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "driftwood--ancient--orobas",
    nome: "Driftwood",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "You may reroll each card reward once.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "electric-shrymp--ancient--orobas",
    nome: "Electric Shrymp",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Enchant a Skill with Enchant Imbued Imbued.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "glass-eye--ancient--orobas",
    nome: "Glass Eye",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, obtain 2 Common cards, 2 Uncommon cards, and 1 Rare card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "prismatic-gem--ancient--orobas",
    nome: "Prismatic Gem",
    categoria: "Orobas",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain 🔮 at the start of each turn. Card rewards now contain cards from other colors.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "radiant-pearl--ancient--orobas",
    nome: "Radiant Pearl",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of each combat, add 1 CardColorless Skill Token Luminesce into your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sand-castle--ancient--orobas",
    nome: "Sand Castle",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Upgrade 6 random cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sea-glass--ancient--orobas",
    nome: "Sea Glass",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "See 15 cards from another character. Choose any number of them to add to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "touch-of-orobas--ancient--orobas",
    nome: "Touch of Orobas",
    categoria: "Orobas",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, replace your starter Relic with an Ancient version.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-blood--ancient--pael",
    nome: "Pael's Blood",
    categoria: "Pael",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of your turn, draw 1 additional card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-claw--ancient--pael",
    nome: "Pael's Claw",
    categoria: "Pael",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Enchant all Defends with Enchant Goopy Goopy.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-eye--ancient--pael",
    nome: "Pael's Eye",
    categoria: "Pael",
    icone: "💎",
    raridade: "Ancient",
    efeito: "The first time each combat you end your turn without playing cards, Exhaust your Hand, and take an extra turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-flesh--ancient--pael",
    nome: "Pael's Flesh",
    categoria: "Pael",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain an additional 🔮 at the start of your 3rd turn, and every turn after that.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-growth--ancient--pael",
    nome: "Pael's Growth",
    categoria: "Pael",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Enchant a card with Enchant Clone Clone.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-horn--ancient--pael",
    nome: "Pael's Horn",
    categoria: "Pael",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, add 2 CardColorless Skill Ancient Relax to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-legion--ancient--pael",
    nome: "Pael's Legion",
    categoria: "Pael",
    icone: "🛡️",
    raridade: "Ancient",
    efeito: "Doubles 🛡️ Block gained from a card, then goes to sleep for 2 turns.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-tears--ancient--pael",
    nome: "Pael's Tears",
    categoria: "Pael",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "If you end your turn with unspent 🔮, gain an additional 🔮 🔮 next turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-tooth--ancient--pael",
    nome: "Pael's Tooth",
    categoria: "Pael",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, remove 5 cards from your Deck. After each combat, randomly add 1 back Upgraded.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pael-s-wing--ancient--pael",
    nome: "Pael's Wing",
    categoria: "Pael",
    icone: "💎",
    raridade: "Ancient",
    efeito: "You may sacrifice card rewards to Pael. Every 2 sacrifices, obtain a Relic.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "biiig-hug--ancient--tezcatara",
    nome: "Biiig Hug",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, remove 4 cards from your Deck. Whenever you shuffle your Draw Pile, add a CardStatus Soot into your Draw Pile.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "golden-compass--ancient--tezcatara",
    nome: "Golden Compass",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, replace the Act 2 Map with a single special path.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "nutritious-soup--ancient--tezcatara",
    nome: "Nutritious Soup",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Enchant all Strikes in your Deck with Enchant TezcatarasEmber Tezcatara's Ember.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pumpkin-candle--ancient--tezcatara",
    nome: "Pumpkin Candle",
    categoria: "Tezcatara",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain 🔮 at the start of each turn. Extinguishes after 5 combats. Can be Kindled at Rest Sites.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "seal-of--ancient--tezcatara",
    nome: "Seal of 🪙",
    categoria: "Tezcatara",
    icone: "🪙",
    raridade: "Ancient",
    efeito: "At the start of your turn, spend 3 🪙 🪙 to gain 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "storybook--ancient--tezcatara",
    nome: "Storybook",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, add 1 CardColorless Skill Ancient Brightest Flame to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "toasty-mittens--ancient--tezcatara",
    nome: "Toasty Mittens",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of your turn, Exhaust 1 card from your Hand and gain 1 ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "toy-box--ancient--tezcatara",
    nome: "Toy Box",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, obtain 5 Wax Relics. Every 3 combats, your left-most Wax Relic will melt away.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "very-hot-cocoa--ancient--tezcatara",
    nome: "Very Hot Cocoa",
    categoria: "Tezcatara",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Start each combat with an additional 4 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "yummy-cookie--ancient--tezcatara",
    nome: "Yummy Cookie",
    categoria: "Tezcatara",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Upgrade 4 cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "beautiful-bracelet--ancient--nonupeipe",
    nome: "Beautiful Bracelet",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Enchant 4 random cards in your Deck with Enchant Swift Swift 2.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "blessed-antler--ancient--nonupeipe",
    nome: "Blessed Antler",
    categoria: "Nonupeipe",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain 🔮 at the start of each turn. At the start of each combat, shuffle 3 CardStatus Dazed into your Draw Pile.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "brilliant-scarf--ancient--nonupeipe",
    nome: "Brilliant Scarf",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Ancient",
    efeito: "The 5th card you play from your hand each turn is free.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "delicate-frond--ancient--nonupeipe",
    nome: "Delicate Frond",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of each combat, fill all empty Potion slots with random Potions.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "diamond-diadem--ancient--nonupeipe",
    nome: "Diamond Diadem",
    categoria: "Nonupeipe",
    icone: "🛡️",
    raridade: "Ancient",
    efeito: "Start combat with 20 🛡️ Block. Your 🛡️ Block is not removed at the start of your 2nd turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "fur-coat--ancient--nonupeipe",
    nome: "Fur Coat",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, mark 8 random combats. Enemies in those rooms have 1.",
    descricao: ""
  },
  {
    id: "glitter--ancient--nonupeipe",
    nome: "Glitter",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Enchant all card rewards with Enchant Glam Glam.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "jewelry-box--ancient--nonupeipe",
    nome: "Jewelry Box",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, add 1 CardColorless Skill Ancient Apotheosis to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "looming-fruit--ancient--nonupeipe",
    nome: "Looming Fruit",
    categoria: "Nonupeipe",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, raise your Max HP by 31.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "signet-ring--ancient--nonupeipe",
    nome: "Signet Ring",
    categoria: "Nonupeipe",
    icone: "🪙",
    raridade: "Ancient",
    efeito: "Upon pickup, gain 888 🪙 🪙.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "claws--ancient--tanx",
    nome: "Claws",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Transform up to 6 cards into CardColorless Attack Ancient Maul.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "crossbow--ancient--tanx",
    nome: "Crossbow",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of your turn, add a random Attack into your Hand. It's free to play this turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "iron-club--ancient--tanx",
    nome: "Iron Club",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Every 4 cards you play, draw 1 card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "meat-cleaver--ancient--tanx",
    nome: "Meat Cleaver",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Ancient",
    efeito: "You may Cook at Rest Sites.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sai--ancient--tanx",
    nome: "Sai",
    categoria: "Tanx",
    icone: "🛡️",
    raridade: "Ancient",
    efeito: "At the start of your turn, gain 7 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "spiked-gauntlets--ancient--tanx",
    nome: "Spiked Gauntlets",
    categoria: "Tanx",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain 🔮 at the start of each turn. Powers cost 1 more 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "tanx-s-whistle--ancient--tanx",
    nome: "Tanx's Whistle",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, add 1 CardColorless Attack Ancient Whistle to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "throwing-axe--ancient--tanx",
    nome: "Throwing Axe",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Ancient",
    efeito: "The first card you play each combat is played an extra time.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "tri-boomerang--ancient--tanx",
    nome: "Tri-Boomerang",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Choose 3 Attacks in your Deck. Enchant them with Enchant Instinct Instinct.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "war-hammer--ancient--tanx",
    nome: "War Hammer",
    categoria: "Tanx",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Whenever you kill an Elite, Upgrade 4 random cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "blood-soaked-rose--ancient--vakuu",
    nome: "Blood-Soaked Rose",
    categoria: "Vakuu",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Upon pickup, add 1 CardCurse Enthralled to your Deck. Gain 🔮 at the start of each turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "choices-paradox--ancient--vakuu",
    nome: "Choices Paradox",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of each combat, add 1 of 5 random cards into your Hand. Add Retain to the chosen card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "distinguished-cape--ancient--vakuu",
    nome: "Distinguished Cape",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, add 2 random Curses and 3 CardColorless Skill Ancient Apparitions to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "fiddle--ancient--vakuu",
    nome: "Fiddle",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of each turn, draw 2 additional cards. You may not draw cards during your turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "jeweled-mask--ancient--vakuu",
    nome: "Jeweled Mask",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of each combat put a random Power from your Draw Pile into your Hand. It's free to play this combat.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lord-s-parasol--ancient--vakuu",
    nome: "Lord's Parasol",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Ancient",
    efeito: "When you encounter the Merchant, immediately obtain EVERYTHING he sells.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "music-box--ancient--vakuu",
    nome: "Music Box",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Create an Ethereal copy of the first Attack you play each turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "preserved-fog--ancient--vakuu",
    nome: "Preserved Fog",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, remove 3 cards from your Deck. Add CardCurse Folly to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sere-talon--ancient--vakuu",
    nome: "Sere Talon",
    categoria: "Vakuu",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, lose 9 Max HP. Add 3 CardColorless Skill Ancient Wishes to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "whispering-earring--ancient--vakuu",
    nome: "Whispering Earring",
    categoria: "Vakuu",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain 🔮 at the start of each turn. Vakuu plays your first turn for you.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "astrolabe--ancient--darv",
    nome: "Astrolabe",
    categoria: "Darv",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, Transform 3 cards, then Upgrade them.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "black-star--ancient--darv",
    nome: "Black Star",
    categoria: "Darv",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Elites drop an additional Relic when defeated.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "calling-bell--ancient--darv",
    nome: "Calling Bell",
    categoria: "Darv",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, obtain a unique CardCurse Curse and 3 Relics.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "dusty-tome--ancient--darv",
    nome: "Dusty Tome",
    categoria: "Darv",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, obtain an Ancient Card.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ectoplasm--ancient--darv",
    nome: "Ectoplasm",
    categoria: "Darv",
    icone: "🪙",
    raridade: "Ancient",
    efeito: "You can no longer gain 🪙 🪙. Gain 🔮 at the start of each turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "empty-cage--ancient--darv",
    nome: "Empty Cage",
    categoria: "Darv",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Upon pickup, remove 2 cards from your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pandora-s-box--ancient--darv",
    nome: "Pandora's Box",
    categoria: "Darv",
    icone: "💎",
    raridade: "Ancient",
    efeito: "Transform ALL Strikes and Defends.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "philosopher-s-stone--ancient--darv",
    nome: "Philosopher's Stone",
    categoria: "Darv",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain 🔮 at the start of each turn. ALL enemies start combat with 1 ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "runic-pyramid--ancient--darv",
    nome: "Runic Pyramid",
    categoria: "Darv",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the end of your turn, you no longer discard your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "snecko-eye--ancient--darv",
    nome: "Snecko Eye",
    categoria: "Darv",
    icone: "💎",
    raridade: "Ancient",
    efeito: "At the start of your turn, draw 2 additional cards. Start each combat ?? ??",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sozu--ancient--darv",
    nome: "Sozu",
    categoria: "Darv",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain 🔮 at the start of each turn. You can no longer obtain Potions.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "velvet-choker--ancient--darv",
    nome: "Velvet Choker",
    categoria: "Darv",
    icone: "🔮",
    raridade: "Ancient",
    efeito: "Gain 🔮 at the start of each turn. You cannot play more than 6 cards per turn.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "belt-buckle--shop--any",
    nome: "Belt Buckle",
    categoria: "Qualquer",
    icone: "🎯",
    raridade: "Shop",
    efeito: "While you have no Potions, you have 2 additional 🎯 🎯.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bread--shop--any",
    nome: "Bread",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Shop",
    efeito: "At the start of your first turn, lose 🔮 🔮. At the start of all other turns, gain 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "burning-sticks--shop--any",
    nome: "Burning Sticks",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "The first time each combat you Exhaust a Skill, add a copy of it into your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "cauldron--shop--any",
    nome: "Cauldron",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Upon pickup, brews 5 random Potion.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "chemical-x--shop--any",
    nome: "Chemical X",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "The effects of your cost X cards are increased by 2. WARNING: Do not combine with sugar, spice, and everything nice.",
    descricao: ""
  },
  {
    id: "dingy-rug--shop--any",
    nome: "Dingy Rug",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Card rewards can now contain Colorless cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "dolly-s-mirror--shop--any",
    nome: "Dolly's Mirror",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Upon pickup, obtain an additional copy of a card in your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "dragon-fruit--shop--any",
    nome: "Dragon Fruit",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Shop",
    efeito: "Whenever you gain 🪙 🪙, raise your Max HP by 1.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ghost-seed--shop--any",
    nome: "Ghost Seed",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Strikes and Defends gain Ethereal.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "gnarled-hammer--shop--any",
    nome: "Gnarled Hammer",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Upon pickup, Enchant up to 3 Attacks with Enchant Sharp Sharp 3.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "kifuda--shop--any",
    nome: "Kifuda",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Upon pickup, Enchant up to 3 cards with Enchant Adroit Adroit.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lava-lamp--shop--any",
    nome: "Lava Lamp",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "At the end of combat, Upgrade all card rewards if you took no damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lee-s-waffle--shop--any",
    nome: "Lee's Waffle",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Upon pickup, raise your Max HP by 7 and heal all of your.",
    descricao: ""
  },
  {
    id: "membership-card--shop--any",
    nome: "Membership Card",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "50% discount on all products!",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "miniature-tent--shop--any",
    nome: "Miniature Tent",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "You may choose any number of options at Rest Sites.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "mystic-lighter--shop--any",
    nome: "Mystic Lighter",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Enchanted Attacks deal 9 additional damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "orrery--shop--any",
    nome: "Orrery",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Upon pickup, gain 5 card rewards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "punch-dagger--shop--any",
    nome: "Punch Dagger",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Upon pickup, Enchant an Attack with Enchant Momentum Momentum 5.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ringing-triangle--shop--any",
    nome: "Ringing Triangle",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Retain your Hand on the first turn of combat.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "royal-stamp--shop--any",
    nome: "Royal Stamp",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Upon pickup, choose an Attack or Skill in your Deck to Enchant with Enchant RoyallyApproved Royally Approved.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "screaming-flagon--shop--any",
    nome: "Screaming Flagon",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "If you end your turn with no cards in your Hand, deal 20 damage to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sling-of-courage--shop--any",
    nome: "Sling of Courage",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "Start each Elite combat with 2 ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "the-abacus--shop--any",
    nome: "The Abacus",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Shop",
    efeito: "Whenever you shuffle your Draw Pile, gain 6 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "toolbox--shop--any",
    nome: "Toolbox",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "At the start of each combat, choose 1 of 3 random Colorless cards and add the chosen card into your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "wing-charm--shop--any",
    nome: "Wing Charm",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Shop",
    efeito: "A random card in each card reward is Enchanted with Enchant Swift Swift 1.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "brimstone--shop--ironclad",
    nome: "Brimstone",
    categoria: "Ironclad",
    icone: "💎",
    raridade: "Shop",
    efeito: "At the start of your turn, gain 2 ??? ??? and ALL enemies gain 1 ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ninja-scroll--shop--silent",
    nome: "Ninja Scroll",
    categoria: "Silent",
    icone: "💎",
    raridade: "Shop",
    efeito: "At the start of each combat, add 3 CardColorless Attack Token Shivs into your Hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "vitruvian-minion--shop--regent",
    nome: "Vitruvian Minion",
    categoria: "Regent",
    icone: "🛡️",
    raridade: "Shop",
    efeito: "Cards containing \"Minion\" deal double damage and gain double 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "undying-sigil--shop--necrobinder",
    nome: "Undying Sigil",
    categoria: "Necrobinder",
    icone: "🪦",
    raridade: "Shop",
    efeito: "Enemies with at least as much 🪦 🪦 as HP deal 50% less damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "runic-capacitor--shop--defect",
    nome: "Runic Capacitor",
    categoria: "Defect",
    icone: "💎",
    raridade: "Shop",
    efeito: "Start each combat with 3 additional Orb Slots.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "anchor--event--any",
    nome: "Anchor",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Event",
    efeito: "Start each combat with 4 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "big-mushroom--event--any",
    nome: "Big Mushroom",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Upon pickup, raise your Max HP by 20. At the start of each combat, draw 2 fewer cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "bing-bong--event--any",
    nome: "Bing Bong",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Whenever you add a card to your Deck, add one additional copy.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "blood-vial--event--any",
    nome: "Blood Vial",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "At the start of each combat, heal 1.",
    descricao: ""
  },
  {
    id: "bone-tea--event--any",
    nome: "Bone Tea",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "At the start of the next combat, Upgrade your starting hand.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "byrdpip--event--any",
    nome: "Byrdpip",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Upon pickup, gain the card CardColorless Attack Event Byrd Swoop. A Byrdpip will accompany you in battles.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "darkstone-periapt--event--any",
    nome: "Darkstone Periapt",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Whenever you obtain a Curse, raise your Max HP by 6.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "daughter-of-the-wind--event--any",
    nome: "Daughter of the Wind",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Event",
    efeito: "Whenever you play an Attack, gain 1 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "dream-catcher--event--any",
    nome: "Dream Catcher",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Whenever you Rest, you may add a card to your Deck.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "ember-tea--event--any",
    nome: "Ember Tea",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "At the start of the next 5 combats, gain 2 ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "forgotten--event--any",
    nome: "Forgotten 👻",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Whenever you Exhaust a card, deal 1 damage to a random enemy.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "fragrant-mushroom--event--any",
    nome: "Fragrant Mushroom",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Upon pickup, lose 15 HP and Upgrade 2 random cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "fresnel-lens--event--any",
    nome: "Fresnel Lens",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Event",
    efeito: "Whenever you add a card that gains 🛡️ Block to your Deck, Enchant it with Enchant Nimble Nimble 2.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "hand-drill--event--any",
    nome: "Hand Drill",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Event",
    efeito: "Whenever you break an enemy's 🛡️ Block, apply 2 💔 💔.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "happy-flower--event--any",
    nome: "Happy Flower",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Event",
    efeito: "Every 5 turns, gain 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "history-course--event--any",
    nome: "History Course",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "At the start of your turn, play a copy of your last played Attack.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "lee-s-waffle--event--any",
    nome: "Lee's Waffle",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Upon pickup, heal 10% of your.",
    descricao: ""
  },
  {
    id: "lost-wisp--event--any",
    nome: "Lost Wisp",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Whenever you play a Power, deal 8 damage to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "mango--event--any",
    nome: "Mango",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Upon pickup, raise your Max HP by 3.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "maw-bank--event--any",
    nome: "Maw Bank",
    categoria: "Qualquer",
    icone: "🪙",
    raridade: "Event",
    efeito: "Whenever you climb a floor, gain 12 🪙 🪙. No longer works when you spend any 🪙 🪙 at the shop.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "mr-struggles--event--any",
    nome: "Mr. Struggles",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "At the start of your turn, deal damage equal to the turn number to ALL enemies.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "orichalcum--event--any",
    nome: "Orichalcum",
    categoria: "Qualquer",
    icone: "🛡️",
    raridade: "Event",
    efeito: "If you end your turn without 🛡️ Block, gain 3 🛡️ Block.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "pollinous-core--event--any",
    nome: "Pollinous Core",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Every 4 turns, draw 2 additional cards.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "royal--event--any",
    nome: "Royal 🧪",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "At the start of each combat, lose 4.",
    descricao: ""
  },
  {
    id: "snecko-eye--event--any",
    nome: "Snecko Eye",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Start each combat ?? ??",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "strike-dummy--event--any",
    nome: "Strike Dummy",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Cards containing “Strike” deal 1 additional damage.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sword-of-jade--event--any",
    nome: "Sword of Jade",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Start each combat with 3 ??? ???",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "sword-of-stone--event--any",
    nome: "Sword of Stone",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Transforms into a powerful Relic after defeating 5 Elites.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "tea-of-discourtesy--event--any",
    nome: "Tea of Discourtesy",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "At the start of the next combat, shuffle 2 CardStatus Dazed into your Draw Pile.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "the-boot--event--any",
    nome: "The Boot",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Whenever you would deal 4 or less unblocked attack damage, increase it to 5.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "the-chosen-cheese--event--any",
    nome: "The Chosen Cheese",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "At the end of combat, gain 1 Max.",
    descricao: ""
  },
  {
    id: "the-merchant-s-rug--event--any",
    nome: "The Merchant's Rug",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Poor imitation. Does nothing.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "venerable-tea-set--event--any",
    nome: "Venerable Tea Set",
    categoria: "Qualquer",
    icone: "🔮",
    raridade: "Event",
    efeito: "Whenever you enter a Rest Site, start the next combat with an additional 🔮.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "wongo-customer-appreciation-badge--event--any",
    nome: "Wongo Customer Appreciation Badge",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Does nothing.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "wongo-s-mystery-ticket--event--any",
    nome: "Wongo's Mystery Ticket",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Event",
    efeito: "Receive 3 random Relics after 5 combats.",
    descricao: "Details for this relic will be revealed in the future..."
  },
  {
    id: "circlet--special--any",
    nome: "Circlet",
    categoria: "Qualquer",
    icone: "💎",
    raridade: "Special",
    efeito: "It's a circlet. A curious relic which appears when there's a problem within the Spire or there are no more relics to discover.",
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

/* Exposição global para o app.js */
window.COMPENDIO = { MONSTROS, RELIQUIAS, LEGENDA };
