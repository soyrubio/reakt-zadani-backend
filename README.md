# Riešenie úlohy

Tu popíšem stručne a vo všeobecnosti moje riešenie zadanej úlohy. Ak mi prišlo vhodné niečo podotknúť v kóde, tak sa menšie poznámky nachádzajú aj tam.

## Backend

Backend som implementoval pomocou Express. Pri backende som narazil na následujúce problémy:

- musel som importovať CORS a povoliť access origin z portu na ktorom beží Nuxtjs, inak mi vyhadzoval frontend chyby
- update a delete operácie pre produkt nie sú funkčné, nakoľko mi nie je úplne jasné ako ich mam identifikovať (chýba mi tam id), operácie by som však implementoval rovnako ako pri /watchModels

Všetky implementované operácie na backende som otestoval pomocou Insomnie. Mimo vyššie spomenutých problémov som s Backendom nemal problém

## Frontend

S frontendom som mal väčší problém, nakoľko by som asi potreboval menšiu chvíľu sa s Nuxtjs zoznámiť. Keďže som s Vuejs priamo ešte nepracoval tak som miestami tápal, najma:

- Najprv som chcel použiť axios na data fetching z backendu, no nevedel som ho integrovať do aplikácie. Keď som pridal @nuxtjs/axios medzi modules v nuxt.config.ts, aplikácia sa ani nenačítala. Keď som použil obyčajný axios, vyhadzoval mi zas chyby samotný js.
- Nie som si istý či správne rozumiem ako funguje state management vo Vuejs
- Mne by dávalo zmysel pri aplikovaní filterov urobiť redirect/pridať fitler query params do aktuálnej url. Ak je môj poznatok správny, tak by som asi ani nevedel ako na to.

Na Vuejs/Nuxtjs musím jednoznačne zapracovať. Nakoľko mám kvôli skúškovému obdobiu menej času tak som do vuejs musel naozaj skôr skočiť bez poriadneho crash course. Verím však že keď budem mať čas sa na vuejs viac pozrieť tak s tým po trochu cviku určite nebudem mať problém.
