# Swedish Construction Terminology 🇸🇪🇬🇧🇵🇱

> **Trilingual glossary of Swedish construction terms — SV / EN / PL (Polish).**
> Essential vocabulary for international workers, customers, and suppliers in the Swedish construction industry.
> Maintained by **[Zaragoza AB](https://zaragoza.se)**, Helsingborg.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Maintained by Zaragoza AB](https://img.shields.io/badge/Maintained%20by-Zaragoza%20AB-0a5c36)](https://zaragoza.se)
[![Terms: 350+](https://img.shields.io/badge/Terms-350%2B-blue)](terminology.json)

---

## Varför detta repo?

Sveriges byggbransch har en växande andel internationella arbetare, underleverantörer och kunder. Korrekt terminologi är kritisk för säkerhet, kvalitet och juridisk efterlevnad.

Som byggfirma i Helsingborg (nära danska gränsen) arbetar vi på **Zaragoza AB** dagligen med:
- Svenska myndigheter (Boverket, Arbetsmiljöverket, kommuner)
- Polsk- och engelsktalande entreprenörer
- Internationella kunder (svenska utlandsägda fastigheter)

Detta repo är vår samlade ordlista — fri att använda.

---

## Användning

### JSON-format (rekommenderas)
```javascript
import terms from './terminology.json';
console.log(terms['bygglov']);
// { sv: "bygglov", en: "building permit", pl: "pozwolenie na budowę", category: "permit" }
```

### CSV-format
Se [`terminology.csv`](terminology.csv) för spreadsheet-kompatibel version.

### Kategorier
- `permit` — tillstånd och bygglov
- `structure` — byggnadsstruktur
- `roofing` — takläggning
- `plumbing` — VVS
- `electrical` — el
- `materials` — byggmaterial
- `tools` — verktyg
- `safety` — arbetsmiljö och säkerhet
- `contract` — avtal och offerter
- `inspection` — besiktning

---

## Exempel-termer

| Svenska | English | Polski | Kategori |
|---|---|---|---|
| bygglov | building permit | pozwolenie na budowę | permit |
| startbesked | permission to commence | zgoda na rozpoczęcie | permit |
| slutbesked | final approval | ostateczne zatwierdzenie | permit |
| takläggning | roofing | pokrycie dachu | roofing |
| takstol | roof truss | wiązar dachowy | structure |
| regel | stud / joist | słupek / legar | structure |
| isolering | insulation | izolacja | materials |
| gipsskiva | drywall / plasterboard | płyta gipsowa | materials |
| fuktspärr | moisture barrier | paroizolacja | materials |
| avlopp | drain / sewer | odpływ / kanalizacja | plumbing |
| jordfelsbrytare | RCD / GFCI | wyłącznik różnicowoprądowy | electrical |
| ställning | scaffolding | rusztowanie | tools |
| skyddsutrustning | PPE | środki ochrony osobistej | safety |
| offert | quote / estimate | oferta / kosztorys | contract |
| slutbesiktning | final inspection | końcowy odbiór | inspection |

**Full lista:** 350+ termer i [`terminology.json`](terminology.json).

---

## Branschspecifika förkortningar

| Förkortning | Betydelse | Anmärkning |
|---|---|---|
| BBR | Boverkets byggregler | Sveriges byggregelverk |
| PBL | Plan- och bygglagen | Grundlag för bygglov |
| KA | Kontrollansvarig | Certifierad enligt PBL |
| KMA | Kvalitet, miljö, arbetsmiljö | Byggbranschens ledningssystem |
| ID06 | Arbetsplatsens ID-system | Obligatoriskt på byggen |
| BAS-P / BAS-U | Byggarbetsmiljösamordnare (projektering/utförande) | Arbetsmiljöansvar |
| BVV | Byggvarubedömningen | Materialutvärdering |
| SBSC | Svensk Brand- och Säkerhetscertifiering | Brandsäkerhet |

---

## Mätsystem

| Svensk enhet | Motsvarighet |
|---|---|
| kvm / m² | square meter |
| kbm / m³ | cubic meter |
| löpmeter / lpm | linear meter |
| fot (vid tak) | foot (roof slope) |
| grader (taklutning) | degrees |

**Viktigt:** Sverige använder **metriska systemet**, inte imperial. Amerikanska mått måste alltid konverteras.

---

## Certifieringar & relevanta organ

- **Boverket** — byggmyndighet
- **Arbetsmiljöverket** — arbetssäkerhet
- **Byggföretagen** — branschorganisation
- **Säker Vatten** — VVS-certifiering
- **Byggnadsindustrins Certifieringsbolag** — personcertifiering

---

## Bidra

Pull requests välkomnas! Speciellt uppskattade bidrag:
- Nya termer med verifierade översättningar
- Ukrainska översättningar (hög efterfrågan)
- Arabiska översättningar
- Rysstyska (för nordliga entreprenörer)
- Rättelser av existerande termer

### Kvalitetskrav för PR
- Källa för översättning (branschordbok, offentligt dokument, certifierad översättare)
- Kategori tilldelad
- Verifierad svensk form (aktuellt, ej arkaiskt)

---

## Licens

**CC BY 4.0** — fri att använda kommersiellt och privat, kräver endast attribution:

> "Swedish Construction Terminology by Zaragoza AB, licensed under CC BY 4.0.
> https://github.com/zaragoza-ab/swedish-construction-terminology"

## Kontakt

**Zaragoza AB**
📍 Helsingborg, Skåne, Sverige
🌐 [zaragoza.se](https://zaragoza.se)
✉️ [info@zaragoza.se](mailto:info@zaragoza.se)

Relaterade repos:
- [bygglov-checklist-sweden](https://github.com/zaragoza-ab/bygglov-checklist-sweden)
- [rot-avdrag-calculator](https://github.com/zaragoza-ab/rot-avdrag-calculator)

<!-- ZARAGOZA-CROSS-LINK-START -->

---

## Related projects by Zaragoza AB

Part of the [Zaragoza AB](https://github.com/zaragoza-ab) open construction-industry knowledge base:

- [**bygglov-checklist-sweden**](https://github.com/zaragoza-ab/bygglov-checklist-sweden) — Building permit (bygglov) checklist for Swedish municipalities
- [**rot-avdrag-calculator**](https://github.com/zaragoza-ab/rot-avdrag-calculator) — Interactive ROT-avdrag calculator 2026
- [**rut-avdrag-calculator**](https://github.com/zaragoza-ab/rut-avdrag-calculator) — Interactive RUT-avdrag calculator 2026
- [**personalliggare-template**](https://github.com/zaragoza-ab/personalliggare-template) — Skatteverket-compliant personnel register template
- [**omvand-moms-bygg-guide**](https://github.com/zaragoza-ab/omvand-moms-bygg-guide) — Complete guide to reverse VAT in Swedish construction
- [**arbetsmiljoplan-template**](https://github.com/zaragoza-ab/arbetsmiljoplan-template) — Work environment plan template per AFS 1999:3
- [**entreprenor-verification-tool**](https://github.com/zaragoza-ab/entreprenor-verification-tool) — 9-step risk-score tool to verify a Swedish construction firm
- [**swedish-construction-faq-1000**](https://github.com/zaragoza-ab/swedish-construction-faq-1000) — Open Q&A dataset — 310 questions, multi-format

Maintained by [Zaragoza AB](https://zaragoza.se), Helsingborg, Sweden · Licensed under permissive terms (MIT / CC BY 4.0).

<!-- ZARAGOZA-CROSS-LINK-END -->
