/* Catálogo compartido de destinos para el panel de imágenes. */
window.TU_GUIA_DESTINOS = {
    calido: {
        playa: {
            america: [
                { id: "cancun", nombre: "Cancún, México", epoca: "Diciembre a Abril (Seco y Cálido)", img: "cancun.png", 
                  lugares: ["Playa Delfines", "Zona Arqueológica de Tulum", "Isla Mujeres", "Xcaret Park", "Cenote Ik Kil"],
                  comida: ["Tacos al Pastor", "Cochinita Pibil", "Sopa Zuper", "Pescado a la Tikin Xic", "Panuchos y Salbutes"],
                  hospedaje: ["Grand Fiesta Americana ($280 USD/noche)", "Hyatt Ziva Cancun ($320 USD/noche)", "Selina Cancun Laguna ($45 USD/noche)", "Hotel Riu Caribe ($210 USD/noche)", "Mayan Monkey Hostel ($35 USD/noche)"] },
                { id: "cartagena", nombre: "Cartagena, Colombia", epoca: "Diciembre a Marzo (Menor pluviosidad)", img: "cartagena.png",
                  lugares: ["Ciudad Amurallada", "Islas del Rosario", "Castillo de San Felipe", "Barrio Getsemaní", "Playa Blanca (Barú)"],
                  comida: ["Cazuela de Mariscos", "Arroz con Coco y Pescado Frito", "Arepa de Huevo", "Patacones con Suero", "Cocadas Cartageneras"],
                  hospedaje: ["Hotel Santa Clara ($350 USD/noche)", "Hotel Charleston Santa Teresa ($300 USD/noche)", "Selina Cartagena ($40 USD/noche)", "Hotel Casa San Agustín ($400 USD/noche)", "Media Luna Hostel ($30 USD/noche)"] },
                { id: "punta_cana", nombre: "Punta Cana, República Dominicana", epoca: "Noviembre a Mayo (Clima tropical ideal)", img: "punta-cana.png",
                  lugares: ["Playa Bávaro", "Isla Saona", "Hoyo Azul (Scape Park)", "Cabo Engaño", "Macao Beach"],
                  comida: ["La Bandera Dominicana", "Mangú con Los Tres Golpes", "Sancocho Dominicano", "Pescado con Coco", "Yaniqueques"],
                  hospedaje: ["Hard Rock Hotel & Casino ($380 USD/noche)", "Excellence Punta Cana ($310 USD/noche)", "Tropical Deluxe Princess ($220 USD/noche)", "Tortuga Bay Hotel ($500 USD/noche)", "Palma Real ApartaHotel ($65 USD/noche)"] }
            ],
            europa: [
                { id: "mallorca", nombre: "Mallorca, España", epoca: "Mayo a Octubre (Verano mediterráneo cálido)", img: "mallorca.png",
                  lugares: ["Cala Agulla", "Catedral de Palma", "Coves del Drach", "Valldemossa", "Playa de Formentor"],
                  comida: ["Ensaimada Mallorquina", "Tumbet", "Sobrasada", "Arroz Brut", "Frit Mallorquí"],
                  hospedaje: ["Castell Son Claret ($450 USD/noche)", "Hotel Cap Rocat ($600 USD/noche)", "HM Balanguera ($120 USD/noche)", "Hostal Corona ($75 USD/noche)", "Iberostar Selection ($250 USD/noche)"] },
                { id: "nice", nombre: "Niza, Francia", epoca: "Junio a Septiembre (Costa Azul soleada)", img: "niza.png",
                  lugares: ["Promenade des Anglais", "Colline du Château", "Vieille Ville (Casco Antiguo)", "Museo Chagall", "Playa de la Ville-Agence"],
                  comida: ["Salade Niçoise", "Ratatouille", "Socca", "La Soupe au Pistou", "Pan Bagnat"],
                  hospedaje: ["Hotel Negresco ($400 USD/noche)", "Anantara Plaza Nice ($350 USD/noche)", "Best Western Plus ($130 USD/noche)", "Hotel Le Royal ($150 USD/noche)", "Meyer Hotel ($90 USD/noche)"] },
                { id: "antalya", nombre: "Antalya, Turquía", epoca: "Mayo a Octubre (Verano en la Riviera turca)", img: "antalya.png",
                  lugares: ["Casco Antiguo (Kaleiçi)", "Puerta de Adriano", "Cascadas Düden", "Playa Konyaaltı", "Ruinas de Aspendos"],
                  comida: ["Kebab turco", "Meze variado", "Pide (Pizza turca)", "Börek", "Baklava"],
                  hospedaje: ["Rixos Downtown Antalya ($200 USD/noche)", "Akra Hotel ($160 USD/noche)", "Kaleiçi Lodge ($70 USD/noche)", "Ramada Plaza ($140 USD/noche)", "Delphin Imperial ($300 USD/noche)"] }
            ],
            asia: [
                { id: "phuket", nombre: "Phuket, Tailandia", epoca: "Noviembre a Abril (Estación seca y templada)", img: "phuket.png",
                  lugares: ["Playa Patong", "Gran Buda de Phuket", "Templo Wat Chalong", "Islas Phi Phi", "Casco antiguo de Phuket"],
                  comida: ["Pad Thai", "Tom Yum Goong", "Green Curry", "Massaman Curry", "Mango Sticky Rice"],
                  hospedaje: ["The Slate Phuket ($220 USD/noche)", "Trisara Villas ($600 USD/noche)", "Lub d Phuket Patong ($40 USD/noche)", "Novotel Phuket ($130 USD/noche)", "Bodega Phuket Party Hostel ($25 USD/noche)"] },
                { id: "bali", nombre: "Bali, Indonesia", epoca: "Abril a Octubre (Temporada seca y soleada)", img: "bali.png",
                  lugares: ["Templo Uluwatu", "Bosque de monos de Ubud", "Terrazas de arroz Tegallalang", "Playas de Seminyak", "Monte Batur"],
                  comida: ["Nasi Goreng", "Babi Guling", "Satay Ayam", "Mie Goreng", "Lawar"],
                  hospedaje: ["Capella Ubud ($550 USD/noche)", "AYANA Resort Bali ($350 USD/noche)", "Kos One Hostel ($30 USD/noche)", "Padma Resort Legian ($200 USD/noche)", "Potato Head Suites ($280 USD/noche)"] },
                { id: "langkawi", nombre: "Langkawi, Malasia", epoca: "Enero a Marzo (Cálido y seco)", img: "langkawi.png",
                  lugares: ["Puente Sky Bridge de Langkawi", "Playa Cenang", "Cascadas Telaga Tujuh", "Teleférico de Langkawi", "Parque Kilim Karst"],
                  comida: ["Nasi Lemak", "Laksa de Langkawi", "Satay malayo", "Roti Canai", "Ikan Bakar"],
                  hospedaje: ["The Datai Langkawi ($450 USD/noche)", "Four Seasons Resort ($600 USD/noche)", "Aloha Motel ($45 USD/noche)", "Pelangi Beach Resort ($180 USD/noche)", "Cenang Plaza Beach Hotel ($70 USD/noche)"] }
            ]
        },
        ciudad: {
            america: [
                { id: "miami", nombre: "Miami, Estados Unidos", epoca: "Noviembre a Abril (Clima cálido sin exceso de humedad)", img: "miami.png",
                  lugares: ["South Beach", "Wynwood Walls", "Little Havana", "Bayside Marketplace", "Vizcaya Museum and Gardens"],
                  comida: ["Sándwich Cubano", "Ceviche peruano-americano", "Stone Crabs", "Key Lime Pie", "Empanadas argentinas"],
                  hospedaje: ["Fontainebleau Miami Beach ($320 USD/noche)", "The Standard Spa ($290 USD/noche)", "Freehand Miami ($50 USD/noche)", "EAST Miami ($270 USD/noche)", "Generator Miami ($40 USD/noche)"] },
                { id: "rio", nombre: "Río de Janeiro, Brasil", epoca: "Diciembre a Marzo (Verano vibrante)", img: "rio-de-janeiro.png",
                  lugares: ["Cristo Redentor", "Pan de Azúcar", "Playa de Copacabana", "Barrio Santa Teresa", "Escalerías Selarón"],
                  comida: ["Feijoada", "Pão de Queijo", "Coxinha", "Moqueca", "Açaí na tigela"],
                  hospedaje: ["Copacabana Palace ($450 USD/noche)", "Hotel Fasano Rio ($500 USD/noche)", "Selina Copacabana ($45 USD/noche)", "Ibis Copacabana ($85 USD/noche)", "Che Lagarto Hostel ($30 USD/noche)"] },
                { id: "medellin", nombre: "Medellín, Colombia", epoca: "Todo el año (Ciudad de la Eterna Primavera cálida)", img: "medellin.png",
                  lugares: ["Comuna 13", "Plaza Botero", "Parque Explora", "Jardín Botánico", "Pueblito Paisa"],
                  comida: ["Bandeja Paisa", "Arepa con Queso", "Sancocho de Gallina", "Mondongo", "Mazamorra"],
                  hospedaje: ["The Click Clack Hotel ($160 USD/noche)", "Hotel Marquee ($180 USD/noche)", "Selina El Poblado ($35 USD/noche)", "Charlee Hotel ($210 USD/noche)", "Poblado Hostel ($25 USD/noche)"] }
            ],
            europa: [
                { id: "sevilla", nombre: "Sevilla, España", epoca: "Marzo a Mayo y Septiembre a Octubre", img: "sevilla.png",
                  lugares: ["Real Alcázar de Sevilla", "Plaza de España", "Catedral y Giralda", "Barrio de Triana", "Parque de María Luisa"],
                  comida: ["Tapas andaluzas", "Pescaíto frito", "Salmorejo", "Rabo de toro", "Montadito de pringá"],
                  hospedaje: ["Hotel Alfonso XIII ($450 USD/noche)", "Gran Melia Colon ($220 USD/noche)", "Oasis Backpackers Hostel ($30 USD/noche)", "Hotel Las Casas de la Judería ($140 USD/noche)", "Ayre Hotel Sevilla ($90 USD/noche)"] },
                { id: "atenas", nombre: "Atenas, Grecia", epoca: "Abril a Junio y Septiembre a Octubre", img: "atenas.png",
                  lugares: ["La Acrópolis y Partenón", "Barrio de Plaka", "Museo de la Acrópolis", "Plaza Sintagma", "Templo de Zeus Olímpico"],
                  comida: ["Musaka", "Souvlaki", "Ensalada Griega (Horiatiki)", "Tzatziki", "Spanakopita"],
                  hospedaje: ["Hotel Grande Bretagne ($380 USD/noche)", "Electra Palace Athens ($210 USD/noche)", "Athens Backpackers ($35 USD/noche)", "Coco-mat Hotel ($160 USD/noche)", "Acropolis View Hotel ($95 USD/noche)"] },
                { id: "roma", nombre: "Roma, Italia", epoca: "Abril a Mayo y Septiembre a Octubre", img: "roma.png",
                  lugares: ["Coliseo Romano", "Fontana di Trevi", "Ciudad del Vaticano", "Panteón de Agripa", "Foro Romano"],
                  comida: ["Pasta Carbonara", "Pizza Romana", "Cacio e Pepe", "Supplì", "Gelato artesanal"],
                  hospedaje: ["Hotel de Russie ($550 USD/noche)", "IQ Hotel Roma ($200 USD/noche)", "The YellowSquare Hostel ($35 USD/noche)", "Hotel Artemide ($240 USD/noche)", "Freedom Love Hostel ($40 USD/noche)"] }
            ],
            asia: [
                { id: "bangkok", nombre: "Bangkok, Tailandia", epoca: "Noviembre a Febrero (Clima más fresco y seco)", img: "bangkok.png",
                  lugares: ["Gran Palacio de Bangkok", "Wat Arun", "Khaosan Road", "Mercado Chatuchak", "Templo del Buda de Esmeralda"],
                  comida: ["Pad Thai callejero", "Som Tum (Ensalada de papaya)", "Mango Sticky Rice", "Tom Kha Gai", "Khao Soi"],
                  hospedaje: ["Mandarin Oriental Bangkok ($400 USD/noche)", "The Standard Bangkok ($250 USD/noche)", "Mad Monkey Hostel Bangkok ($30 USD/noche)", "Lub d Bangkok ($35 USD/noche)", "Chatrium Hotel ($150 USD/noche)"] },
                { id: "singapur", nombre: "Singapur", epoca: "Todo el año (Cálido y tropical)", img: "singapur.png",
                  lugares: ["Marina Bay Sands", "Gardens by the Bay", "Isla Sentosa", "Barrio Chino (Chinatown)", "Calle Orchard"],
                  comida: ["Hainanese Chicken Rice", "Chilli Crab", "Laksa", "Satay", "Roti Prata"],
                  hospedaje: ["Marina Bay Sands ($550 USD/noche)", "The Fullerton Hotel ($380 USD/noche)", "Rucksack Inn ($40 USD/noche)", "Hotel Boss ($120 USD/noche)", "MET A Space Pod ($50 USD/noche)"] },
                { id: "dubai", nombre: "Dubái, Emiratos Árabes", epoca: "Noviembre a Marzo (Invierno cálido y agradable)", img: "dubai.png",
                  lugares: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Zoco de Oro", "Safari en el Desierto"],
                  comida: ["Shawarma", "Hummus y Falafel", "Machboos", "Manousheh", "Luqaimat"],
                  hospedaje: ["Burj Al Arab ($1200 USD/noche)", "Atlantis The Palm ($450 USD/noche)", "Rove Downtown ($110 USD/noche)", "Gevora Hotel ($100 USD/noche)", "At The Top Hostel ($45 USD/noche)"] }
            ]
        }
    },
    templado: {
        america: [
            { id: "buenos_aires", nombre: "Buenos Aires, Argentina", epoca: "Marzo a Mayo y Septiembre a Noviembre", img: "buenos-aires.png",
              lugares: ["Caminito (La Boca)", "Obelisco y Av. 9 de Julio", "Puerto Madero", "Teatro Colón", "Recoleta y su Cementerio"],
              comida: ["Asado argentino", "Empanadas tucumanas", "Milanesa a la napolitana", "Alfajores de dulce de leche", "Choripán"],
              hospedaje: ["Alvear Palace Hotel ($350 USD/noche)", "Faena Hotel Buenos Aires ($300 USD/noche)", "Milhouse Hostel ($35 USD/noche)", "Palladio Hotel Buenos Aires ($180 USD/noche)", "Sileo Hotel ($90 USD/noche)"] },
            { id: "san_francisco", nombre: "San Francisco, Estados Unidos", epoca: "Septiembre a Noviembre (Otoño templado y despejado)", img: "san-francisco.png",
              lugares: ["Puente Golden Gate", "Isla de Alcatraz", "Fisherman's Wharf", "Lombard Street", "Parque Golden Gate"],
              comida: ["Clam Chowder en pan de masa madre", "Dungeness Crab", "Mission Burrito", "Sourdough Bread", "Fortune Cookies"],
              hospedaje: ["Fairmont San Francisco ($320 USD/noche)", "The Ritz-Carlton ($450 USD/noche)", "HI San Francisco City Center ($45 USD/noche)", "Argonaut Hotel ($220 USD/noche)", "Green Tortoise Hostel ($40 USD/noche)"] },
            { id: "bogota", nombre: "Bogotá, Colombia", epoca: "Todo el año (Clima de montaña templado-frío)", img: "bogota.png",
              lugares: ["Cerro de Monserrate", "Museo del Oro", "La Candelaria", "Plaza de Bolívar", "Jardín Botánico de Bogotá"],
              comida: ["Ajiaco Santafereño", "Chocolate con queso y almojábana", "Tamal bogotano", "Fritanga", "Obleas con arequipe"],
              hospedaje: ["Four Seasons Hotel Bogotá ($300 USD/noche)", "W Bogotá ($250 USD/noche)", "Selina La Candelaria ($35 USD/noche)", "Hotel bh Bicentenario ($80 USD/noche)", "Republica Hostel ($25 USD/noche)"] }
        ],
        europa: [
            { id: "londres", nombre: "Londres, Reino Unido", epoca: "Mayo a Septiembre (Temperaturas moderadas)", img: "londres.png",
              lugares: ["Big Ben y Palacio de Westminster", "London Eye", "Torre de Londres", "Museo Británico", "Hyde Park"],
              comida: ["Fish and Chips", "English Breakfast", "Sunday Roast", "Pie and Mash", "Sticky Toffee Pudding"],
              hospedaje: ["The Ritz London ($600 USD/noche)", "The Savoy ($550 USD/noche)", "Clink78 Hostel ($35 USD/noche)", "CitizenM Tower of London ($180 USD/noche)", "Palmers Lodge Swiss Cottage ($40 USD/noche)"] },
            { id: "paris", nombre: "París, Francia", epoca: "Abril a Junio y Octubre a Noviembre", img: "paris.png",
              lugares: ["Torre Eiffel", "Museo del Louvre", "Catedral de Notre-Dame", "Arco del Triunfo", "Avenida de los Campos Elíseos"],
              comida: ["Croissant y Baguette", "Coq au Vin", "Macarons", "Soupe à l'oignon", "Crêpes suzette"],
              hospedaje: ["Le Meurice ($700 USD/noche)", "Hotel Plaza Athénée ($800 USD/noche)", "St Christopher's Inn Paris ($40 USD/noche)", "Hotel Caron de Beaumarchais ($220 USD/noche)", "Generator Paris ($45 USD/noche)"] },
            { id: "oporto", nombre: "Oporto, Portugal", epoca: "Mayo a Septiembre (Templado y soleado)", img: "oporto.png",
              lugares: ["Puente Don Luis I", "Librería Lello", "Torre de los Clérigos", "Ribeira de Oporto", "Bodegas de Vino de Oporto"],
              comida: ["Francesinha", "Bacalhau à Brás", "Pastéis de Nata", "Tripas à Moda do Porto", "Caldo Verde"],
              hospedaje: ["The Yeatman ($350 USD/noche)", "InterContinental Porto ($250 USD/noche)", "The House of Sandeman Hostel ($35 USD/noche)", "Hotel Infante Sagres ($160 USD/noche)", "Yes! Porto Hostel ($30 USD/noche)"] }
        ],
        asia: [
            { id: "tokio", nombre: "Tokio, Japón", epoca: "Marzo a Mayo (Floración de cerezos) y Septiembre a Noviembre", img: "tokio.png",
              lugares: ["Cruce de Shibuya", "Templo Sensō-ji", "Torre de Tokio", "Barrio de Shinjuku", "Santuario Meiji"],
              comida: ["Sushi y Sashimi", "Ramen tonkotsu", "Tempura", "Takoyaki", "Matcha wagashi"],
              hospedaje: ["Park Hyatt Tokyo ($500 USD/noche)", "Mandarin Oriental Tokyo ($600 USD/noche)", "Khaosan Tokyo Samurai ($40 USD/noche)", "Hotel Gracery Shinjuku ($180 USD/noche)", "Nui. Hostel & Bar Lounge ($35 USD/noche)"] },
            { id: "seul", nombre: "Seúl, Corea del Sur", epoca: "Marzo a Mayo y Septiembre a Noviembre", img: "seul.png",
              lugares: ["Palacio Gyeongbokgung", "Torre N de Seúl", "Barrio Myeongdong", "Aldea Hanok de Bukchon", "Río Han"],
              comida: ["Barbacoa Coreana (Samgyeopsal)", "Tteokbokki", "Kimchi Jjigae", "Bibimbap", "Bingsu"],
              hospedaje: ["Signiel Seoul ($450 USD/noche)", "Four Seasons Hotel Seoul ($400 USD/noche)", "Kimchee Sinchon Guesthouse ($30 USD/noche)", "L7 Myeongdong ($150 USD/noche)", "ZzzIP Guesthouse ($35 USD/noche)"] },
            { id: "kioto", nombre: "Kioto, Japón", epoca: "Marzo a Mayo y Octubre a Noviembre", img: "kioto.png",
              lugares: ["Bosque de Bambú de Arashiyama", "Fushimi Inari-taisha", "Pabellón Dorado (Kinkaku-ji)", "Barrio Gion", "Templo Kiyomizu-dera"],
              comida: ["Kaiseki ryōri", "Tofu de Kioto (Yudofu)", "Matcha parfait", "Tsukemono", "Soba noodles"],
              hospedaje: ["The Ritz-Carlton Kyoto ($700 USD/noche)", "Aman Kyoto ($1200 USD/noche)", "Piece Hostel Kyoto ($35 USD/noche)", "Hotel Granvia Kyoto ($160 USD/noche)", "Khaosan Kyoto Theater ($30 USD/noche)"] }
        ]
    },
    frio: {
        america: [
            { id: "bariloche", nombre: "San Carlos de Bariloche, Argentina", epoca: "Junio a Septiembre (Temporada de nieve y esquí)", img: "san-carlos-de-bariloche.png",
              lugares: ["Cerro Catedral", "Circuito Chico", "Centro Cívico", "Cerro Campanario", "Isla Victoria y Bosque de Arrayanes"],
              comida: ["Cordero patagónico", "Fondue de queso", "Chocolate artesanal de Bariloche", "Trucha ahumada", "Cerveza artesanal patagónica"],
              hospedaje: ["Llao Llao Resort ($400 USD/noche)", "Arelauquen Lodge ($280 USD/noche)", "Selina Bariloche ($35 USD/noche)", "Design Suites Bariloche ($210 USD/noche)", "Penthouse 1004 Hostel ($30 USD/noche)"] },
            { id: "ushuaia", nombre: "Ushuaia, Argentina", epoca: "Noviembre a Marzo (Verano austral frío) / Invierno para nieve", img: "ushuaia.png",
              lugares: ["Parque Nacional Tierra del Fuego", "Canal Beagle y Faro Les Eclaireurs", "Tren del Fin del Mundo", "Glaciar Martial", "Museo del Fin del Mundo"],
              comida: ["Centolla fueguina", "Cordero fueguino al palo", "Merluza negra", "Calafate sour", "Empanadas de cordero"],
              hospedaje: ["Los Cauquenes Resort ($350 USD/noche)", "Arakur Ushuaia Resort ($300 USD/noche)", "Antartica Hostel ($35 USD/noche)", "Las Hayas Ushuaia Resort ($220 USD/noche)", "Yak Ushuaia Hostel ($28 USD/noche)"] },
            { id: "quebec", nombre: "Quebec, Canadá", epoca: "Diciembre a Marzo (Invierno nevado mágico)", img: "quebec.png",
              lugares: ["Vieille Québec (Ciudad amurallada)", "Fairmont Le Château Frontenac", "Cataratas Montmorency", "Plaza Royal", "Planes de Abraham"],
              comida: ["Poutine", "Tourtière (Pastel de carne)", "Jarabe de arce (Maple syrup)", "Pouding chômeur", "Fèves au lard"],
              hospedaje: ["Fairmont Le Château Frontenac ($380 USD/noche)", "Auberge Saint-Antoine ($300 USD/noche)", "Auberge Internationale de Québec ($35 USD/noche)", "Hotel Le Saint-Pierre ($200 USD/noche)", "HI Quebec Hostel ($32 USD/noche)"] }
        ],
        europa: [
            { id: "reikiavik", nombre: "Reikiavik, Islandia", epoca: "Octubre a Marzo (Auroras boreales y frío polar)", img: "reikiavik.png",
              lugares: ["Iglesia Hallgrímskirkja", "Harpa Concert Hall", "Círculo Dorado", "Laguna Azul (Blue Lagoon)", "Calle Laugavegur"],
              comida: ["Sopa de cordero islandés (Kjötsúpa)", "Hot dog islandés (Bæjarins Beztu Pylsur)", "Pescado seco (Harðfiskur)", "Hákarl (Tiburón fermentado)", "Skyr"],
              hospedaje: ["The Reykjavik Edition ($450 USD/noche)", "Fosshotel Reykjavik ($180 USD/noche)", "Kex Hostel ($40 USD/noche)", "Hotel Borg ($220 USD/noche)", "Loft Hostel ($45 USD/noche)"] },
            { id: "oslo", nombre: "Oslo, Noruega", epoca: "Noviembre a Marzo (Invierno nórdico)", img: "oslo.png",
              lugares: ["Ópera de Oslo", "Museo Munch", "Parque de Vigeland", "Fortaleza de Akershus", "Museo de barcos vikingos"],
              comida: ["Salmón noruego (Laks)", "Brunost (Queso marrón)", "Fårikål", "Kjøttkaker", "Lapskaus"],
              hospedaje: ["The Thief ($400 USD/noche)", "Grand Hotel Oslo ($280 USD/noche)", "Anker Hostel ($40 USD/noche)", "Radisson Blu Plaza ($160 USD/noche)", "Rica City Hotel ($110 USD/noche)"] },
            { id: "rovaniemi", nombre: "Rovaniemi, Finlandia", epoca: "Diciembre a Febrero (Laponia y Papá Noel)", img: "rovaniemi.png",
              lugares: ["Aldea de Papá Noel (Santa Claus Village)", "Círculo Polar Ártico", "Museo Arktikum", "Excursión en trineo de huskies", "Igles de hielo"],
              comida: ["Salteado de reno (Poronkäristys)", "Lohikeitto (Sopa de salmón)", "Leipäjuusto", "Mustikkapiirakka", "Sämpylä"],
              hospedaje: ["Arctic TreeHouse Hotel ($500 USD/noche)", "Santa Claus Igloos ($600 USD/noche)", "Café & Hostel Koti ($45 USD/noche)", "Arctic Light Hotel ($250 USD/noche)", "Hostel Ibedaround ($35 USD/noche)"] }
        ],
        asia: [
            { id: "sapporo", nombre: "Sapporo, Japón", epoca: "Diciembre a Febrero (Festival de la Nieve y esquí)", img: "sapporo.png",
              lugares: ["Parque Odori", "Torre de Televisión de Sapporo", "Museo de la Cerveza de Sapporo", "Estación de esquí Teine", "Mercado Nijo"],
              comida: ["Ramen de Sapporo (Miso Ramen)", "Sopa Curry (Soup Curry)", "Cangrejo de Hokkaido (Kani)", "Jingisukan (Cordero a la parrilla)", "Shiroi Koibito"],
              hospedaje: ["JR Tower Hotel Nikko Sapporo ($200 USD/noche)", "The Royal Park Canvas ($140 USD/noche)", "Tento Ten Sapporo Station Hostel ($30 USD/noche)", "Keio Plaza Hotel Sapporo ($160 USD/noche)", "Wise Owl Hostels Sapporo ($35 USD/noche)"] },
            { id: "harbin", nombre: "Harbin, China", epoca: "Diciembre a Enero (Festival Internacional de Esculturas de Hielo)", img: "harbin.png",
              lugares: ["Mundo de Hielo y Nieve de Harbin", "Calle Central (Zhongyang Street)", "Catedral de Santa Sofía", "Parque de la Ribera del Río Songhua", "Tigre Park"],
              comida: ["Salchicha ahumada de Harbin", "Guobaorou (Cerdo agridulce crujiente)", "Dumplings de Harbin (Jiaozi)", "Oso de hielo helado", "Brochetas Tanghulu"],
              hospedaje: ["Shangri-La Harbin ($180 USD/noche)", "Kempinski Hotel Harbin ($160 USD/noche)", "Harbin International Youth Hostel ($30 USD/noche)", "Sofitel Harbin ($140 USD/noche)", "Harbin Central Street Hostel ($28 USD/noche)"] },
            { id: "ulan_bator", nombre: "Ulán Bator, Mongolia", epoca: "Noviembre a Febrero (Invierno estepario extremo)", img: "ulan-bator.png",
              lugares: ["Plaza de Sukhbaatar", "Monumento a Zaisan", "Monasterio Gandantegchinlen", "Parque Nacional Terelj", "Museo Nacional de Mongolia"],
              comida: ["Buuz (Dumplings al vapor)", "Khuushuur", "Boodog", "Suutei Tsai (Té con leche salada)", "Airag"],
              hospedaje: ["Shangri-La Ulaanbaatar ($220 USD/noche)", "Kempinski Hotel Khan Palace ($180 USD/noche)", "UB Guesthouse ($25 USD/noche)", "Blue Sky Hotel ($150 USD/noche)", "Sunpath Mongolia Hostel ($20 USD/noche)"] }
        ]
    }
};
