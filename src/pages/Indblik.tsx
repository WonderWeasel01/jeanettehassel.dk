import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import Header from "@/components/Header"

export default function InsightPage() {
  const experiences = [
      {
        periode: "Sep 1990 - Sep 1992",
        virksomhed: "Bay & Vissing A/S",
        stilling: "Konsulent",
        beskrivelse: "Salg og konsulentarbejde"
      },
      {
        periode: "Jun 1993 - Jan 1996",
        virksomhed: "Mostrups Forlag A/S",
        stilling: "Salgsrepræsentant & Salgsstøtte",
        beskrivelse: "Salg og salgsstøtte"
      },
      {
        periode: "Jan 1996 - Jan 2005",
        virksomhed: "Telia Infomedia A/S",
        stilling: "Manager",
        beskrivelse: "Diverse lederstillinger inden for indhold, salgsstøtte, data/produktion, salgssupport og presales"
      },
      {
        periode: "Jan 2005 - Jan 2007",
        virksomhed: "Eniro Danmark A/S",
        stilling: "Production Manager, Maps & Data",
        beskrivelse: "Kortproduktion og behandling af person-, virksomheds-, kommunal- og offentlige data; Kontakt og salg til kommuner; Projektleder for migrering af virksomheds- og persondata i forbindelse med Eniros opkøb af Krak"
      },
      {
        periode: "Jan 2007 - Okt 2009",
        virksomhed: "Eniro Danmark A/S",
        stilling: "Operations Manager, Print",
        beskrivelse: "Ansvarlig for hele værdikæden i Print-divisionen; Indkøb af data; Dataindtastning; Segmentering; Markedsforberedelse; Produktion af annoncer til telefonbøger; Ansvarlig for tryk, distribution og fakturering"
      },
      {
        periode: "Okt 2009 - Mar 2010",
        virksomhed: "Eniro Danmark A/S",
        stilling: "HR Manager / Support & Production Manager",
        beskrivelse: "Indkøb af data, dataindtastning og validering af person-, virksomheds-, kommunal- og offentlige data; Produktion af kort til Kraks Kortbøger og Mostrups Vejviser, Den Røde Lokalbog og Telefonbogen; Ansvarlig for flytning af al print- og kortproduktion for koncernens svenske og norske vejvisere til Danmark; Produktion af online annoncer og infosider på Krak.dk og Eniro.dk; Indkøbsstyring; Forhandling af distributionsaftaler, presseaftaler m.m.; Facility management; Kundeservice; HR-administration; Rekruttering; Medarbejderudvikling"
      },
      {
        periode: "Mar 2010 - Feb 2011",
        virksomhed: "Eniro Danmark A/S",
        stilling: "HR & Operations Director",
        beskrivelse: "Ansvarlig for al HR & drift i Danmark; Ansvarlig for 120 medarbejdere inkl. 14 ledere; Konstitueret landechef og administrerende direktør marts-august 2010; Medlem af ledelsen og Eniro Groups nordiske driftsledelse; Implementering og ledelse af syv større organisationsændringer og afskedigelser; Budgetansvarlig; Reduceret sygefravær; Flyttede Eniro DK fra nr. 50 i 2009 til nr. 29 i 2010 på listen over Danmarks bedste arbejdspladser; Implementering af Spot on Sales; Nedskæring af ca. 40 stillinger; Besparelse på +50 mio. DKK fra 2009 til 2011"
      },
      {
        periode: "Okt 2009 - Jan 2014",
        virksomhed: "Eniro Danmark A/S",
        stilling: "HR Director",
        beskrivelse: "Ansvarlig for al HR og Facility Management i Danmark; Ansvarlig for 12 medarbejdere, heraf 3 ledere; Integration af medarbejdere ifm. opkøb af De Gule Sider og Open AdExchange; Udvikling og implementering af toårig HR-strategi; Ledercoaching; Optimering og organisationsændringer; Rekruttering, Employer Branding og exit-interviews; Talent Management & Succession Planning; Udvikling og implementering af distanceledelseskurser for nordisk lederteam; CSR og miljø; Interne events; HR-administration, ansættelsesret, kontakt til fagforeninger, personalepolitikker; HR-controlling og rapportering; Compensation & Benefits; Insourcing af Facility; Medstifter af arbejdsmiljøorganisationen: Udvikling af sikkerhedspolitikker, mål og medarbejdertræning; Sikring af overholdelse af regler og retningslinjer; Tæt samarbejde mellem ledelse og medarbejderrepræsentanter"
      },
      {
        periode: "Aug 2014 - Dec 2017",
        virksomhed: "Dansk Standard",
        stilling: "HR-direktør",
        beskrivelse: "Ansvarlig for HR og Intern Service for Dansk Standard, Miljømærkning Danmark og ETA Danmark A/S; Direkte reference til CEO og medlem af ledelsen; HR-strategi; Organisationsudvikling; Strategisk kompetenceudvikling; Rekruttering og exit-interviews; Employer Branding; Udvikling og optimering af HR-processer og -politikker; Intern kommunikation; Personalelov; Løn og personalegoder; Ledercoaching; Budgetstyring; Medlem af Dansk Standards miljøgruppe"
      },
      {
        periode: "Aug 2018 - Dec 2024",
        virksomhed: "RealTruck EMEA / Mountain Top",
        stilling: "HR Manager for Danmark, Thailand og Australien",
        beskrivelse: "Etablerede HR-funktionen og optimerede HR-processer og -politikker; Ledede rekruttering og exit-interviews i Danmark, Thailand og Australien; Ansvarlig for HR-drift i flere lande; Overvågede HSE, Facility Management og serviceteam; Udviklede global HR- og bæredygtighedsstrategi; Forbedrede Employer Branding; Ledede organisationsudvikling og reviews; Fokus på diversitet og kulturel integration (styrede 24 nationaliteter i Danmark); Ansvarlig for globale bæredygtighedsindsatser og ISO-standarder; Oprettede bæredygtighedsteam; Bæredygtighedsresultater: 91% genanvendelsesgrad; 29,8% reduktion af kemikalieforbrug; 27% reduktion af elforbrug og 18% reduktion af gasforbrug; 21% reduktion af aluminiumsspild svarende til besparelser på 1,4 mio. DKK i Danmark og 0,7 mio. DKK i Thailand; Deltog i Klima Klar-projektet og udarbejdede to CO2-regnskaber"
      },
      {
        periode: "Jan 2025 - nu",
        virksomhed: "Anlægsgartner Gottlieb A/S",
        stilling: "HR- & Udviklingsdirektør",
        beskrivelse: "Ansvarlig for HR og bæredygtighed; Virksomheden er vokset fra lille lokal anlægsgartner til over 200 ansatte siden 2001; Håndterer alt fra små anlægsopgaver til store entrepriser og kloakprojekter; Rådgivning, entreprise og vedligehold af anlæg; Udfører anlægsopgaver, kloakarbejde, klimatilpasningsprojekter, belægning, jordarbejde og udgravning, trafikdæmpning; Hovedkontor i Skibby med kontorer i Roskilde, Lystrup og Esbjerg; Fokus på kvalitet og rettidig levering"
      }
    ];
  
    

  return (
    <div className="container py-12 pt-24 bg-background">
      <Header/>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Indblik</h1>
            <p className="text-xl text-muted-foreground">Min erhvervserfaring gennem årene</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            <div className="space-y-12 relative">
              {/* Sorter experiences nyeste først */}
              {experiences
                .slice() // lav en kopi
                .sort((a, b) => {
                  // Hent slutdato eller 'nu' for begge
                  const parseDate = (periode) => {
                    if (!periode) return 0;
                    const [start, end] = periode.split(' - ').map(s => s.trim());
                    if (end === 'nu') return new Date(3000, 0).getTime(); // langt ude i fremtiden
                    if (!end) return 0;
                    const [mon, year] = end.split(' ');
                    const month = ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"].indexOf(mon);
                    return month !== -1 && year ? new Date(parseInt(year), month).getTime() : 0;
                  };
                  return parseDate(b.periode) - parseDate(a.periode);
                })
                .map((exp, index) => {
                // Beregn varighed ud fra periode-feltet
                let highlight = "";
                if (exp.periode) {
                  // Eksempel: "Jan 2005 - Jan 2007" eller "Aug 2018 - Dec 2024" eller "Jan 2025 - nu"
                  const [start, end] = exp.periode.split(" - ").map(s => s.trim());
                  const months = (dateStr) => {
                    if (!dateStr) return null;
                    const [mon, year] = dateStr.split(" ");
                    const month = ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"].indexOf(mon);
                    return month !== -1 && year ? new Date(parseInt(year), month) : null;
                  };
                  const startDate = months(start);
                  const isCurrent = end === "nu";
                  const endDate = isCurrent ? new Date() : months(end);
                  if (startDate && endDate) {
                    let diff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
                    const years = Math.floor(diff / 12);
                    const mths = diff % 12;
                    highlight = years > 0 ? `${years} år${mths > 0 ? ` og ${mths} mdr.` : ""}` : `${mths} mdr.`;
                    if (isCurrent) highlight += " (nu)";
                  }
                }
                return (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-primary"></div>
                    <Card className={`relative max-w-lg ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"} shadow-lg`}>
                      <CardHeader className="pb-2">
                        <div className="text-sm text-muted-foreground">{exp.periode}</div>
                        <CardTitle className="text-xl font-serif">{exp.virksomhed}</CardTitle>
                        {highlight && (
                          <div className="inline-block" style={{background:'#9ED196',color:'#00583C',fontWeight:600,padding:'2px 8px',borderRadius:'999px',fontSize:'0.8rem',marginTop:4}}>
                            {highlight}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="font-semibold text-[#00583C]">{exp.stilling}</div>
                        <p className="text-sm">{exp.beskrivelse}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}