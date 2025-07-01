const params = new URLSearchParams(window.location.search);
const froghName = params.get("frogh");

const _img = document.getElementById("img");
const _name = document.getElementById("name");
const _rarity = document.getElementById("rarity");
const _ability = document.getElementById("ability");
const _habitat = document.getElementById("habitat");
const _description = document.getElementById("description");
const _moreinfo = document.getElementById("moreinfo");

const froghData = {
  greeny: {
    name: "Greeny",
    rarity: "Common",
    habitat: "Meadow ponds",
    ability: "Can blend in with grass to avoid predators",
    description: "A cheerful little frogh with mossy skin and sleepy eyes. Loves to sunbathe.",
    lore: "In the heart of sun-drenched meadows where clover grows thick and bees hum lazily, lives Greeny — the oldest frogh in his patch, or so the flowers claim. His skin bears the exact shade of fresh moss, making him nearly invisible to untrained eyes. Travelers say if you nap near his pond, your dreams will be warm, slow, and filled with dancing grass. Greeny is more than just camouflaged — he’s deeply rooted in the land, as if he was never born, but grown. Some say he was the first frogh to ever hop, and that the shape of his footprints still lies beneath the soil."
  },
  ory: {
    name: "Ory",
    rarity: "Common",
    habitat: "Shallow streams",
    ability: "Hops extra far when startled",
    description: "Curious and clumsy, Ory often falls in and out of trouble — but always lands on their feet.",
    lore: "Ory hatched on the first morning of spring, when the frost had just retreated and the river mist smelled of new beginnings. With an almost reckless curiosity, he dives headfirst into streams, logs, and mysteries. His webbed toes are always damp, his belly always muddy, and his smile always tilted with wonder. Locals believe Ory has a map of the entire forest in his head — not because he memorized it, but because he’s fallen into every corner of it. If you’re ever stuck in a thicket or lost among reeds, just wait. Sooner or later, Ory will come tumbling through, humming a tune you don’t recognize but somehow remember."
  },
  pinky: {
    name: "Pinky",
    rarity: "Common",
    habitat: "Flower-filled wetlands",
    ability: "Emits a calming scent that soothes nearby creatures",
    description: "A gentle pink frogh that enjoys napping under petals and watching the clouds drift.",
    lore: "Soft as a petal and quiet as a sigh, Pinky is more aura than animal. Her skin glows faintly in twilight, tinted the same hue as cherry blossoms caught in the evening sun. Wherever she hops, flowers seem to bloom out of season, and sleepy animals grow even sleepier. Some villagers believe Pinky is the spirit of a garden that once flourished a thousand years ago. She doesn’t speak — she soothes. Froghlings often find her curled up in flowerbeds, snoring like a kettle. It’s said that if you follow the trail of perfumed air and drowsy bees, you might catch a glimpse of her, just before you fall asleep too."
  },
  bubblit: {
    name: "Bubblit",
    rarity: "Uncommon",
    habitat: "Muddy springs",
    ability: "Can spit bubble shields when scared",
    description: "A small, jittery frogh with round cheeks and a love for splashing in puddles.",
    lore: "No one quite knows where Bubblit came from — only that the puddles got bouncier after he arrived. He’s plump, twitchy, and full of nervous energy, often surprising himself with the bubbles that burst from his cheeks when startled. These aren’t ordinary bubbles; they shimmer with swirling colors and echo faint giggles when they pop. Kids chase them through the marshes, convinced they grant luck if caught. Some claim Bubblit once sealed an angry wasp inside one of his bubbles, and it’s still floating to this day, drifting over distant fields. He doesn't say much, but his laughter — squeaky and uncertain — is known across many rain-soaked lands."
  },
  fernwick: {
    name: "Fernwick",
    rarity: "Uncommon",
    habitat: "Shady forest floors",
    ability: "Can control the growth of tiny plants",
    description: "A moss-covered frogh who hums softly and leaves trails of sprouting clovers.",
    lore: "Deep beneath the emerald canopy, Fernwick moves with mossy purpose. His back is dotted with tiny sprouts and curled ferns that sway even when there’s no wind. Rumor has it he grew from a patch of enchanted ground, nourished by old songs and fallen leaves. Fernwick can sit still for hours, even days, causing mushrooms to root around him and ivy to curl over his limbs. Those attuned to forest spirits claim he hums in harmony with ancient trees, and that his mere presence makes plants bloom faster. He doesn’t speak in words, but rather rustles, creaks, and green, growing silences."
  },
  zint: {
    name: "Zint",
    rarity: "Uncommon",
    habitat: "Foggy riverbanks",
    ability: "Can briefly vanish in mist",
    description: "Shy and twitchy, Zint is hard to spot — but even harder to catch.",
    lore: "On foggy mornings when the world feels half-awake, Zint appears — or doesn’t. He’s more shadow than shape, more presence than figure. Born in the misty hollows near whispering rivers, Zint moves like a thought: fleeting, soft, half-remembered. Children playing near the banks tell tales of a frogh that vanishes when looked at too long, but leaves behind footprints made of dew. He’s skittish, yes, but not shy. Zint is the guardian of in-between places — doorways of fog, pauses in conversation, the silence before a raindrop falls. To meet him is to briefly glimpse the world beneath the world."
  },
  thornid: {
    name: "Thornid",
    rarity: "Rare",
    habitat: "Bramble dens",
    ability: "Summons thorny vines to protect itself",
    description: "Spiny and stern, Thornid rarely hops — it prefers to stand guard like a tiny knight.",
    lore: "A sentinel of bramble thickets and overgrown ruins, Thornid wears his name like armor. His body is laced with fine, natural spines that click together when he hops, making a sound like ticking thorns. His gaze is unwavering, and his croak — deep, resonant — is said to frighten even the boldest weasels. Some say Thornid once protected a hidden glade for over a century, unmoving, unwavering. He emerges only when danger rises, and when he does, roots obey him. No frogh is as still or as strong. He is not aggressive — only loyal. And once you’ve earned his respect, he will watch your back forever."
  },
  lumiboo: {
    name: "Lumiboo",
    rarity: "Rare",
    habitat: "Bioluminescent caves",
    ability: "Glows softly to guide lost creatures",
    description: "Bright and friendly, Lumiboo sings echoey tunes to light up the dark.",
    lore: "When the sun goes down and the forest glows from within, that’s when Lumiboo sings. With skin like glowing moon jelly and eyes like bioluminescent pearls, she glides through underground pools, lighting the way for lost critters and curious explorers. Some say she was born from a droplet of starlight that fell into the earth. Her voice is like water rippling across crystal — soft, echoing, haunting. Miners once followed her glow to safety during a cave collapse, and to this day they leave carved frogs near tunnel entrances in thanks. She is the light that never blinds, the voice that always guides."
  },
  shrooma: {
    name: "Shrooma",
    rarity: "Rare",
    habitat: "Rotting logs in deep forests",
    ability: "Releases spore clouds that confuse predators",
    description: "A mysterious frogh with mushroom spots and sleepy energy.",
    lore: "Shrooma doesn’t hop — she drifts, like spores in autumn air. Her back is covered in tiny fungi that bloom and wither depending on her mood. The forest floor welcomes her like kin, and animals make way without fear. She smells of old earth and damp wood, and some say she can hear the memories stored in tree rings. Shrooma’s spore clouds don’t harm — they confuse, entangle, disorient. Thieves lost in the woods often report “hallucinating a sleepy frog with mushrooms for a hat.” Whether that’s a warning or a blessing is unclear. Either way, Shrooma doesn’t mind. She just wants her forest to be left alone."
  },
  vellune: {
    name: "Vellune",
    rarity: "Unique",
    habitat: "Quiet moonlit lakes",
    ability: "Can cause gentle rainfall with its song",
    description: "Silvery-blue with starlight eyes, Vellune hums only during full moons.",
    lore: "Only on the stillest nights — when the lake reflects the moon perfectly — can Vellune be seen. Her skin glistens like glass under starlight, and her song draws gentle clouds that spill soft rain. The elders claim she sings in a language no one speaks anymore — perhaps the tongue of clouds, or dreams. She appears in stories passed from grandparent to grandchild, always beside water, always just out of reach. If you cry near a moonlit pond, Vellune may appear to sit quietly beside you, humming comfort into the night. She is grief, wonder, and healing — all bound into one luminous frogh."
  },
  gribblet: {
    name: "Gribblet",
    rarity: "Unique",
    habitat: "Forgotten swamp shrines",
    ability: "Detects ancient magic buried in soil",
    description: "Tiny but wise, Gribblet’s tongue always points north toward secrets.",
    lore: "Tiny, gnarled, and wiser than anything his size should be, Gribblet guards the shrines forgotten by time. His tongue flicks toward ruins buried beneath roots, sensing energy left behind by prayers long faded. He wears moss like a crown, and speaks in croaks that echo like stone drums. It’s said that when Gribblet appears, it means a secret is ready to be found — if you’re worthy. He once helped a child find a lost artifact by simply hopping three times in the right direction. Some call him the “Key-Frogh,” others a myth. But every shrine worth its salt has a carving of him hidden in its design."
  },
  cloktok: {
    name: "Cloktok",
    rarity: "Unique",
    habitat: "Ruins where time stands still",
    ability: "Can slow time briefly when it blinks",
    description: "Covered in gears and moss, this mechanical frogh croaks once per hour, exactly.",
    lore: "Some froghs leap, some swim — Cloktok ticks. His body is etched with golden lines like the inner workings of a timepiece, and his every movement is precise, mechanical. He was discovered in the ruins of an ancient sundial, blinking once every hour, on the hour. Cloktok doesn’t speak, but if you sit with him long enough, strange things begin to happen: a falling leaf pauses midair, a shadow moves in reverse. He can slow time, though no one knows why or how. Some say he was made, not born — a gift left by the builders of time. But he’ll never tell. He just ticks on."
  },
  myrrmog: {
    name: "Myrrmog",
    rarity: "Legendary",
    habitat: "The Frogh Star above the clouds",
    ability: "Can whisper dreams into sleeping minds",
    description: "Shimmering and silent, Myrrmog only appears to those who have seen the sky’s edge.",
    lore: "Perched on the highest cloud, just beneath the stars, Myrrmog slumbers. He glows faintly with the hue of forgotten lullabies, and his eyes, when open, reflect constellations that don’t exist anymore. Rarely seen, never heard, Myrrmog doesn’t croak — he dreams. And those dreams drift downward like fog, slipping into the minds of sleeping children, lonely wanderers, and poets. It’s said if you look up at just the right moment, you might see him stir — and when he does, the sky flickers with impossible colors. Myrrmog is not a guardian or a guide. He simply is, and that is enough."
  },
  embergulp: {
    name: "Embergulp",
    rarity: "Legendary",
    habitat: "Volcano mouths",
    ability: "Breathes embers that form protective sigils",
    description: "A lava-dwelling frogh with golden horns and fire-red skin — feared, respected, adored.",
    lore: "Born from the molten heart of a sleeping volcano, Embergulp is a force of smoldering grace. His breath glows like coal, and the sigils he paints in the air keep the mountain quiet — for now. He doesn’t hop; he stomps, leaving trails of warm stone in his wake. Stories say that Embergulp once swallowed a forest fire to protect a village, and now his belly holds eternal flame. He is feared by many, but he burns only to protect. In his presence, you feel the heat of truth, the power of purpose, and the gentle rumble of something ancient watching over you."
  },
  nillith: {
    name: "Nillith",
    rarity: "Legendary",
    habitat: "The Still Marsh of Forgotten Names",
    ability: "Can erase memories with a stare",
    description: "Pale and elegant, Nillith floats silently across the water. Stories say it remembers the world before froghs.",
    lore: "Pale, elegant, and impossibly quiet, Nillith moves like a ripple across water. She remembers things no one else does — names, cities, even colors that history lost. Her eyes glint with forgotten dreams, and a single stare can unspool memories from your mind like thread from a spool. Nillith isn’t cruel; she simply carries the burden of knowing too much. Marshfolk speak her name in reverence and fear, placing offerings of reeds and ink at the water’s edge. On moonless nights, when the world forgets itself, Nillith remembers it all — and we are grateful she does."
  }
};


if (froghName in froghData) {
  _img.src = "res/img/" + froghData[froghName].rarity.toLowerCase() + "/" + froghName + "/front.png";
  _img.addEventListener('mouseenter', () => {
    _img.src = "res/img/" + froghData[froghName].rarity.toLowerCase() + "/" + froghName + "/side.png";
  });

  _img.addEventListener('mouseleave', () => {
    _img.src = "res/img/" + froghData[froghName].rarity.toLowerCase() + "/" + froghName + "/front.png";
  });
  
  _name.innerHTML = froghData[froghName].name;
  _rarity.innerHTML = froghData[froghName].rarity;
  _habitat.innerHTML = froghData[froghName].habitat;
  _ability.innerHTML = froghData[froghName].ability;
  _description.innerHTML = froghData[froghName].description;
  _moreinfo.innerHTML = froghData[froghName].lore;
}
else {
  _img.src = "res/img/secret-front.png";
  _img.addEventListener('mouseenter', () => {
    _img.src = "res/img/secret-side.png";
  });

  _img.addEventListener('mouseleave', () => {
    _img.src = "res/img/secret-front.png";
  });
  
  document.body.classList.add("secret");
  _name.innerHTML = "???";
  _rarity.innerHTML = "Secret";
  _habitat.innerHTML = "???";
  _ability.innerHTML = "???";
  _description.innerHTML = "???";
  _moreinfo.innerHTML = "01010100 01101000 01100101 00100000 01100110 01110010 01101111 01100111 01101000 00100000 01111001 01101111 01110101 00100000 01110011 01100101 01100101 01101011 00100000 01101001 01110011 00100000 01110011 01110100 01100001 01110010 01101001 01101110 01100111 00101110";
}