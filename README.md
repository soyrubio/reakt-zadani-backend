# Zadání úkolu na pozici backend vývojář
Tento repozitář obsahuje zadání úkolu k vypracování. Kromě menší zkoušky schopností také seznamuje s frameworkem Nuxt, ve kterém pracujeme. Pro splnění úkolu je nutné použít jazyk Javascript nebo Typescript v Node.js.
Pro spuštění je potřeba mít nainstalován Node a NPM.

Složka `/frontend/`obsahuje vytvořený Nuxt projekt. Nejdříve je potřeba instalace `npm install`, poté se projekt spustí pomocí `npm run dev`.  Aplikace by měla být dostupná na http://localhost:3000/ (případně následující volný port).
Všechny požadavky, které zahrnují úpravu frontendu stačí upravit v souboru `/frontend/pages/index.vue`

Soubor `/backend/data.json` obsahuje data, která se mají na webové stránce zobrazit. Slouží pro nás jako taková náhrada databáze. Tento soubor načítej pouze na backendu.

To, co není specifikované, zpracuj podle svého uvážení. Případné dotazy nebo problémy s řešením posílej na sulzer@reakt.cz 

## Požadavky
- Vytvořit ve složce `/backend/` nový Node.js projekt s http serverem (třeba Express, http-server apod.)
- Naprogramovat vhodné API podporující jednoduché CRUD operace pro data z `/backend/data.json`. Autorizace není potřeba. Veškeré editace by se měly propsat do souboru.
- Použít toto API na frontedu pro získání dat o hodinkách a jejich modelech ze serveru. Kód je tam částečně připraven.
- Zprovoznit aplikování filtrů. Samotné filtrování musí probíhat na serveru, **nikoliv na frontendu**.

## Odevzdání
Preferujeme poslat odkaz na kopii repozitáře nebo fork tohoto repozitáře, na email sulzer@reakt.cz. Případně poslat komprimovaný archiv s celým projektem (prosím, bez složek node_modules).
