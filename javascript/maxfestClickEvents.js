// Click events
// Remove hidden class from location relative to id.
var idLocation = ""; //Empty string | Will be owerwritten.
var classMatches = ""; //Empty string | Will be owerwritten.
var firstMatch = ""; //Empty string | Will be owerwritten.

// Remove hidden class from location relative to id.
function rmHidden(id){
	idLocation = document.getElementById(id);
	classMatches = idLocation.getElementsByClassName("fullPageCover");
	firstMatch = classMatches[0];
	firstMatch.classList.remove("hidden");
}

// Add hidden class from location relative to id.
function addHidden(id){
	idLocation = document.getElementById(id);
	classMatches = idLocation.getElementsByClassName("fullPageCover");
	firstMatch = classMatches[0];
	firstMatch.classList.add("hidden");
}

// Add hidden class to id.
function hideCase(id){
	idLocation = document.getElementById(id);
	idLocation.classList.add("hidden");
}

// Remove hidden class to id.
function viewCase(id){
	idLocation = document.getElementById(id);
	idLocation.classList.remove("hidden");
}

// Cases view handling
var caseViewSection = document.getElementById("caseView");
var	caseViewWrapper = caseViewSection.getElementsByClassName("wrapper");
var	closeButton = caseViewSection.getElementsByClassName("closeButton");
var	caseLeft = caseViewSection.getElementsByClassName("caseLeft");
var	caseInfoHeadline = caseViewSection.getElementsByClassName("caseInfoHeadline");
var	caseRight = caseViewSection.getElementsByClassName("caseRight");

function updateCaseView(casename){
	caseViewSection.setAttribute("aria-hidden", "false");
	viewCase("caseView");
	viewCase("mainNavCaseIcon");
	viewCase("sideNavCaseIcon");
	closeButton[0].setAttribute("href", "#" + casename["id"]);
	caseViewWrapper[0].setAttribute("id", "caseView" + casename["id"].charAt(0).toUpperCase() + casename["id"].slice(1));
	caseLeft[0].innerHTML = casename["caseLeft"];
	caseInfoHeadline[0].innerHTML = casename["caseInfoHeadline"];
	caseRight[0].innerHTML = casename["caseRight"];
}

function closeCaseView(){
	caseViewSection.setAttribute("aria-hidden", "true");
	caseViewWrapper[0].setAttribute("id", "removed");
	caseLeft[0].innerHTML = "";
	caseInfoHeadline[0].innerHTML = "";
	caseRight[0].innerHTML = "";
	hideCase("caseView");
	hideCase("mainNavCaseIcon");
	hideCase("sideNavCaseIcon");
}

// Cases:
// - 
/*var varname = {
	id:"id",
	pubdate:'16-12-2019',
	caseLeft:"placeholder",
	caseInfoHeadline:"placeholder",
	caseRight:"placeholder"
};*/

// - Smokingpenguin animation
var smokingpenguin_animation = {
	id:"smokingpenguin-animation",
	pubdate:'2019-12-16',
	caseLeft:"<iframe src='https://maxfest.dk/assets/smoking_penguin.html'></iframe>",
	caseInfoHeadline:"Smokingpenguin animation",
	caseRight:"<p><a href='http://maxfest.dk/assets/smoking_penguin.html' target='_blank'>Smokingpenguin animation set i et nyt vindue.</a></p><p>Jeg har lavet en logo animation af smokingpenguin.</p><p>Animationen er baseret på logo og maskotten til smokingpenguin.dk.</p><p>Animationen er tegnet og animeret i Adobe Animation.</p>"
};

// - Oliver the Olive
var oliver_the_olive = {
	id:"oliver-the-olive",
	pubdate:'2019-12-16',
	caseLeft:"<iframe  src='https://www.youtube.com/embed/2IFVq037YOw' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
	caseInfoHeadline:"Oliver the Olive",
	caseRight:"<p><a href='https://youtu.be/2IFVq037YOw' target='_blank'>Oliver the Olive video.</a></p><p>Oliver the Olive er en stopmotion kortfilm.</p><p>Oliver the Olive blev udarbejdet som del af <a href='https://www.youtube.com/playlist?list=PLDIc4KZ3Dlbwa_o2M0o2teJhLacY90RT6&fbclid=IwAR1SZFvcCsDJ2xtbCX06t_xBZsoDsKzXanWWfK5JwI7-vu4Z4DMPaD6BLNY' target='_blank'>Stop Motion MMD Fall 2019</a>. Det er en serie af videoer udgivet af alle nye multimediedesignerne på UCL fra sommeren 2019.</p><p>Animationen er udviklet af gruppen ”oliven”, bestående af Mads Hougesen, Max Festersen Hansen (mig), Antom Storm Wich og Emma Engel.</p>"
};

// - Design forslag til baagoe.info
var baagoe_redesign = {
	id:"baagoe-redesign",
	pubdate:'2019-12-16',
	caseLeft:"<a href='https://tinyurl.com/y4ze5l7x' target='_blank'><img src='images/cases/baagoe-redesign-subpage.jpg' alt='Screenshot fra wireframe til design forslag til baagoe.info'></a>",
	caseInfoHeadline:"Design forslag til baagoe.info",
	caseRight:"<p><a href='https://tinyurl.com/y4ze5l7x' target='_blank'>Design forslag til baagoe.info</a></p><p>Dette projekt er et design forslag til <a href='http://www.baagoe.info/index.html' target='_blank'>baagoe.info</a>. Det er et Hi Fidelity wireframe. En prototype af en hjemmeside, der ser ud som det endelige produkt og efterligner noget af funktionaliteten.</p><p>Dette var en skoleopgave, og er ikke et produkt der er blevet præsenteret for- eller anvendt af hjemmesidens ejer.</p><p>Til udviklingen indgik Rasmus Gyde Andersen, Nick Varming, Max Festersen Hansen (mig) & Fiona Elvine Anine Sibeko.</p><p>Designforslaget er udarbejdet på baggrund af 2 usability analyser. Vi vurderede hjemmesiden på baggrund af NUG, Nobanet Usability Guidelines (en standard udviklet og anvendt hos UCL). Vi vurderede hjemmesiden for 113 regler defineret på baggrund af Nielsens & Tahirs bog Homepage Usability.</p><p>Til det nye designforslag blev der defineret målgrupper. Til dette blev Minerva-modellen anvendt for at finde et passende segment baseret på overensstemmelser mellem interesser og værdier fra segmenterne og baagoe.info.</p><p>Ud fra målgruppen blev der udviklet persona, og ud fra disse blev der fundet testpersoner, som hjemmesiden blev testet på.</p><p>Under usability analysen og på baggrund af besvarelserne blev der fundet 5 fejl som det nye design skulle løse.</p><ol><li>Hjemmesidens kode er ikke optimeret. Der er bl.a. ingen semantik. Det medfører at indekseringsværtøjer og skærmoplæsningsværkøjer kan virke dårligere.</li><li>Navigationen på hjemmesiden var diskursiv. Der er links der fører til 404 sider, hvilket medførte stor irritation for en af testpersonerne.</li><li>Indhold på hjemmesiden var i mange tilfælde manglende eller mangelfuld i forhold til målgruppens interesser.</li><li>Typografien på hjemmesiden var i mange tilfælde inkonsistent, hvilket var frustrerende for testpersoner.</li><li>Hjemmesiden følger ikke <a href='https://saylordotorg.github.io/text_business-information-systems-design-an-app-for-that/s07-01-c-r-a-p-principles-of-graphic-.html' target='_blank'>CRAP principperne</a>. Det gav testpersonerne et indtryk om at siden ikke var professionel.</li></ol><p>Konklusionen blev at hjemmesiden havde brug for et komplet redesign for at kunne løse målgruppens mest kritiske problemer.</p>"
};

// - Kagefest
var kagefest = {
	id:"kagefest",
	pubdate:'2019-12-16',
	caseLeft:"<a href='http://kagefest.dk/' target='_blank'><img src='images/cases/kagefest-recipe.jpg' alt='Kagefest screenshot'></a>",
	caseInfoHeadline:"Kagefest",
	caseRight:"<p><a href='http://kagefest.dk/' target='_blank'>Link til kagefest.dk.</a></p><p>Kagefest er hjemmet til familien Festersens madopskrifter. Hjemmesiden var oprindeligt dedikeret til kage, men familien havde hurtigt besluttet at de ville dele langt mere end kage. Efter at familiens forrige hjemmeside ikke klarede et skift til en nyere version i PHP, besluttede familien sammen at de ville prøve noget nyt. Her har jeg tilbudt at lave en ny side.</p><p>Den nye Kagefest hjemmeside anvender WordPress CMS for at have et simpelt system, som hele familien kan være med til at forbedre på. Det er meningen at hele familien skal kunne bidrage til både opskrifter, men også nye sider, nye funktioner og design.</p><p><b>Design</b></p><p>Kagefest anvender en let modificeret udgave af temaet Kale https://wordpress.org/themes/kale/, og et baggrundbillede; <a href='https://www.toptal.com/designers/subtlepatterns/food/' target='_blank'>Food af Ilya via subtlepatterns</a>.</p><p><b>Funktionalitet</b></p><p>Indlæg er blevet udvidet til at indeholde opskrifter med et pluginnet <a href='https://bootstrapped.ventures/wp-recipe-maker/' target='_blank'>WP Recipe Maker</a>. Der findes mange plugins der kan oprette opskrifter. WP Recipe Maker blev valgt primært pga. 2 faktorer. Det er nemt at inkorporere opskrifter i indlæg. Det var muligt at oversætte alt tekst der anvendes i uden kendskab til kodning.</p>"
};

// - Sunset and sunrise webpage
var solopnedgang = {
	id:"solopnedgang",
	pubdate:'2019-12-16',
	caseLeft:"<a href='http://www.smokingpenguin.dk/sider/solopognedgange/' target='_blank'><img src='images/cases/solopnedgang-time-showing.jpg' alt='Screenshot af Solop- og nedgang for Danske byer.'></a>",
	caseInfoHeadline:"Solop- og nedgang for Danske byer.",
	caseRight:"<p><a href='http://www.smokingpenguin.dk/sider/solopognedgange/' target='_blank'>Link til solop- og nedgang for Danske byer hjemmesiden.</a></p><p>Solop- og nedgang for Danske byer er en hjemmeside hvor man kan se tider for solop- og nedgange for danske byer på ugebasis. Hjemmesiden er et hobbyprojekt.</p><p>Hjemmesiden kan (forsøge) at finde den mest relevante by på baggrund af brugerens IP-adresse, såfremt brugeren har givet sin tilladelse til dette. Alternativt kan man anvende formen på siden til at vælge by, dato og zenit. Zenit kan vælges på baggrund af forskellige suppositioner eller en brugerdefineret værdi.</p><p>I beregningen for tiderne for solop- og nedgang bliver der taget i betragtning om der er sommer- eller vintertid i Danmark.</p><p>Siden er kodet med PHP, HTML, React og Bootstrap. Beregning af tider, cookie håndtering og API-kald er kodet i PHP. Siden er opsat i HTML med hjælp af Bootstrap. Sidens design er lavet i CSS med hjælp af Bootstrap. Former på hjemmesiden anvender Bootstrap Forms. Brugerdefineret Zenit anvender også React til at håndtere live opdatering af input. Siden er responsive fra 200-1200px. Under 200px er der uhensigtsmæssige brud på siden. Over 1200px øges margin. Den bedste visning fås ved 1980px brede.</p>"
};

// - Coop's Marketingsmix
var coop_marketingsmix = {
	id:"coop-marketingsmix",
	pubdate:'2019-12-16',
	caseLeft:"<iframe title='vimeo-player' src='https://player.vimeo.com/video/328218593' allowfullscreen></iframe>",
	caseInfoHeadline:"Rettelser i COOP’s agile modelleringsværktøj",
	caseRight:"<p>Jeg har været involveret i udviklingen af COOP’s agile modelleringsværktøj. Jeg har primært haft en understøttende rolle. Jeg har været med til at formatere data, rette regnefejl og redigeret logikken for visning af data, samt processen dertil.</p><p>Jeg har bl.a. rettet i nogle af beregningerne og ændret på logikken for visningen af beregningerne. For at tal vises korrekt. Jeg har arbejdet en del på logikken på at sortere datasættet og visningen. Således at løsningen sorterer og kategoriserer live på baggrund af brugerens filtre og indstillinger til datasættet på en måde hvorpå grafikken er sorteret og kategoriseret korrekt. Jeg har arbejdet delvist på sidens CSS i et mindre omfang.</p><p>Jeg deltog i udviklingen under min ansættelse som udvikler hos Annalect Nordics sidst i 2018 til januar 2019.</p><p>COOP’s agile modelleringsværktøj er vinder af <i>Advertising Solutions</i>, og stærkt anbefalet i indenfor <i>Best Use of Research Budget</i> hos <a href='https://iabeurope.eu/best-practices/iab-europe-research-awards-2019-coop-agile-marketing-mix-modelling-annalect/' target='_blank'>IAB Europe Research Awards 2019</a>.</p><p>COOP’s agile modelleringsværktøj er nomineret til årets løsning i kategorierne <i>Analytics and AI</i> og <i>ROI</i> i 2019 på <a href='https://danishdigitalaward.dk/projekt/ny-teknologi-goer-coops-markedsfoering-mere-effektiv/' target='_blank'>Danish Digital Awards</a>.</p><p>Flere hjemmesider har skrevet indlæg om platformen. Herunder:</p><ul><li><a href='https://markedsforing.dk/artikler/marketing/coop-direkt-r-ny-tech-har-v-ret-en-jen-bner' target='_blank'>Dansk markedsføring</a></li><li><a href='https://www.retailnews.dk/article/view/636251/ny_teknologi_gor_coops_markedsforing_mere_effektiv' target='_blank'>RetailNews</a></li></ul><p>Billederne og videoen, anvendt I denne case er ikke ejet eller udviklet af mig. Billederne jeg anvender, er taget fra <a href='https://danishdigitalaward.dk/projekt/ny-teknologi-goer-coops-markedsfoering-mere-effektiv/' target='_blank'>danishdigitalaward.dk</a>.</p>"
};

// - Blog, Maxfest.dk
var maxfest_blog = {
	id:"maxfest-blog",
	pubdate:'2019-12-16',
	caseLeft:"<a href='https://www.maxfest.dk/blog ' target='_blank'><img src='images/cases/maxfest-blog-post.jpg' alt='Screenshot af blogindlæg på maxfest.dk/blog.'></a>",
	caseInfoHeadline:"Bloggen, Maxfest.dk",
	caseRight:"<p><a href='https://www.maxfest.dk/blog ' target='_blank'>Maxfest.dk/blog</a></p><p>Jeg lavede og vedligeholdt bloggen, maxfest.dk fra 2015-2019. Bloggen er nu arkiveret på <a href='https://www.maxfest.dk/blog' target='_blank'>maxfest.dk/blog</a>.</p><p>De mest populære indlæg er blevet læst nogle hundrede gange, og siden er blevet besøgt totalt af omkring 33.000 besøgende, i skrivende stund.</p><p>Før jeg besluttede at have maxfest.dk som hjemmesiden til min portefølje, havde jeg en bloggen på domænet.</p><p>På bloggen har jeg skrevet om mig selv, mine interesser og webudvikling.</p>"
};

// - SmokingPenguin.dk
var smokingpenguin = {
	id:"smokingpenguin",
	pubdate:'2019-12-16',
	caseLeft:"<a href='http://www.smokingpenguin.dk/index.php' target='_blank'><img src='images/cases/smokingpenguin-tale.jpg' alt='Screenshot af eventyret på smokingPenguin.dk.'></a>",
	caseInfoHeadline:"SmokingPenguin.dk",
	caseRight:"<p>SmokingPenguin.dk er en af de første hjemmesider jeg har udviklet. Formålet for hjemmesiden har skiftet igennem tiden. Oftest er det en form for portefølje.</p><p>Siden har været grundlaget for adminpenguin. Det er et CMS udviklet af mig, der anvendte designelementer fra smokingpenguin i admin panelet. Systemet er kun for mig selv, klienter og kunder, og kan ikke findes på internettet.</p><p>Logoet fra smokingpenguin er designet i paint, og senere redigeret i paint.net og Adobe photoshop. Logoet har fået et redesign, men jeg valgte ikke at anvende det, da lavkvalitetsversionen er blevet synonym med hjemmesiden.</p><p>Hjemmesidens mest populære attraktion er i mellemtiden blevet eventyret derpå. I eventyret kan man hjælpe den ikoniske pingvin igennem et eventyr, for at hjælpe den af med sit rygeproblem. <a href='http://www.smokingpenguin.dk/sider/eventyr.php' target='_blank'>Prøv eventyret selv http://www.smokingpenguin.dk/sider/eventyr.php</a>.</p>"
};

// - H.C. Andersen prototype instalation
var hc_andersen_prototype_instalation = {
	id:"hc-andersen-prototype-instalation",
	pubdate:'2019-12-16',
	caseLeft:"<video controls><source src='https://maxfest.dk/port/wp-content/uploads/2019/11/HCA-produktvideo.mp4' type='video/mp4'><span>Videoen kunne ikke afspilles.</span></video><img src='images/cases/hc-andersen-promotion.jpg' alt='Pomotionsplakat'><img src='images/cases/gruppefoto-ved-udstillingen.jpg' alt='Gruppefota af gruppe 3 fra udstilingen.'>",
	caseInfoHeadline:"Dit H.C. Andersen Eventyr",
	caseRight:"<p><a href='https://adobe.ly/34R3hY9' target='_blank'>Link til protypen til <i>Dit H.C. Andersen Eventyr</i>.</a></p><p>Dit H.C. Andersen Eventyr er en prototype for et installationskoncept der kan anvendes af Odense bys museer i et museum om H.C. Andersen. Prototypen er blevet udarbejdet for UCL Erhvervsskole, i sammenarbejde med Odense Bys Museer.</p><p>Dit H.C. Andersen Eventyr er udviklet af et hold kaldet ”gruppe 3”, bestående af Caroline Greve Gregersen, Fiona Sibeko, Lucas Kofoed Lynge, Max Festersen Hansen & Nick Varming.</p><p>Formålet med Dit H.C. Andersen eventyr var at skabe en installation som kunne bryde de traditionelle normer og barrierer man kan finder i et eventyr.</p><p>Det var vigtigt at få fastslået hvem målgruppen var, og hvilke problemer løsningen kunne løse for dem. Der blev lavet omhyggelig dataindsamling på eksisterende koncepter, medier, feedback og andre relationer. På baggrund af fandt vi et huld i markedet. Familier med børn mellem 8-12 var ofte ikke tilfredsstillet af H.C. Andersen relateret underholdning, ofte pga. manglende aldersrelevant underholdning. Vi interviewede børn og forældre, og fik indsigter nok til at definere persona, og målgrupper. Vi fandt på 3 idéer. Af disse valgte vi den bedste, og arbejdede videre med den. Vi udviklede protypen og afprøvede den på testpersoner, og fik god feedback.</p><p>Prototypen er udviklet i Adobe XD. Det er vigtigt at huske at det er en prototype. I denne prototype kan man prøve at opleve H.C. Andersen eventyret Koldshans, hvor man kan ændre historien afhængigt af de valg man tager.</p><p>Protypen er udarbejdet efter de 5 designprincipper Discovery. Interpretation, Ideation, Experimentation og Evolution.</p><p>Installationskonceptet kunne den 14. november 2019 mellem kl. 8.15 og 16.00 afprøves på UCL. Det var muligt at afprøve den på en IPad og på en Windows pc med touchscreen. Prototypen kan også anvendes med mus, men den største fornøjelse får man ved at anvende touch. Løsningen blev varmt modtaget til udstillingen.</p>"
};
