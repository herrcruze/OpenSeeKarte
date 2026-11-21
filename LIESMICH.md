# Seekarte – Einrichtung

Eine kleine Web-App: GPS-Position, Fahrt und Kurs auf OpenStreetMap mit OpenSeaMap-Seezeichen. Läuft im Handybrowser und lässt sich auf den Startbildschirm legen.

## Online stellen mit GitHub Pages (kostenlos)

1. Konto auf github.com anlegen, dann „New repository“, z. B. Name `seekarte`, Sichtbarkeit „Public“.
2. Im neuen Repository „uploading an existing file“ wählen und den kompletten Inhalt dieses Ordners hochladen (alle Dateien inklusive Ordner `leaflet`). „Commit changes“.
3. Unter „Settings“ → „Pages“ bei „Branch“ `main` und `/ (root)` wählen, speichern.
4. Nach ein bis zwei Minuten ist die App unter `https://DEINNAME.github.io/seekarte/` erreichbar.

## Aufs Handy

- Android (Chrome): Adresse öffnen, Menü → „Zum Startbildschirm hinzufügen“ bzw. „App installieren“.
- iPhone (Safari): Adresse öffnen, Teilen-Symbol → „Zum Home-Bildschirm“.
- Beim ersten Start den Standortzugriff erlauben.

## Vor dem Törn

Die App speichert jede Kartenkachel, die du dir einmal angesehen hast. Also zu Hause im WLAN das Fahrtgebiet in den Zoomstufen durchscrollen, die du unterwegs brauchst (z. B. Übersicht, Revier, Hafeneinfahrten). Ein automatischer Download ganzer Gebiete ist bewusst nicht eingebaut, weil die Kartenserver von OpenStreetMap und OpenSeaMap das in ihren Nutzungsregeln nicht wollen.

## Karte austauschen

Einstellungen → Karten. Dort lassen sich andere Kachel-Adressen eintragen (Format mit `{z}/{x}/{y}`). „Kartenspeicher leeren“ wirft alte Kacheln weg, damit neue geladen werden.

## Gut zu wissen

- iPhone: Safari bekommt kein GPS, wenn der Bildschirm aus ist. Die App hält das Display wach, solange sie offen ist. Powerbank einplanen.
- Der Track wird lokal im Browser gespeichert und lässt sich als GPX exportieren.
- Keine amtliche Seekarte. Tiefen und Seezeichen sind Freiwilligendaten.
