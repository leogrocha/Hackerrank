// function saveThePrisoner(numeroPrisioneiros, numeroDoces, cadeiraInicioDistribuicao) {
//     let posicaoFinal = cadeiraInicioDistribuicao;

//     let index = 2;
    
//     while(index <= numeroDoces) {
//         posicaoFinal = posicaoFinal === numeroPrisioneiros ? 1 : posicaoFinal + 1;
//         index++;
//     }
    
    
//     return posicaoFinal;
// }

function saveThePrisoner(numeroPrisioneiros, numeroDoces, cadeiraInicioDistribuicao) {
    var resultado = (numeroDoces + cadeiraInicioDistribuicao - 1) % numeroPrisioneiros;
    return resultado === 0 ? numeroPrisioneiros : resultado;
}

let test = [];


// test.push(saveThePrisoner(5,2,1),);
// test.push(saveThePrisoner(4,6,2),);

test.push(saveThePrisoner(352926151, 380324688, 94730870));
test.push(saveThePrisoner(94431605 ,679262176 ,5284458));
test.push(saveThePrisoner(208526924, 756265725 ,150817879));
test.push(saveThePrisoner(962975336, 972576181 ,396355184));
test.push(saveThePrisoner(464237185, 937820284 ,255816794));
test.push(saveThePrisoner(649320641, 742902564 ,647542323));
test.push(saveThePrisoner(174512033, 711706897 ,68977959));
test.push(saveThePrisoner(107283902, 156676511 ,67149447));
test.push(saveThePrisoner(104513201, 298399273 ,96292548));
test.push(saveThePrisoner(113378824, 274011418 ,98103763));
test.push(saveThePrisoner(934815799, 991959468 ,212396037));
test.push(saveThePrisoner(88325121 ,435452998 ,24617705));
test.push(saveThePrisoner(984873585, 997634055 ,103050157));
test.push(saveThePrisoner(344218387, 715364875 ,90658180));
test.push(saveThePrisoner(556065259, 615709967 ,156417592));
test.push(saveThePrisoner(57109959 ,451440582 ,4188603));
test.push(saveThePrisoner(353972922, 573651462 ,244520504));
test.push(saveThePrisoner(946486979, 973168361 ,647886035));
test.push(saveThePrisoner(368127406, 680428368 ,105517295));
test.push(saveThePrisoner(884634320, 965112925 ,119757238));
test.push(saveThePrisoner(422557970, 744431033 ,28932300));
test.push(saveThePrisoner(634954007, 957414623 ,341366379));
test.push(saveThePrisoner(190265362, 445253893 ,184632922));
test.push(saveThePrisoner(293315518, 479153471 ,120684020));
test.push(saveThePrisoner(72410472, 80198999 ,984948));
test.push(saveThePrisoner(784893322, 849791807 ,360911386));
test.push(saveThePrisoner(846191883, 880790237 ,510053756));
test.push(saveThePrisoner(297201660, 812278057 ,198376746));
test.push(saveThePrisoner(945087694, 999220046 ,465061514));
test.push(saveThePrisoner(786859800, 831171414 ,378370933));
test.push(saveThePrisoner(528402029, 859318899 ,224559950));
test.push(saveThePrisoner(522640531, 755821672 ,28838424));
test.push(saveThePrisoner(864006909, 879474138 ,806467486));
test.push(saveThePrisoner(613544440, 943850900 ,258190755));
test.push(saveThePrisoner(734228459, 928771704 ,265979283));
test.push(saveThePrisoner(542812502, 597832172 ,330877768));
test.push(saveThePrisoner(541133561, 748691081 ,126348492));
test.push(saveThePrisoner(51187317 ,524866691 ,1143193));
test.push(saveThePrisoner(885290374, 990676850 ,373368385));
test.push(saveThePrisoner(147955933, 450823700 ,138416059));
test.push(saveThePrisoner(100046465, 587967212 ,32555061));
test.push(saveThePrisoner(233926824, 996957988 ,31809378));
test.push(saveThePrisoner(785405778, 835771758 ,689182705));
test.push(saveThePrisoner(444389615, 870657324 ,72775880));
test.push(saveThePrisoner(702580369, 895325888 ,345053199));
test.push(saveThePrisoner(968559651, 974760313 ,326732084));
test.push(saveThePrisoner(299437419, 514618345 ,254272806));
test.push(saveThePrisoner(901702945, 930227426 ,727030891));
test.push(saveThePrisoner(721843209, 736359383 ,225283784));
test.push(saveThePrisoner(833018320, 883439261 ,806599246));
test.push(saveThePrisoner(267346244, 307857609 ,46989880));
test.push(saveThePrisoner(299901304, 892163356 ,210218436));
test.push(saveThePrisoner(565637506, 795821687 ,158300457));
test.push(saveThePrisoner(107336562, 781910357 ,54488503));
test.push(saveThePrisoner(513281286, 916998022 ,254269425));
test.push(saveThePrisoner(413431205, 611661371 ,188998419));
test.push(saveThePrisoner(740163288, 938647312 ,571382392));
test.push(saveThePrisoner(44702121 ,296589002  , 43470596));
test.push(saveThePrisoner(771733011, 919327188 ,317638907));
test.push(saveThePrisoner(718860003, 815844769 ,495144331));
test.push(saveThePrisoner(377975600, 438513404 ,111085209));
test.push(saveThePrisoner(424965480, 928959619 ,20776133));
test.push(saveThePrisoner(234986523, 732169039 ,205952749));
test.push(saveThePrisoner(377078343, 981597420 ,219264561));
test.push(saveThePrisoner(612269027, 791414524 ,580170106));
test.push(saveThePrisoner(232336090, 616084008 ,81392003));
test.push(saveThePrisoner(75059328 ,274029861  , 53524881));
test.push(saveThePrisoner(239121359, 646856043 ,141349731));
test.push(saveThePrisoner(923193147, 943368157 ,206717532));
test.push(saveThePrisoner(12565064 ,536852817  , 11557940));
test.push(saveThePrisoner(360225746, 970375527 ,284883902));
test.push(saveThePrisoner(213705306, 380885426 ,14495860));
test.push(saveThePrisoner(659446919, 699401237 ,73837176));
test.push(saveThePrisoner(335372713, 785363124 ,7610828));
test.push(saveThePrisoner(538388654, 859196325 ,110284314));
test.push(saveThePrisoner(118558760, 713483972 ,83950807));
test.push(saveThePrisoner(896959032, 961368580 ,8848444));
test.push(saveThePrisoner(25543240 ,521123082  , 2472730));
test.push(saveThePrisoner(258530682, 935834352 ,194732411));
test.push(saveThePrisoner(465248213, 679599042 ,334563499));
test.push(saveThePrisoner(331230504, 637771661 ,76778140));
test.push(saveThePrisoner(976340152, 988657462 ,243958260));
test.push(saveThePrisoner(552994811, 922743535 ,540135280));
test.push(saveThePrisoner(626831986, 839281366 ,24222267));
test.push(saveThePrisoner(157704591, 253731033 ,59023773));
test.push(saveThePrisoner(806377559, 859228114 ,238044289));
test.push(saveThePrisoner(838798445, 996851254 ,268459446));
test.push(saveThePrisoner(847646888, 928001503 ,755190846));
test.push(saveThePrisoner(877625009, 999275937 ,874127074));
test.push(saveThePrisoner(847949466, 893343194 ,10497830));
test.push(saveThePrisoner(35029316 ,784675240  , 8200127));
test.push(saveThePrisoner(111807455, 690309882 ,23190325));
test.push(saveThePrisoner(355765714, 554560093 ,311565654));
test.push(saveThePrisoner(1890615, 614626804   , 976253));
test.push(saveThePrisoner(132293206, 165429783 ,65360680));
test.push(saveThePrisoner(506726160, 934170235 ,455394293));
test.push(saveThePrisoner(210041918, 328800789 ,159203369));
test.push(saveThePrisoner(499999999, 999999997 ,2));
test.push(saveThePrisoner(499999999, 999999998 ,2));
test.push(saveThePrisoner(999999999, 999999999 ,1));

console.log(test);
