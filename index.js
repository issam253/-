const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const texts = [
  "كتبوا عن الحب وعن الوفاء كثيرا ...ولم نجد في واقعهم إلا الخذلان🥀🥀💔",
  "❤️ عيونـــك أجمــل مــن السمـــاء بنجومهــا وضحڪتـــك أجمــل مــن البـــدر لو اڪتمـــل🖇️❤️",
  "‏النوم هو الشيء الوحيد الذي يستحق أن نعطيه أكبر من حجمه🫠",
  "_سلامآا على ارواح تَشوَهَتْ ومازالت تُقاوم_🖇️",
  "وعلى عَيْنَيها آ تتلى آيةً واحِدة .. إقْرَأْ بِإسْمِ رَبِّكَ الَّذِي خَلَقَ 🌸☁️🤎",
  "الخَمْرُ يُسْكِرُ مَنْ يُعَاقِرُ كَأْسَهُ، وَعَيْنَاهَا بِلَا كُؤُوسٍ تُسْكِرُ. -بُنِّيةُ العَينَينِ.😌🤎 #𝑺�𝒖𝒍👑",
  "°° *ارتـدت نقـابهـا الأســود وقـالــت : مـا رأيك ؟* *قال : أي رأي تسـأليـن عنـه* *وقـد جـعله الله لــون الليـل في السماء* *وجعلك قمــرًا بيـن النســاء*💎🌸",
  "وتبدو هادئاً كأنّك مُتصالحٌ مع كلِّ ما حولَك..ولرُّبما كان هذا النوع من السكينة حرباً صامتةً ضِدّ كلّ ِشيء !!🖤",
  ".★ لا ترهق نفسك مع بشر لا يستحقون العتاب..🖤👑 𝑫𝒐𝒏'𝒕 𝒃𝒖𝒓𝒅𝒆𝒏 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇 𝒘𝒊𝒕𝒉 𝒑𝒆𝒐𝒑𝒍𝒆 𝒘𝒉𝒐 𝒅𝒐 𝒏𝒐𝒕 𝒅𝒆𝒔𝒆𝒓𝒗𝒆 𝒃𝒍𝒂𝒎𝒆..🖤👑",
  "‏۞وَلَسَوْفَ يُعْـطِيكَ رَبُڪَ فَتَرْضـَى۞...💛✨",
  "لــيــتـــــنا نـــســـتـــطـــيـــع إيــقــاف الـــــــزمــــن عــــلـــــى لـــــحـــــظـــــات كـــنـــا بـــــهــــــا ســعــداء ⁰⁰.⁰⁰🖤🍷𝕀 𝕨𝕚𝕤𝕙 𝕨𝕖 𝕔𝕠𝕦𝕝𝕕 𝕤𝕥𝕠𝕡 𝕥𝕚𝕞𝕖 𝕠𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕤 𝕨𝕙𝕖𝕟 𝕨𝕖 𝕨𝕖𝕣𝕖 𝕙𝕒𝕡𝕡𝕪 ⁰⁰.⁰⁰🖤🍷",
  "الخَمْرُ يُسْكِرُ مَنْ يُعَاقِرُ كَأْسَهُ، وَعَيْنَاهَا بِلَا كُؤُوسٍ تُسْكِرُ. -بُنِّيةُ العَينَينِ.😌🤎 #𝑺𝒐𝒖𝒍👑",
  "مُتَوَاضِعَةٌ؛ لكِنْ لَهَا أَلْفُ هَيْبَةٍ.🧸🦋",
  ".★ لا ترهق نفسك مع بشر لا يستحقون العتاب..🖤👑 𝑫𝒐𝒏'𝒕 𝒃𝒖𝒓𝒅𝒆𝒏 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇 𝒘𝒊𝒕𝒉 𝒑𝒆𝒐𝒑𝒍𝒆 𝒘𝒉𝒐 𝒅𝒐 𝒏𝒐𝒕 𝒅𝒆𝒔𝒆𝒓𝒗𝒆 𝒃𝒍𝒂𝒎𝒆..🖤👑",
  "لا أحد يستحق أن يستحقك مرتين ..🖤🌻",
  "- لم تستطع ٱمرأة العزيز أن تنال سيدنا يوسف بإغرائها ، و ٱستطاعت ٱبنة شعيب أن تتزوّج سيدنا موسى بحيائها . تعفّفِي ؛ تنالِي فوقَ مُناكِ!🍂☺️",
  "لقيتك أرخص من العتاب قلت أخسرك…🖤✨",
  "الحُزن سببهُ الذكاء، كُلما زاد فهمك لأشياء معيَّنة كُلما تمنيتَ لو لم تفهمها. - تشارلز بوكوفسكي",
  "الحـــب كذبة اخترعها الفقــراء 🤡✨",
  "🔘 « قال عُبيد بن عُمير: تَـسبِيحَة بِحـمدِ الله في صَـحِيفَة مُـؤمِن، خـيرٌ له مِن جِـبَال الدُّنيَـا تَجـري مَـعَه ذَهَـبًا »..♡ [مُصنّف ابنِ أبِي شَيبَة] ",
  "دعِ الحيَاةَ تأتيكَ بأعنَف مالديهَا...لن يُهزَمَ شخصٌ يؤمنُ بنفسِه..🖤",
  "آلحيــة مثل آلبيـآنو.. هناك أصابع بيضاء وهي (السعادة) وهناك أصابع سوداء وهي (الحزن) ولكن تأكد إنك ستعزف بالإثنين لكي تعطي الحياة لحناً",
  "ما يُعجبني فِي نفسي: أني لا أجد في قلبي كراهِية لأحد إما أن أُحبه أو أن أُعرض عنه وأجعل علاقتي به سطحيّة .♥️",
  "كـان الـورد قبل لقـياگ غصـُن فيزهر حيــن تلمسـه يـداگِ 🌸🤍! 𝓑𝓮𝓯𝓸𝓻𝓮 𝓜𝓮𝓮𝓽𝓲𝓷𝓰 𝓨𝓸𝓾 𝓨𝓱𝓮 𝓤𝓸𝓼𝓮 𝔀𝓪𝓼 𝓪 𝓑𝓻𝓪𝓷𝓿𝓱 𝓪𝓷𝓭 𝓲𝓽 𝓑𝓵𝓸𝓸𝓶𝓼 𝓦𝓱𝓮𝓷 𝓨𝓸𝓾𝓻 𝓗𝓪𝓷𝓭𝓭𝓼 𝓣𝓸𝓾𝓬𝓱 🌸🤍!",
  "#لنفسي. آعــــشق شخصيتي فــــي عنآدي فــــي غروري فــــي تصرفآتي فأنــــا آنا وآبــــقئ آنا القــــمه😌👑",
  "بَيْنَمَا كَانَ الجَمِيعُ يَرَانِي وَحِيدَةً، كُنْتُ جَيْشًا كَامِلًا لِنَفْسِي.💛",
  "أرى شخٌص على المرآه يُحُبَني وما أجمل حُب الذات للذات ✨💜",
  "لا تيأس وأنت تعلم أن الله دوماً يخلق نوراً جديداً بعد كل ظلام🧚‍♀️💜🗞 𝑫𝒐𝒏'𝒕 𝒅𝒆𝒔𝒑𝒂𝒊𝒓 𝒘𝒉𝒊𝒍𝒆 𝒚𝒐𝒖 𝒌𝒏𝒐𝒘 𝒕𝒉𝒂𝒕 𝑰𝒈𝒏𝒐𝒓𝒂𝒏𝒄𝒆 𝒊𝒔 𝒕𝒉𝒆 𝒌𝒆𝒚 𝒐𝒇 𝒉𝒂𝒑𝒑𝒊𝒏𝒆𝒔𝒔",
  "أنا بخير حتى لو كانت الدنيا لا تريدهم🖤👌",
  "لنا الله🌙♥️✨ #ذكرى_تسكع",
  "الخَمْرُ يُسْكِرُ مَنْ يُعَاقِرُ كَأْسَهُ، وَعَيْنَاهَا بِلَا كُؤُوسٍ تُسْكِرُ. -بُنِّيةُ العَينَينِ.😌🤎 #𝑺𝒐𝒖𝒍👑",
  "‏بِها جُمِعَت كُلُّ ما كُنَّا نَتَمَنَّاه، وبِها رُزِقَت الْجَنَّة💙🌿.",
  "لا تحزن على شيء فاتك .. والذي اقترب منك سوف يكون لك.. فلا تحزن وتفاءل دائماً 💫🖤",
  "ولو مرةً وجدت نفسك تحت ضغط ولا تستطيع التحمل .. رفع ساقك اليمنى وضع يدك اليسرى على ساقك وكن متأكداً أنها لن تؤثر في تحسن الوضع ولكن ستجعلك تبدو غبياً وسيتوقف الجميع عن النظر إليك ويبتسمون 💪👑",
  "حينما تتغير العادات، يغيرون الأمم .. وحينما تتغير الأفكار، تتغير العالم!!🌍💡💜",
  "تُـرى يـا صـديقـي: مـا حَـرَمَـكَ الله مِن حُــلال ؟!💔",
  "لا تدع قسوة الظروف تفقدكُ شموخك، فبالعزيمة والإصرار يُبنى الإنسان شخصيته وقيمته🌟💪🏼",
  "‏أفضل شيء قد يُمارسه الإنسان في هذه الحياة هو العفو وقطع الشر والإحسان للناس ، لكن لا تجد من يفهمك إلا قلوب القلائل🍃🍂!",
  "آلحيـــة مثل آلبيـآنو.. هناك أصابع بيضاء وهي (السعادة) وهناك أصابع سوداء وهي (الحزن) ولكن تأكد إنك ستعزف بالإثنين لكي تعطي الحياة لحناً🎵",
  "آحترم نفسك، وتأكد أن من يريد البقاء في حياتك سيحترمك وسيقدرك... إحذر من يلعب بعقلك وعواطفك🥀",
  "كنْ عبداً نَافعاً، عندما تُخرَجُ مِن مكانٍ، وَضع فيه الأذى أَثراً نافعاً.♥️👑",
];

const getRandomText = () => {
  const index = Math.floor(Math.random() * texts.length);
  return texts[index];
};

const getRandomImage = () => {
  const index = Math.floor(Math.random() * 10) + 1;
  return `https://source.unsplash.com/random/400x400?sig=${index}`;
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/iq", (req, res) => {
  const text = getRandomText();
  const image = getRandomImage();
  res.json({ text, image });
});

app.post("/add", (req, res) => {
  const { text, image } = req.body;
  texts.push(text);
  res.send("Text and image added successfully!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
