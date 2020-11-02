def main():
    lista = le_arquivo()
    nome1 = input("Digite um nome: ")
    nome2 = input("Digite outro nome: ")
    nome1 = nome1.lower()
    nome2 = nome2.lower()
    nome1 = separa_silaba(nome1, lista)
    nome2 = separa_silaba(nome2, lista)
    nome_final = aleatorio(nome1, nome2)
    print(nome1)
    print(nome2)
    print(nome_final)

def aleatorio(N1, N2):
    from random import randint
    L = []
    for i in N1:
        L.append(i)
    for i in N2:
        L.append(i)
    nome = ''
    numeros = []
    silabas = []
    i = 0
    quant = 4
    terminou = False
    esta_N1 = 0
    esta_N2 = 0
    while i < quant and not terminou:
        num = randint(0, len(L)-1)
        if num not in numeros:
            if i == 0:
                nome+=L[num].lower().capitalize()
                silabas.append(L[num])
            else:
                nome+=L[num]
                silabas.append(L[num])
            numeros.append(num)
            i+=1
        if i == quant:
            for i in range(len(silabas)):
                if silabas[i] in N1:
                    esta_N1 += 1
                else:
                    esta_N2 += 1
            if esta_N1 == esta_N2:
                terminou = True
            else:
                esta_N1 = 0
                esta_N2 = 0
                i = 0
                nome = ''
                numeros = []
                silabas = []

    return nome


def separa_silaba(N, L):
    """
    C+V+R+S: se R for C, com C != L = ['l', 'r', 'n', 'm', 's', 'z', 'x'] cortar
    em V. Se C e L, continuar lendo. Se R == C, CeL e S == V, formar duas silabas, C+V
    e R+S, caso contrario formar C+V e ler a partir de R.

    V+C+R+S: se C != L, cortar em V, caso contrário, continuar lendo. Se R == V,
    cortar em R, se R == C, continuar lendo, se S==V, cortar em R e formar as sila-
    bas V e C+R+S (c+c+v). Se R == V


    Exemplo: palhaço - Formato C+V+C+C+V+C+V
    Leitura: C + V, R = CeL -> continua lendo. S = C, forma C+V -> Le a partir de R.
    Silaba formada: 'pa-'
    """
    V = ['a','e','i','o','u']
    E = ['l','m','n','r','s','x','z']
    silaba = ''
    palavra = []
    if N[0] in V: #COMEÇA COM VOGAL
        for i in range(len(N)):
            print(silaba+N[i], "nada", silaba+N[i] in L)
            if silaba+N[i] in L:
                silaba+=N[i]
                print(silaba, 'IF')
                if i == len(N)-1:
                    print(silaba, "IF IF")
                    palavra.append(silaba)
            elif len(silaba+N[i]) == 3 and silaba+N[i] not in L:
                if silaba[0] in V and silaba[1]+N[i] in L:
                    print(silaba[0], silaba[1]+N[i], 'ELIF')
                    palavra.append(silaba[0])
                    silaba = silaba[1]+N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
                elif silaba[0] in L and silaba[1]+N[i] not in L:#PODERIA SER ELSE
                    print(silaba, N[i], "ELIF ELIF")
                    palavra.append(silaba)
                    silaba=''
                    silaba+=N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
            elif len(silaba+N[i]) == 4:
                if silaba[0]+silaba[1] in L and silaba[2]+N[i] in L:
                    print(silaba[0]+silaba[1], silaba[2]+N[i], "ELIF IF")
                    palavra.append(silaba[0]+silaba[1])
                    silaba=silaba[2]+N[i]
                elif silaba in L and N[i] in L:
                    print(silaba, N[i], "ELIF ELIF2")
                    palavra.append(silaba)
                    silaba=N[i]
            elif len(silaba+N[i]) == 5:
                if silaba[0]+silaba[1]+silaba[2] in L and silaba[3]+N[i] in L:
                    print(silaba[0]+silaba[1]+silaba[2], silaba[3]+N[i], "ELIF5 IF")
                    palavra.append(silaba[0]+silaba[1]+silaba[2])
                    silaba = silaba[3]+N[i]
            else:
                palavra.append(silaba)
                silaba=''
                silaba+=N[i]
                print(silaba, 'ELSE')

    else: #COMEÇA COM CONSOANTE
        for i in range(len(N)):
            #print(silaba+N[i], "nada", silaba+N[i] in L)
            if silaba+N[i] in L:
                silaba+=N[i]
                #print(silaba)
                if i == len(N)-1:
                    palavra.append(silaba)
            elif len(silaba+N[i]) == 3 and silaba+N[i] not in L:
                if silaba[0] in V and silaba[1]+N[i] in L:
                    #print(silaba[0], silaba[1]+N[i], 'ELIF')
                    palavra.append(silaba[0])
                    #palavra.append(silaba[1]+N[i])
                    silaba = silaba[1]+N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
                elif silaba[0] in L and silaba[1]+N[i] not in L:#PODERIA SER ELSE
                    #print(silaba, N[i], "ELIF ELIF")
                    palavra.append(silaba)
                    silaba=''
                    silaba+=N[i]
                    if i == len(N)-1:
                        #print("SILABA")
                        palavra.append(silaba)
            elif len(silaba+N[i]) == 4:
                if silaba[0]+silaba[1] in L and silaba[2]+N[i] in L:
                    #print(silaba[0]+silaba[1], silaba[2]+N[i], "ELIF IF")
                    palavra.append(silaba[0]+silaba[1])
                    silaba=silaba[2]+N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
                elif silaba in L and N[i] in L:
                    #print(silaba, N[i], "ELIF ELIF2")
                    palavra.append(silaba)
                    silaba=N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)

            else:
                palavra.append(silaba)
                #print(silaba)
                silaba=''
                silaba+=N[i]
            #print(silaba in L)

    return (palavra)

def le_arquivo():

    silabas_string = "b c d f g h j k l m n p q r s t v w x y z a e i o u br ch dr fr gr lh nh pr tr vr bl cl dl fl gl pl tl vl ba be bi bo bu ca ce ci co cu da de di do du fa fe fi fo fu ga ge gi go gu ha he hi ho hu ja je ji jo ju ka ke ki ko ku la le li lo lu ma me mi mo mu na ne ni no nu pa pe pi po pu qa qe qi qo qu ra re ri ro ru sa se si so su ta te ti to tu va ve vi vo vu wa we wi wo wu xa xe xi xo xu ya ye yi yo yu za ze zi zo zu ban bas bar bam bal ben bes ber bem bel bin bis bir bim bil bon bos bor bom bol bun bus bur bum bul can cas car cam cal cen ces cer cem cel cin cis cir cim cil con cos cor com col cun cus cur cum cul dan das dar dam dal den des der dem del din dis dir dim dil don dos dor dom dol dun dus dur dum dul fan fas far fam fal fen fes fer fem fel fin fis fir fim fil fon fos for fom fol fun fus fur fum ful gan gas gar gam gal gen ges ger gem gel gin gis gir gim gil gon gos gor gom gol gun gus gur gum gul han has har ham hal hen hes her hem hel hin his hir him hil hon hos hor hom hol hun hus hur hum hul jan jas jar jam jal jen jes jer jem jel jin jis jir jim jil jon jos jor jom jol jun jus jur jum jul kan kas kar kam kal ken kes ker kem kel kin kis kir kim kil kon kos kor kom kol kun kus kur kum kul lan las lar lam lal len les ler lem lel lin lis lir lim lil lon los lor lom lol lun lus lur lum lul man mas mar mam mal men mes mer mem mel min mis mir mim mil mon mos mor mom mol mun mus mur mum mul nan nas nar nam nal nen nes ner nem nel nin nis nir nim nil non nos nor nom nol nun nus nur num nul pan pas par pam pal pen pes per pem pel pin pis pir pim pil pon pos por pom pol pun pus pur pum pul qan qas qar qam qal qen qes qer qem qel qin qis qir qim qil qon qos qor qom qol qun qus qur qum qul ran ras rar ram ral ren res rer rem rel rin ris rir rim ril ron ros ror rom rol run rus rur rum rul san sas sar sam sal sen ses ser sem sel sin sis sir sim sil son sos sor som sol sun sus sur sum sul tan tas tar tam tal ten tes ter tem tel tin tis tir tim til ton tos tor tom tol tun tus tur tum tul van vas var vam val ven ves ver vem vel vin vis vir vim vil von vos vor vom vol vun vus vur vum vul wan was war wam wal wen wes wer wem wel win wis wir wim wil won wos wor wom wol wun wus wur wum wul xan xas xar xam xal xen xes xer xem xel xin xis xir xim xil xon xos xor xom xol xun xus xur xum xul yan yas yar yam yal yen yes yer yem yel yin yis yir yim yil yon yos yor yom yol yun yus yur yum yul zan zas zar zam zal zen zes zer zem zel zin zis zir zim zil zon zos zor zom zol zun zus zur zum zul bau bao beu beo biu bou cau cao ceu ceo ciu cou dau dao deu deo diu dou fau fao feu feo fiu fou gau gao geu geo giu gou hau hao heu heo hiu hou jau jao jeu jeo jiu jou kau kao keu keo kiu kou lau lao leu leo liu lou mau mao meu meo miu mou nau nao neu neo niu nou pau pao peu peo piu pou qau qao qeu qeo qiu qou rau rao reu reo riu rou sau sao seu seo siu sou tau tao teu teo tiu tou vau vao veu veo viu vou wau wao weu weo wiu wou xau xao xeu xeo xiu xou yau yao yeu yeo yiu you zau zao zeu zeo ziu zou bans bens bins bons buns cans cens cins cons cuns dans dens dins dons duns fans fens fins fons funs gans gens gins gons guns hans hens hins hons huns jans jens jins jons juns kans kens kins kons kuns lans lens lins lons luns mans mens mins mons muns nans nens nins nons nuns pans pens pins pons puns qans qens qins qons quns rans rens rins rons runs sans sens sins sons suns tans tens tins tons tuns vans vens vins vons vuns wans wens wins wons wuns xans xens xins xons xuns yans yens yins yons yuns zans zens zins zons zuns bra bre bri bro bru cha che chi cho chu dra dre dri dro dru fra fre fri fro fru gra gre gri gro gru lha lhe lhi lho lhu nha nhe nhi nho nhu pra pre pri pro pru tra tre tri tro tru vra vre vri vro vru bla ble bli blo blu cla cle cli clo clu dla dle dli dlo dlu fla fle fli flo flu gla gle gli glo glu pla ple pli plo plu tla tle tli tlo tlu vla vle vli vlo vlu bras bram brar bral bres brem brer brel bris brim brir bril bros brom bror brol brus brum brur brul chas cham char chal ches chem cher chel chis chim chir chil chos chom chor chol chus chum chur chul dras dram drar dral dres drem drer drel dris drim drir dril dros drom dror drol drus drum drur drul fras fram frar fral fres frem frer frel fris frim frir fril fros from fror frol frus frum frur frul gras gram grar gral gres grem grer grel gris grim grir gril gros grom gror grol grus grum grur grul lhas lham lhar lhal lhes lhem lher lhel lhis lhim lhir lhil lhos lhom lhor lhol lhus lhum lhur lhul nhas nham nhar nhal nhes nhem nher nhel nhis nhim nhir nhil nhos nhom nhor nhol nhus nhum nhur nhul pras pram prar pral pres prem prer prel pris prim prir pril pros prom pror prol prus prum prur prul tras tram trar tral tres trem trer trel tris trim trir tril tros trom tror trol trus trum trur trul vras vram vrar vral vres vrem vrer vrel vris vrim vrir vril vros vrom vror vrol vrus vrum vrur vrul blas blam blar blal bles blem bler blel blis blim blir blil blos blom blor blol blus blum blur blul clas clam clar clal cles clem cler clel clis clim clir clil clos clom clor clol clus clum clur clul dlas dlam dlar dlal dles dlem dler dlel dlis dlim dlir dlil dlos dlom dlor dlol dlus dlum dlur dlul flas flam flar flal fles flem fler flel flis flim flir flil flos flom flor flol flus flum flur flul glas glam glar glal gles glem gler glel glis glim glir glil glos glom glor glol glus glum glur glul plas plam plar plal ples plem pler plel plis plim plir plil plos plom plor plol plus plum plur plul tlas tlam tlar tlal tles tlem tler tlel tlis tlim tlir tlil tlos tlom tlor tlol tlus tlum tlur tlul vlas vlam vlar vlal vles vlem vler vlel vlis vlim vlir vlil vlos vlom vlor vlol vlus vlum vlur vlul ar as am an al az ax er es em en el ez ex ir is im in il iz ix or os om on ol oz ox ur us um un ul uz ux qua gua que gue qui gui quo guo quam quan quar quas qual guam guan guar guas gual quem quen quer ques quel guem guen guer gues guel quim quin quir quis quil guim guin guir guis guil quom quon quor quos quol guom guon guor guos guol"

    lista = silabas_string.split()

    return lista

main()
