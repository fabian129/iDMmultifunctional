export interface AuditQuestion {
    id: string;
    category: 'Strategic' | 'Culture' | 'Process' | 'Financial' | 'Experience';
    text: string;
    context: string;
    playbookRef: string;
    weight: number;
}

export const auditQuestions: AuditQuestion[] = [
    // --- PELARE 1: STRATEGY (1-16) ---
    {
        id: 'strat_1',
        category: 'Strategic',
        text: 'Har vi definierat vårt "Wisdom Gap" tydligt mot marknaden?',
        context: 'Säljer ni bara en produkt, eller säljer ni en insikt om ett problem kunden missat?',
        playbookRef: 'PB 01, Kap 1',
        weight: 1
    },
    {
        id: 'strat_2',
        category: 'Strategic',
        text: 'Är vår positionering baserad på auktoritet ("The Architect") snarare än service ("The Vendor")?',
        context: 'En Arkitekt leder och utmanar. En Vendor gör vad kunden ber om (och pressas på pris).',
        playbookRef: 'PB 01, Kap 0',
        weight: 1
    },
    {
        id: 'strat_3',
        category: 'Strategic',
        text: 'Har vi kartlagt "The Chessboard" (Beslutsfattarna) för våra viktigaste affärer?',
        context: 'Vet vi exakt vem som är Economic Buyer, Champion och User? Eller säljer vi till den som svarar?',
        playbookRef: 'PB 01, Kap 1',
        weight: 1
    },
    {
        id: 'strat_4',
        category: 'Strategic',
        text: 'Använder alla säljare en diagnostisk frågemetodik ("The Question Funnel")?',
        context: 'Ställer vi frågor som bygger smärta och värde, eller "pitchar" vi lösningen direkt?',
        playbookRef: 'PB 01, Kap 2',
        weight: 1
    },
    {
        id: 'strat_5',
        category: 'Strategic',
        text: 'Kan alla i säljteamet kvantifiera kundens "Cost of Inaction" (COI)?',
        context: 'Vet säljaren vad det kostar kunden i kronor att inte göra affär med oss?',
        playbookRef: 'PB 01, Kap 3',
        weight: 1
    },
    {
        id: 'strat_6',
        category: 'Strategic',
        text: 'Har vi en definierad ICP (Ideal Customer Profile) som vi vågar säga nej till?',
        context: 'Vet vi vilka vi inte ska sälja till? Att jaga fel kunder är en enorm dold kostnad.',
        playbookRef: 'PB 01, Kap 0',
        weight: 1
    },
    {
        id: 'strat_7',
        category: 'Strategic',
        text: 'Är våra offerter fokuserade på affärsresultat snarare än teknisk specifikation?',
        context: 'Säljer vi "timmar och skruvar" eller säljer vi "lönsamhet och effektivitet"?',
        playbookRef: 'PB 01, Kap 3',
        weight: 1
    },
    {
        id: 'strat_8',
        category: 'Strategic',
        text: 'Har vi en "Authority Story" som differentierar oss utan att nämna pris?',
        context: 'Kan vi berätta vår historia på 2 minuter så att kunden förstår varför vi är unika?',
        playbookRef: 'PB 01, Kap 4',
        weight: 1
    },
    {
        id: 'strat_9',
        category: 'Strategic',
        text: 'Förstår säljarna skillnaden på "Latent Pain" och "Active Pain"?',
        context: 'Vet vi hur vi väcker en kund som inte vet att de har ett problem (Latent)?',
        playbookRef: 'PB 01, Kap 2',
        weight: 1
    },
    {
        id: 'strat_10',
        category: 'Strategic',
        text: 'Har vi tillgång till Economic Buyer i 80 % av våra pågående affärer?',
        context: 'Pratar vi med den som äger budgeten, eller har vi fastnat hos "Gatekeepers"?',
        playbookRef: 'PB 01, Kap 1',
        weight: 1
    },
    {
        id: 'strat_11',
        category: 'Strategic',
        text: 'Är vår "Transformation Bridge" tydlig i säljpresentationen?',
        context: 'Visar vi tydligt förflyttningen från "Kaos" (Nuläge) till "Ordning" (Framtid)?',
        playbookRef: 'PB 01, Kap 3',
        weight: 1
    },
    {
        id: 'strat_12',
        category: 'Strategic',
        text: 'Är strategin dokumenterad och känd av alla, eller sitter den i VD:s huvud?',
        context: 'Om du väcker en säljare kl 03.00, kan de vår strategi?',
        playbookRef: 'PB 01, Kap 5',
        weight: 1
    },
    {
        id: 'strat_13',
        category: 'Strategic',
        text: 'Har vi en strategi för att besegra "Status Quo" (Att kunden gör ingenting)?',
        context: 'Vår största konkurrent är ofta att kunden inte gör något alls. Har vi verktyg för detta?',
        playbookRef: 'PB 01, Kap 3',
        weight: 1
    },
    {
        id: 'strat_14',
        category: 'Strategic',
        text: 'Använder vi "The Value Equation" i våra case?',
        context: 'Bevisar vi ROI genom att visa: (Ökad Intäkt + Minskad Risk) / Tid?',
        playbookRef: 'PB 01, Kap 0',
        weight: 1
    },
    {
        id: 'strat_15',
        category: 'Strategic',
        text: 'Uppdaterar vi vår "DMU Map" (Beslutsfattarkarta) löpande under affären?',
        context: 'Är kartan ett levande dokument i CRM eller en engångsövning?',
        playbookRef: 'PB 01, Kap 1',
        weight: 1
    },
    {
        id: 'strat_16',
        category: 'Strategic',
        text: 'Vågar vi använda "Provocation" för att utmana kundens världsbild?',
        context: 'Är vi snälla och håller med, eller vågar vi säga "Ni har fel" för att skapa värde?',
        playbookRef: 'PB 01, Kap 2',
        weight: 1
    },

    // --- PELARE 2: PEOPLE (17-32) ---
    {
        id: 'peop_17',
        category: 'Culture',
        text: 'Har vi en "Performance Profile" (inte bara arbetsbeskrivning) för varje säljroll?',
        context: 'Har vi definierat exakt vilka resultat (KPI:er) som krävs?',
        playbookRef: 'PB 02, Kap 1',
        weight: 1
    },
    {
        id: 'peop_18',
        category: 'Culture',
        text: 'Använder vi en säljsimulering ("The Filter") vid rekrytering?',
        context: 'Testar vi säljaren i ett skarpt scenario (rollspel) innan anställning?',
        playbookRef: 'PB 02, Kap 1',
        weight: 1
    },
    {
        id: 'peop_19',
        category: 'Culture',
        text: 'Har vi en 20-dagars onboarding-process ("The Rail") som är dokumenterad?',
        context: 'Vet en nyanställd exakt vad de ska göra dag 1-20?',
        playbookRef: 'PB 02, Kap 3',
        weight: 1
    },
    {
        id: 'peop_20',
        category: 'Culture',
        text: 'Mäter vi "Time to Productivity" för nya säljare?',
        context: 'Vet vi hur många månader det tar innan en ny säljare bär sina egna kostnader?',
        playbookRef: 'PB 02, Kap 3',
        weight: 1
    },
    {
        id: 'peop_21',
        category: 'Culture',
        text: 'Har varje säljare ett individuellt Scorecard med både Input- och Output-mål?',
        context: 'Vet säljaren vad som förväntas varje vecka gällande aktiviteter och resultat?',
        playbookRef: 'PB 02, Kap 2',
        weight: 1
    },
    {
        id: 'peop_22',
        category: 'Culture',
        text: 'Genomförs strukturerad "Micro-Coaching" varje vecka?',
        context: 'Får säljarna coachning på specifika färdigheter, inte bara "allmän feedback"?',
        playbookRef: 'PB 02, Kap 4',
        weight: 1
    },
    {
        id: 'peop_23',
        category: 'Culture',
        text: 'Har vi en kultur där vi snabbt agerar på lågpresterare ("Exit Management")?',
        context: 'Vågar vi ta det svåra samtalet när någon inte levererar?',
        playbookRef: 'PB 02, Kap 5',
        weight: 1
    },
    {
        id: 'peop_24',
        category: 'Culture',
        text: 'Är incitamentsmodellerna tydligt kopplade till önskat beteende?',
        context: 'Driver lönen rätt beteende? (T.ex. provision på vinst istället för omsättning).',
        playbookRef: 'PB 04, Kap 2',
        weight: 1
    },
    {
        id: 'peop_25',
        category: 'Culture',
        text: 'Har vi en "Talent Pipeline" (Alltid öppen rekrytering)?',
        context: 'Letar vi säljare innan vi behöver dem ("The Bench")?',
        playbookRef: 'PB 02, Kap 1',
        weight: 1
    },
    {
        id: 'peop_26',
        category: 'Culture',
        text: 'Tränar vi på säljhanterverket regelbundet (rollspel/teori)?',
        context: 'Ser vi sälj som en sport som kräver träning, eller tror vi att man är "född säljare"?',
        playbookRef: 'PB 02, Kap 4',
        weight: 1
    },
    {
        id: 'peop_27',
        category: 'Culture',
        text: 'Vet säljteamet varför de jobbar här (Mission/Vision)?',
        context: 'Finns det en djupare mening som motiverar utöver lönen?',
        playbookRef: 'PB 02, Kap 0',
        weight: 1
    },
    {
        id: 'peop_28',
        category: 'Culture',
        text: 'Är ledarskapet operativt närvarande i affärerna?',
        context: 'Är säljchefen en "Excel-chef" eller en "Spelande tränare"?',
        playbookRef: 'PB 02, Kap 4',
        weight: 1
    },
    {
        id: 'peop_29',
        category: 'Culture',
        text: 'Har vi eliminerat "Passiv Skuggning" under onboardingen?',
        context: 'Tvingas nya säljare vara aktiva direkt, eller går de bara bredvid en senior?',
        playbookRef: 'PB 02, Kap 3',
        weight: 1
    },
    {
        id: 'peop_30',
        category: 'Culture',
        text: 'Krävs en "Certifiering" innan säljaren får ringa kunder?',
        context: 'Måste de klara ett internt test innan vi släpper lös dem på marknaden?',
        playbookRef: 'PB 02, Kap 3',
        weight: 1
    },
    {
        id: 'peop_31',
        category: 'Culture',
        text: 'Är måndagsmötet energigivande (Kick-off) snarare än administrativt?',
        context: 'Får teamet energi eller tappar de energi på veckomötet?',
        playbookRef: 'PB 03, Kap 3',
        weight: 1
    },
    {
        id: 'peop_32',
        category: 'Culture',
        text: 'Rekryterar vi baserat på DNA (Grit/Nyfikenhet) snarare än bara CV?',
        context: 'Testar vi för personlighetsdrag som är svåra att träna upp?',
        playbookRef: 'PB 02, Kap 1',
        weight: 1
    },

    // --- PELARE 3: PROCESS (33-48) ---
    {
        id: 'proc_33',
        category: 'Process',
        text: 'Har vi en definierad och visuell "Lead-to-Cash"-process?',
        context: 'Finns det en karta över hur ett lead blir till pengar?',
        playbookRef: 'PB 03, Kap 1',
        weight: 1
    },
    {
        id: 'proc_34',
        category: 'Process',
        text: 'Är CRM-systemet sanningen (inte Excel eller anteckningsblock)?',
        context: '"Om det inte står i CRM, finns det inte." Är detta lag hos er?',
        playbookRef: 'PB 03, Kap 2',
        weight: 1
    },
    {
        id: 'proc_35',
        category: 'Process',
        text: 'Har vi en strikt mötesrytm ("The Cadence") varje vecka?',
        context: 'Har vi fasta tider för Pipeline Review och Forecast som aldrig bokas av?',
        playbookRef: 'PB 03, Kap 3',
        weight: 1
    },
    {
        id: 'proc_36',
        category: 'Process',
        text: 'Använder vi "Meeting Architecture" (Pre/During/Post) för kundbesök?',
        context: 'Har säljarna en checklista för förberedelse och uppföljning?',
        playbookRef: 'PB 03, Kap 6',
        weight: 1
    },
    {
        id: 'proc_37',
        category: 'Process',
        text: 'Är våra säljsteg i CRM baserade på kundens beteende?',
        context: 'Heter stegen "Offert verifierad av kund" (Kundens aktivitet) snarare än "Offert skickad"?',
        playbookRef: 'PB 03, Kap 2',
        weight: 1
    },
    {
        id: 'proc_38',
        category: 'Process',
        text: 'Har vi tydliga definitioner på MQL och SQL (Leads)?',
        context: 'Vet sälj och marknad exakt vad som krävs för att ett lead ska klassas som kvalificerat?',
        playbookRef: 'PB 03, Kap 1',
        weight: 1
    },
    {
        id: 'proc_39',
        category: 'Process',
        text: 'Skickar vi alltid ett "Summary Email" inom 24h efter kundmöte?',
        context: 'Bekräftar vi skriftligen vad som sades och vad nästa steg är?',
        playbookRef: 'PB 03, Kap 6',
        weight: 1
    },
    {
        id: 'proc_40',
        category: 'Process',
        text: 'Rensar vi regelbundet vår Pipeline ("Data Scrub")?',
        context: 'Tar vi bort gamla/döda affärer så att prognosen är ärlig?',
        playbookRef: 'PB 03, Kap 2',
        weight: 1
    },
    {
        id: 'proc_41',
        category: 'Process',
        text: 'Har vi automatiserat administrativa uppgifter (e-signering, kalenderbokning)?',
        context: 'Använder vi teknik för att frigöra säljtid?',
        playbookRef: 'PB 03, Kap 4',
        weight: 1
    },
    {
        id: 'proc_42',
        category: 'Process',
        text: 'Mäter vi "Sales Velocity" (Hastighet genom tratten)?',
        context: 'Vet vi hur lång tid en snittaffär tar, och jobbar vi för att korta den?',
        playbookRef: 'PB 03, Kap 5',
        weight: 1
    },
    {
        id: 'proc_43',
        category: 'Process',
        text: 'Har vi en "Upfront Contract" (Agenda) i början av varje möte?',
        context: 'Sätter säljaren ramen för mötet direkt för att behålla kontrollen?',
        playbookRef: 'PB 03, Kap 6',
        weight: 1
    },
    {
        id: 'proc_44',
        category: 'Process',
        text: 'Är våra prognoser (Forecasts) träffsäkra (+/- 10%)?',
        context: 'Kan vi lita på siffran säljarna ger för nästa månad?',
        playbookRef: 'PB 03, Kap 3',
        weight: 1
    },
    {
        id: 'proc_45',
        category: 'Process',
        text: 'Använder vi "3x3 Research" inför varje möte?',
        context: 'Hittar säljaren 3 relevanta fakta på 3 minuter innan de kliver in i rummet?',
        playbookRef: 'PB 03, Kap 6',
        weight: 1
    },
    {
        id: 'proc_46',
        category: 'Process',
        text: 'Har vi en "No-Show Protocol" (Bekräftelse innan mötet)?',
        context: 'Skickar vi SMS/Mail 24h innan för att minska risken att kunden uteblir?',
        playbookRef: 'PB 03, Kap 6',
        weight: 1
    },
    {
        id: 'proc_47',
        category: 'Process',
        text: 'Gör vi en regelbunden "Tech Stack Audit"?',
        context: 'Rensar vi bort verktyg och licenser som inte används?',
        playbookRef: 'PB 03, Kap 7',
        weight: 1
    },
    {
        id: 'proc_48',
        category: 'Process',
        text: 'Har vi ett SLA (Service Level Agreement) mellan Sälj och Marknad?',
        context: 'Finns det en deadline för hur snabbt Sälj måste kontakta ett inkommit Lead?',
        playbookRef: 'PB 03, Kap 1',
        weight: 1
    },

    // --- PELARE 4: CASH (49-64) ---
    {
        id: 'cash_49',
        category: 'Financial',
        text: 'Är säljteamet incentiverade på Bruttovinst (TB) snarare än Omsättning?',
        context: 'Betalar vi provision på faktiskt värde (vinst), inte bara volym?',
        playbookRef: 'PB 04, Kap 2',
        weight: 1
    },
    {
        id: 'cash_50',
        category: 'Financial',
        text: 'Använder vi en "Pricing Ladder" (Good-Better-Best) i offerter?',
        context: 'Ger vi kunden alternativ för att undvika ja/nej-beslut?',
        playbookRef: 'PB 04, Kap 1',
        weight: 1
    },
    {
        id: 'cash_51',
        category: 'Financial',
        text: 'Har vi kontroll på vår "Cash Conversion Cycle" (Betalningsvillkor)?',
        context: 'Får vi betalt snabbt, eller agerar vi bank åt våra kunder?',
        playbookRef: 'PB 04, Kap 3',
        weight: 1
    },
    {
        id: 'cash_52',
        category: 'Financial',
        text: 'Räknar vi ut lönsamheten per affär innan vi skickar offerten?',
        context: 'Har säljaren koll på marginalen innan de trycker på sänd?',
        playbookRef: 'PB 04, Kap 5',
        weight: 1
    },
    {
        id: 'cash_53',
        category: 'Financial',
        text: 'Har säljarna mandat att ge rabatt utan motprestation?',
        context: 'Får de sänka priset bara för att "vara snälla"?',
        playbookRef: 'PB 04, Kap 1',
        weight: 1
    },
    {
        id: 'cash_54',
        category: 'Financial',
        text: 'Mäter vi LTV:CAC Ratio (Värde per kund vs Kostnad att köpa kund)?',
        context: 'Vet vi att vi får tillbaka minst 3x pengarna vi lägger på sälj?',
        playbookRef: 'PB 04, Kap 5',
        weight: 1
    },
    {
        id: 'cash_55',
        category: 'Financial',
        text: 'Är våra priser baserade på värde (Value-Based) eller kostnad (Cost-Plus)?',
        context: 'Tar vi betalt för problemet vi löser, eller för timmarna det tar?',
        playbookRef: 'PB 04, Kap 1',
        weight: 1
    },
    {
        id: 'cash_56',
        category: 'Financial',
        text: 'Har vi en accelererande provisionsmodell för topp-presterare?',
        context: 'Tjänar man mer per krona när man slagit budget ("The Kicker")?',
        playbookRef: 'PB 04, Kap 2',
        weight: 1
    },
    {
        id: 'cash_57',
        category: 'Financial',
        text: 'Mäter vi "Gross Margin" per säljare/team varje månad?',
        context: 'Vet vi vilka säljare som är mest lönsamma?',
        playbookRef: 'PB 04, Kap 5',
        weight: 1
    },
    {
        id: 'cash_58',
        category: 'Financial',
        text: 'Har vi en strategi för att flytta engångsintäkter till återkommande (MRR)?',
        context: 'Försöker vi bygga abonnemang/serviceavtal för att öka bolagsvärdet?',
        playbookRef: 'PB 04, Kap 4',
        weight: 1
    },
    {
        id: 'cash_59',
        category: 'Financial',
        text: 'Har vi en "Financial Dashboard" som säljchefen tittar på veckovis?',
        context: 'Styrs sälj av finansiella mätetal eller bara aktivitetsmål?',
        playbookRef: 'PB 04, Kap 5',
        weight: 1
    },
    {
        id: 'cash_60',
        category: 'Financial',
        text: 'Utbildar vi säljarna i grundläggande affärsekonomi ("Financial Literacy")?',
        context: 'Förstår säljarna hur rabatter påverkar sista raden?',
        playbookRef: 'PB 04, Kap 0',
        weight: 1
    },
    {
        id: 'cash_61',
        category: 'Financial',
        text: 'Förstår säljarna "The Discount Death Spiral"?',
        context: 'Vet de hur mycket mer volym de måste sälja för att kompensera 10 % rabatt?',
        playbookRef: 'PB 04, Kap 0',
        weight: 1
    },
    {
        id: 'cash_62',
        category: 'Financial',
        text: 'Har vi en "Payment Terms Matrix"?',
        context: 'Finns det tydliga regler för vilka betalningsvillkor säljaren får godkänna?',
        playbookRef: 'PB 04, Kap 3',
        weight: 1
    },
    {
        id: 'cash_63',
        category: 'Financial',
        text: 'Har vi ett "Walk Away Price" för varje affär?',
        context: 'Vet säljaren när affären är så dålig att vi ska tacka nej?',
        playbookRef: 'PB 04, Kap 5',
        weight: 1
    },
    {
        id: 'cash_64',
        category: 'Financial',
        text: 'Sker regelbunden dialog mellan Säljchef och CFO?',
        context: 'Är finans och sälj synkade eller fiender?',
        playbookRef: 'PB 04, Kap 5',
        weight: 1
    },

    // --- PELARE 5: EXPERIENCE (65-80) ---
    {
        id: 'exp_65',
        category: 'Experience',
        text: 'Har vi ett formaliserat "Handover Protocol" från Sälj till Leverans?',
        context: 'Sker överlämningen sömlöst så att kunden känner sig trygg?',
        playbookRef: 'PB 05, Kap 1',
        weight: 1
    },
    {
        id: 'exp_66',
        category: 'Experience',
        text: 'Mäter vi "Time to First Value" (TTFV)?',
        context: 'Vet vi hur snabbt kunden får ut värde av sin investering efter signatur?',
        playbookRef: 'PB 05, Kap 1',
        weight: 1
    },
    {
        id: 'exp_67',
        category: 'Experience',
        text: 'Har vi en proaktiv "Success Rhythm" (QBR-möten)?',
        context: 'Ringer vi kunden för att hjälpa dem växa (Success) eller bara när det brinner (Support)?',
        playbookRef: 'PB 05, Kap 2',
        weight: 1
    },
    {
        id: 'exp_68',
        category: 'Experience',
        text: 'Mäter vi "Net Revenue Retention" (NRR)?',
        context: 'Vet vi om vår befintliga kundbas växer eller krymper varje år?',
        playbookRef: 'PB 05, Kap 2',
        weight: 1
    },
    {
        id: 'exp_69',
        category: 'Experience',
        text: 'Genomför vi systematisk "White Space Analysis" för merförsäljning?',
        context: 'Har vi kartlagt vad våra befintliga kunder inte köpt av oss än?',
        playbookRef: 'PB 05, Kap 3',
        weight: 1
    },
    {
        id: 'exp_70',
        category: 'Experience',
        text: 'Använder vi NPS (Net Promoter Score) som ett action-verktyg?',
        context: 'Agerar vi direkt när en kund ger betyg (Rescue Call / Referral)?',
        playbookRef: 'PB 05, Kap 4',
        weight: 1
    },
    {
        id: 'exp_71',
        category: 'Experience',
        text: 'Har vi en "Referral Engine" för att be nöjda kunder om introduktioner?',
        context: 'Är rekommendationer satta i system?',
        playbookRef: 'PB 05, Kap 4',
        weight: 1
    },
    {
        id: 'exp_72',
        category: 'Experience',
        text: 'Har vi identifierat och åtgärdat orsakerna till Churn (Kundtapp)?',
        context: 'Vet vi varför kunder lämnar?',
        playbookRef: 'PB 05, Kap 0',
        weight: 1
    },
    {
        id: 'exp_73',
        category: 'Experience',
        text: 'Är säljaren ansvarig för relationen även efter kontraktet är signerat?',
        context: 'Finns det incitament för säljaren att kunden stannar kvar?',
        playbookRef: 'PB 05, Kap 1',
        weight: 1
    },
    {
        id: 'exp_74',
        category: 'Experience',
        text: 'Har vi "Forensic Case Studies" som bevisar ROI för nya kunder?',
        context: 'Har vi dokumenterade bevis (data) på värdet vi skapat för andra?',
        playbookRef: 'PB 05, Kap 4',
        weight: 1
    },
    {
        id: 'exp_75',
        category: 'Experience',
        text: 'Är kundresan designad som en "Bowtie" (Fluga) och inte en Tratt?',
        context: 'Investerar vi i att behålla kunder lika mycket som att skaffa dem?',
        playbookRef: 'PB 05, Kap 0',
        weight: 1
    },
    {
        id: 'exp_76',
        category: 'Experience',
        text: 'Har vi eliminerat "Tystnad" i kundrelationen?',
        context: 'Säkerställer vi att vi hörs av även när det inte finns problem?',
        playbookRef: 'PB 05, Kap 2',
        weight: 1
    },
    {
        id: 'exp_77',
        category: 'Experience',
        text: 'Är Säljaren med de första 10 minuterna på "Kick-off"-mötet?',
        context: 'Gör säljaren en "Edification" av projektledaren för att föra över förtroende?',
        playbookRef: 'PB 05, Kap 1',
        weight: 1
    },
    {
        id: 'exp_78',
        category: 'Experience',
        text: 'Presenteras Upsell som ett "Natural Next Step"?',
        context: 'Är merförsäljning logisk och kontextuell, eller känns den krängig?',
        playbookRef: 'PB 05, Kap 3',
        weight: 1
    },
    {
        id: 'exp_79',
        category: 'Experience',
        text: 'Mäter vi "K-faktorn" (Viral Coefficient)?',
        context: 'Vet vi hur många nya kunder varje befintlig kund genererar åt oss?',
        playbookRef: 'PB 05, Kap 4',
        weight: 1
    },
    {
        id: 'exp_80',
        category: 'Experience',
        text: 'Har vi ett protokoll för "The Rescue Call" (Räddningssamtal)?',
        context: 'Vet vi exakt vad vi ska säga när en kund ger lågt betyg eller vill lämna?',
        playbookRef: 'PB 05, Kap 4',
        weight: 1
    },
];
