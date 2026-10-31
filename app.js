// Base de datos completa de destinos turísticos por clima, continente y tipo de ambiente
const baseDatosDestinos = {
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
            { id: "ulán_bator", nombre: "Ulán Bator, Mongolia", epoca: "Noviembre a Febrero (Invierno estepario extremo)", img: "ulan-bator.png",
              lugares: ["Plaza de Sukhbaatar", "Monumento a Zaisan", "Monasterio Gandantegchinlen", "Parque Nacional Terelj", "Museo Nacional de Mongolia"],
              comida: ["Buuz (Dumplings al vapor)", "Khuushuur", "Boodog", "Suutei Tsai (Té con leche salada)", "Airag"],
              hospedaje: ["Shangri-La Ulaanbaatar ($220 USD/noche)", "Kempinski Hotel Khan Palace ($180 USD/noche)", "UB Guesthouse ($25 USD/noche)", "Blue Sky Hotel ($150 USD/noche)", "Sunpath Mongolia Hostel ($20 USD/noche)"] }
        ]
    }
};

// Traducciones de la interfaz (Español, Inglés, Francés)
const traducciones = {
    es: {
        s1_title: "Descubre tu próximo destino",
        s1_subtitle: "Selecciona tu idioma preferido y acepta los términos para comenzar tu experiencia de viaje.",
        s1_lang_label: "Selecciona el Idioma / Select Language",
        s1_habeas_title: "Política de Tratamiento de Datos (Ley 1581 de 2012 - Colombia)",
        s1_habeas_text: "De conformidad con la Ley Estatutaria 1581 de 2012 de Protección de Datos y el Decreto 1377 de 2013, al continuar con la plataforma, autoriza a 'Tu Guía' para la recolección, almacenamiento y uso de los datos de navegación generados en esta sesión con fines estadísticos y de recomendación turística.",
        s1_accept: "He leído y acepto los términos y el tratamiento de datos personales.",
        s1_btn: "Iniciar Experiencia",
        s2_title: "¿Qué clima prefieres para tu viaje?",
        s2_subtitle: "Elige el ambiente térmico ideal para tus próximas vacaciones.",
        s2_warm: "Cálido",
        s2_temperate: "Templado",
        s2_cold: "Frío",
        s_warm_sub_title: "¿Qué ambiente prefieres para tu clima cálido?",
        s_warm_sub_subtitle: "Selecciona entre la brisa del mar o el dinamismo urbano.",
        s_warm_beach: "Playa",
        s_warm_city: "Ciudad",
        s3_title: "Selecciona el Continente",
        s3_subtitle: "Explora los mejores destinos internacionales de acuerdo a tu elección.",
        cont_america: "América",
        cont_europe: "Europa",
        cont_asia: "Asia y Oceanía",
        s4_title: "Elige tu Destino Ideal",
        s4_subtitle: "Selecciona el lugar que deseas visitar en este continente.",
        s5_title: "¿Qué tipo de plan prefieres?",
        s5_subtitle: "Personaliza tu itinerario según tus actividades favoritas.",
        plan_nature: "Planes con Naturaleza",
        plan_nature_desc: "Parques naturales, ecoturismo y paisajes.",
        plan_party: "Plan Fiesta Nocturna",
        plan_party_desc: "Bares, discotecas y vida nocturna vibrante.",
        plan_tour: "Plan Recorrido Turístico",
        plan_tour_desc: "Monumentos, museos y cultura histórica.",
        plan_all: "Todas las anteriores",
        plan_all_desc: "Una experiencia completa sin perderte nada.",
        res_places_title: "5 Lugares Turísticos Recomendados",
        res_food_title: "5 Comidas Típicas a Probar",
        res_hotel_title: "5 Opciones de Hospedaje",
        btn_download_pdf: "Descargar Itinerario en PDF",
        btn_restart: "Nueva Búsqueda",
        txt_back: "Atrás",
        txt_home: "Menú"
    },
    en: {
        s1_title: "Discover your next destination",
        s1_subtitle: "Select your preferred language and accept the terms to start your travel experience.",
        s1_lang_label: "Select Language",
        s1_habeas_title: "Data Protection Policy (Law 1581 of 2012 - Colombia)",
        s1_habeas_text: "In accordance with Statutory Law 1581 of 2012 on Data Protection, by continuing you authorize 'Tu Guía' to collect and process session navigation data for tourist recommendation purposes.",
        s1_accept: "I have read and accept the terms and personal data processing.",
        s1_btn: "Start Experience",
        s2_title: "What climate do you prefer for your trip?",
        s2_subtitle: "Choose the ideal thermal environment for your next vacation.",
        s2_warm: "Warm",
        s2_temperate: "Temperate",
        s2_cold: "Cold",
        s_warm_sub_title: "What environment do you prefer for your warm climate?",
        s_warm_sub_subtitle: "Choose between sea breeze or urban dynamism.",
        s_warm_beach: "Beach",
        s_warm_city: "City",
        s3_title: "Select the Continent",
        s3_subtitle: "Explore the best international destinations according to your choice.",
        cont_america: "Americas",
        cont_europe: "Europe",
        cont_asia: "Asia & Oceania",
        s4_title: "Choose Your Ideal Destination",
        s4_subtitle: "Select the place you want to visit on this continent.",
        s5_title: "What type of plan do you prefer?",
        s5_subtitle: "Customize your itinerary based on your favorite activities.",
        plan_nature: "Nature Plans",
        plan_nature_desc: "Natural parks, ecotourism and landscapes.",
        plan_party: "Nightlife Party Plan",
        plan_party_desc: "Bars, clubs and vibrant nightlife.",
        plan_tour: "Sightseeing Tour Plan",
        plan_tour_desc: "Monuments, museums and historical culture.",
        plan_all: "All of the above",
        plan_all_desc: "A complete experience without missing anything.",
        res_places_title: "5 Recommended Tourist Places",
        res_food_title: "5 Typical Foods to Try",
        res_hotel_title: "5 Accommodation Options",
        btn_download_pdf: "Download Itinerary PDF",
        btn_restart: "New Search",
        txt_back: "Back",
        txt_home: "Menu"
    },
    fr: {
        s1_title: "Découvrez votre prochaine destination",
        s1_subtitle: "Sélectionnez votre langue préférée et acceptez les conditions pour commencer.",
        s1_lang_label: "Sélectionner la langue",
        s1_habeas_title: "Politique de protection des données (Loi 1581 de 2012 - Colombie)",
        s1_habeas_text: "Conformément à la loi sur la protection des données, vous autorisez 'Tu Guía' à traiter les données de navigation pour des recommandations touristiques.",
        s1_accept: "J'ai lu et j'accepte les conditions et le traitement des données personnelles.",
        s1_btn: "Commencer l'expérience",
        s2_title: "Quel climat préférez-vous pour votre voyage?",
        s2_subtitle: "Choisissez l'environnement thermique idéal pour vos prochaines vacances.",
        s2_warm: "Chaud",
        s2_temperate: "Tempéré",
        s2_cold: "Froid",
        s_warm_sub_title: "Quel environnement préférez-vous pour votre climat chaud?",
        s_warm_sub_subtitle: "Choisissez entre brise marine et dynamisme urbain.",
        s_warm_beach: "Plage",
        s_warm_city: "Ville",
        s3_title: "Sélectionnez le Continent",
        s3_subtitle: "Explorez les meilleures destinations internationales selon votre choix.",
        cont_america: "Amériques",
        cont_europe: "Europe",
        cont_asia: "Asie et Océanie",
        s4_title: "Choisissez votre destination idéale",
        s4_subtitle: "Sélectionnez l'endroit que vous souhaitez visiter sur ce continent.",
        s5_title: "Quel type de plan préférez-vous?",
        s5_subtitle: "Personnalisez votre itinéraire selon vos activités préférées.",
        plan_nature: "Plans Nature",
        plan_nature_desc: "Parcs naturels, écotourisme et paysages.",
        plan_party: "Plan Fête Nocturne",
        plan_party_desc: "Bars, discothèques et vie nocturne vibrante.",
        plan_tour: "Plan Visite Touristique",
        plan_tour_desc: "Monuments, musées et culture historique.",
        plan_all: "Tous les ci-dessus",
        plan_all_desc: "Une expérience complète sans rien manquer.",
        res_places_title: "5 Lieux Touristiques Recommandés",
        res_food_title: "5 Plats Typiques à Goûter",
        res_hotel_title: "5 Options d'Hébergement",
        btn_download_pdf: "Télécharger l'Itinéraire PDF",
        btn_restart: "Nouvelle Recherche",
        txt_back: "Retour",
        txt_home: "Menu"
    }
};

// Textos de interfaz de la política (definidos en politica.js)
if (typeof POLITICA !== 'undefined') {
    Object.keys(POLITICA).forEach(l => Object.assign(traducciones[l], POLITICA[l].ui));
}

class TuGuiaApp {
    constructor() {
        this.politicaLeida = false;
        this.currentScreen = 'screen-1';
        this.historyStack = [];
        this.lang = 'es';
        this.estado = {
            clima: null,
            ambienteCalido: null,
            continente: null,
            destinoSeleccionado: null,
            tipoPlan: null
        };
        this.init();
    }

    init() {
        this.actualizarTextosUI();
        this.actualizarNavegacionNav();
        this.iniciarCarrusel();
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') this.cerrarPolitica();
        });
    }

    cambiarIdioma(lang) {
        this.lang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.className = "lang-btn bg-slate-800 text-slate-300 font-medium py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition text-center";
        });
        document.getElementById(`lang-${lang}`).className = "lang-btn bg-blue-600 text-white font-medium py-3 rounded-xl border border-blue-500 transition shadow-lg text-center";
        this.actualizarTextosUI();
    }

    actualizarTextosUI() {
        const t = traducciones[this.lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });
        document.getElementById('txt-back').textContent = t['txt_back'];
        document.getElementById('txt-home').textContent = t['txt_home'];
        this.actualizarTextosPolitica();
    }

    // ---------- Política de tratamiento de datos (ventana flotante) ----------
    actualizarTextosPolitica() {
        if (typeof POLITICA === 'undefined') return;
        const t = traducciones[this.lang];
        const pol = POLITICA[this.lang];
        document.getElementById('pol-titulo').textContent = pol.titulo;
        document.getElementById('pol-subtitulo').textContent = pol.subtitulo;
        document.getElementById('pol-btn-cerrar').textContent = t.pol_close;
        document.getElementById('pol-btn-aceptar').textContent = t.pol_accept;

        const parrafo = txt => txt.startsWith('•')
            ? `<p style="margin-left:1rem;text-indent:-.9rem">${txt}</p>`
            : `<p>${txt}</p>`;
        let html = `<p class="text-slate-200">${pol.intro}</p>`;
        pol.secciones.forEach(sec => {
            html += `<h4>${sec.t}</h4>` + sec.p.map(parrafo).join('');
        });
        html += `<p class="mt-6 pt-4 border-t border-slate-800 text-slate-200 font-medium">${pol.cierre}</p>`;
        document.getElementById('pol-body').innerHTML = html;
        this.actualizarProgresoPolitica();
    }

    abrirPolitica() {
        this.actualizarTextosPolitica();
        const modal = document.getElementById('modal-politica');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        const body = document.getElementById('pol-body');
        body.scrollTop = 0;
        this.actualizarProgresoPolitica();
        body.focus({ preventScroll: true });
    }

    cerrarPolitica() {
        const modal = document.getElementById('modal-politica');
        if (!modal || modal.style.display === 'none') return;
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    onScrollPolitica() {
        this.actualizarProgresoPolitica();
    }

    actualizarProgresoPolitica() {
        // Con la ventana cerrada no hay medidas de scroll válidas: no se evalúa
        if (document.getElementById('modal-politica').style.display === 'none') return;
        const body = document.getElementById('pol-body');
        const t = traducciones[this.lang];
        const max = body.scrollHeight - body.clientHeight;
        const pct = max <= 0 ? 100 : Math.min(100, (body.scrollTop / max) * 100);
        document.getElementById('pol-progreso').style.width = pct + '%';
        // Se habilita "Aceptar" solo al llegar al final (una vez alcanzado, se mantiene)
        if (max <= 0 || body.scrollTop >= max - 6) this.politicaLeida = true;

        const btn = document.getElementById('pol-btn-aceptar');
        const estado = document.getElementById('pol-estado');
        if (this.politicaLeida) {
            btn.disabled = false;
            btn.className = "flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition text-sm cursor-pointer";
            estado.textContent = t.pol_read_ok;
            estado.className = "text-xs text-emerald-400";
        } else {
            btn.disabled = true;
            btn.className = "flex-1 sm:flex-none bg-blue-600/40 cursor-not-allowed text-white/70 font-semibold px-5 py-2.5 rounded-xl transition text-sm";
            estado.textContent = t.pol_scroll_hint;
            estado.className = "text-xs text-slate-400";
        }
    }

    aceptarPolitica() {
        if (!this.politicaLeida) return;
        const check = document.getElementById('check-consent');
        check.checked = true;
        document.getElementById('policy-hint').style.display = 'none';
        this.validarConsentimiento();
        this.cerrarPolitica();
    }

    // Si aún no ha leído la política, la casilla abre la ventana en lugar de marcarse
    clickConsentimiento(e) {
        if (!this.politicaLeida) {
            e.preventDefault();
            this.abrirPolitica();
        }
    }

    // ---------- Carrusel de destinos ----------
    iniciarCarrusel() {
        const track = document.getElementById('carrusel-track');
        if (!track) return;

        const recolectar = (obj, out) => {
            if (Array.isArray(obj)) obj.forEach(d => { if (d && d.id) out.push(d); });
            else if (obj && typeof obj === 'object') Object.values(obj).forEach(v => recolectar(v, out));
            return out;
        };
        const vistos = new Set();
        const destinos = recolectar(baseDatosDestinos, []).filter(d => !vistos.has(d.id) && vistos.add(d.id));

        // Orden aleatorio (Fisher-Yates)
        for (let i = destinos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [destinos[i], destinos[j]] = [destinos[j], destinos[i]];
        }

        const tarjeta = (d, copia) => {
            const k = d.nombre.lastIndexOf(',');
            const ciudad = k > -1 ? d.nombre.slice(0, k).trim() : d.nombre;
            const pais = k > -1 ? d.nombre.slice(k + 1).trim() : '';
            const base = d.img.replace(/\.[^.]+$/, '');
            return `
                <figure class="marquee-card relative overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-slate-800"${copia ? ' aria-hidden="true"' : ''}>
                    <img src="img/thumbs/${base}.jpg" alt="${copia ? '' : d.nombre}" decoding="async" draggable="false"
                         data-full="img/${d.img}"
                         onerror="if(!this.dataset.fb){this.dataset.fb='1';this.src=this.dataset.full;}else{this.onerror=null;this.src='img/fondo.png';}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent"></div>
                    <figcaption class="absolute bottom-3 left-3 right-3 text-left leading-tight">
                        <span class="block text-sm md:text-base font-bold text-white drop-shadow">${ciudad}</span>
                        ${pais ? `<span class="block text-xs text-slate-200/90 mt-0.5"><i class="fa-solid fa-location-dot text-blue-400 mr-1"></i>${pais}</span>` : ''}
                    </figcaption>
                </figure>`;
        };

        // Dos copias seguidas para que el bucle sea continuo
        track.innerHTML = destinos.map(d => tarjeta(d, false)).join('') + destinos.map(d => tarjeta(d, true)).join('');

        // Velocidad constante (~45 px/s) según el ancho real, medido cuando ya cargaron los estilos
        const ajustarVelocidad = () => {
            const mitad = track.scrollWidth / 2;
            if (mitad > 0) track.style.setProperty('--dur', (mitad / 45) + 's');
        };
        ajustarVelocidad();
        window.addEventListener('load', ajustarVelocidad);
    }

    validarConsentimiento() {
        const aceptado = document.getElementById('check-consent').checked;
        const btnStart = document.getElementById('btn-start');
        if (aceptado) {
            btnStart.disabled = false;
            btnStart.className = "bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl transition w-full md:w-auto text-base cursor-pointer";
        } else {
            btnStart.disabled = true;
            btnStart.className = "bg-blue-600/50 cursor-not-allowed text-white font-semibold px-8 py-4 rounded-2xl shadow-xl transition w-full md:w-auto text-base";
        }
    }

    navegarA(screenId, guardarHistorial = true) {
        if (guardarHistorial && this.currentScreen !== screenId) {
            this.historyStack.push(this.currentScreen);
        }
        
        // Ocultar todas las pantallas
        const pantallas = ['screen-1', 'screen-2', 'screen-sub-calido', 'screen-3', 'screen-4', 'screen-5', 'screen-6'];
        pantallas.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });

        // Mostrar pantalla destino
        document.getElementById(screenId).classList.remove('hidden');
        this.currentScreen = screenId;
        this.actualizarNavegacionNav();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    actualizarNavegacionNav() {
        const btnBack = document.getElementById('btn-back');
        const btnHome = document.getElementById('btn-home');
        // En la pantalla de inicio no se muestran "Atrás" ni "Menú"
        const mostrar = this.currentScreen !== 'screen-1';
        btnBack.style.display = mostrar ? '' : 'none';
        btnHome.style.display = mostrar ? '' : 'none';
    }

    retroceder() {
        if (this.historyStack.length > 0) {
            const prevScreen = this.historyStack.pop();
            this.navegarA(prevScreen, false);
        } else {
            this.irMenuPrincipal();
        }
    }

    irMenuPrincipal() {
        this.historyStack = [];
        this.estado = { clima: null, ambienteCalido: null, continente: null, destinoSeleccionado: null, tipoPlan: null };
        document.getElementById('check-consent').checked = false;
        this.politicaLeida = false;
        document.getElementById('policy-hint').style.display = '';
        this.cerrarPolitica();
        this.validarConsentimiento();
        this.navegarA('screen-1', false);
    }

    irPasoClima() {
        this.navegarA('screen-2');
    }

    seleccionarClima(clima) {
        this.estado.clima = clima;
        if (clima === 'calido') {
            this.navegarA('screen-sub-calido');
        } else {
            this.estado.ambienteCalido = null;
            this.navegarA('screen-3');
        }
    }

    seleccionarAmbienteCalido(ambiente) {
        this.estado.ambienteCalido = ambiente;
        this.navegarA('screen-3');
    }

    seleccionarContinente(continente) {
        this.estado.continente = continente;
        this.renderizarDestinos();
        this.navegarA('screen-4');
    }

    renderizarDestinos() {
        const contenedor = document.getElementById('destinos-container');
        contenedor.innerHTML = '';

        let listaDestinos = [];
        if (this.estado.clima === 'calido') {
            listaDestinos = baseDatosDestinos.calido[this.estado.ambienteCalido][this.estado.continente];
        } else {
            listaDestinos = baseDatosDestinos[this.estado.clima][this.estado.continente];
        }

        listaDestinos.forEach(dest => {
            // Carga de imagen local en img/ con respaldo automático si no existe
            const rutaImagenLocal = `img/${dest.img}`;
            const card = document.createElement('div');
            card.className = "bg-slate-800/90 border border-slate-700 hover:border-blue-500 rounded-2xl overflow-hidden shadow-xl transition flex flex-col justify-between group cursor-pointer";
            card.onclick = () => app.seleccionarDestinoFinal(dest);

            card.innerHTML = `
                <div class="h-48 overflow-hidden relative bg-slate-900">
                    <img src="${rutaImagenLocal}" alt="${dest.nombre}" onerror="this.onerror=null; this.src='img/fondo.png';" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                    <span class="absolute bottom-3 left-3 bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">Clima Ideal</span>
                </div>
                <div class="p-5 flex flex-col flex-grow justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2">${dest.nombre}</h3>
                        <p class="text-xs text-slate-300 mb-4"><i class="fa-solid fa-calendar-alt text-blue-400 mr-1.5"></i> ${dest.epoca}</p>
                    </div>
                    <button class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl text-sm transition shadow-md flex items-center justify-center space-x-2">
                        <span>Ver Recomendaciones</span> <i class="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }

    seleccionarDestinoFinal(destinoObj) {
        this.estado.destinoSeleccionado = destinoObj;
        this.navegarA('screen-5');
    }

    seleccionarPlan(tipoPlan) {
        this.estado.tipoPlan = tipoPlan;
        this.poblarResultadosFinales();
        this.navegarA('screen-6');
    }

    poblarResultadosFinales() {
        const dest = this.estado.destinoSeleccionado;
        
        // Badge de clima
        let badgeClimaTexto = `Clima ${this.estado.clima.toUpperCase()}`;
        if (this.estado.clima === 'calido' && this.estado.ambienteCalido) {
            badgeClimaTexto += ` (${this.estado.ambienteCalido.toUpperCase()})`;
        }
        document.getElementById('res-clima-badge').textContent = badgeClimaTexto;
        document.getElementById('res-destino-nombre').textContent = dest.nombre;
        document.getElementById('res-epoca').innerHTML = `<i class="fa-solid fa-calendar-days text-blue-400 mr-2"></i> <span class="font-medium">Época ideal:</span> ${dest.epoca}`;

        // Llenar Lugares
        const gridLugares = document.getElementById('res-lugares-grid');
        gridLugares.innerHTML = '';
        dest.lugares.forEach((lugar, i) => {
            gridLugares.innerHTML += `
                <div class="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl shadow-md flex items-start space-x-3">
                    <span class="w-7 h-7 rounded-xl bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-sm flex-shrink-0">${i+1}</span>
                    <p class="text-slate-200 text-sm font-medium pt-1">${lugar}</p>
                </div>
            `;
        });

        // Llenar Comida
        const gridComida = document.getElementById('res-comida-grid');
        gridComida.innerHTML = '';
        dest.comida.forEach((com, i) => {
            gridComida.innerHTML += `
                <div class="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl shadow-md flex items-start space-x-3">
                    <span class="w-7 h-7 rounded-xl bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-sm flex-shrink-0">${i+1}</span>
                    <p class="text-slate-200 text-sm font-medium pt-1">${com}</p>
                </div>
            `;
        });

        // Llenar Hospedaje
        const gridHotel = document.getElementById('res-hotel-grid');
        gridHotel.innerHTML = '';
        dest.hospedaje.forEach((hotel, i) => {
            gridHotel.innerHTML += `
                <div class="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl shadow-md flex items-start space-x-3">
                    <span class="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm flex-shrink-0">${i+1}</span>
                    <p class="text-slate-200 text-sm font-medium pt-1">${hotel}</p>
                </div>
            `;
        });
    }

    cargarImagen(src) {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => {
                try {
                    const c = document.createElement('canvas');
                    c.width = img.naturalWidth; c.height = img.naturalHeight;
                    c.getContext('2d').drawImage(img, 0, 0);
                    resolve({ url: c.toDataURL('image/png'), w: img.naturalWidth, h: img.naturalHeight });
                } catch (e) { resolve(null); }
            };
            img.onerror = () => resolve(null);
            img.src = src;
        });
    }

    async descargarPDF() {
        const jsPDF = window.jspdf && window.jspdf.jsPDF;
        if (!jsPDF) { window.print(); return; } // respaldo si no cargó la librería
        const d = this.estado.destinoSeleccionado;
        const t = traducciones[this.lang];
        const limpiar = s => String(s)
            .replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[\u2013\u2014]/g, '-')
            .replace(/ı/g, 'i').replace(/İ/g, 'I')
            .split('').map(c => c.charCodeAt(0) > 255 ? c.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : c).join('');

        const doc = new jsPDF({ unit: 'mm', format: 'a4' });
        const W = 210, M = 16, ANCHO = W - M * 2;
        let y = 0;

        // Encabezado azul con logo
        doc.setFillColor(20, 67, 122);
        doc.rect(0, 0, W, 42, 'F');
        const logo = await this.cargarImagen('img/Logo.png');
        let xTexto = M;
        if (logo) {
            const h = 24, w = h * logo.w / logo.h;
            doc.setFillColor(255, 255, 255);
            doc.roundedRect(M, 9, w + 6, h + 4, 3, 3, 'F');
            doc.addImage(logo.url, 'PNG', M + 3, 11, w, h);
            xTexto = M + w + 12;
        }
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold'); doc.setFontSize(18);
        doc.text(doc.splitTextToSize(limpiar(d.nombre), W - xTexto - M), xTexto, 20);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
        doc.text(limpiar(document.getElementById('res-clima-badge').textContent), xTexto, 30);
        y = 54;

        const nuevaPagina = alto => { if (y + alto > 282) { doc.addPage(); y = 20; } };

        // Época
        doc.setTextColor(20, 67, 122); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
        doc.text(limpiar(d.epoca), M, y);
        y += 12;

        const seccion = (titulo, items, rgb) => {
            nuevaPagina(20);
            doc.setFillColor(...rgb); doc.rect(M, y - 5, 2.5, 7, 'F');
            doc.setTextColor(20, 67, 122); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
            doc.text(limpiar(titulo), M + 6, y);
            y += 8;
            doc.setFont('helvetica', 'normal'); doc.setFontSize(11); doc.setTextColor(40, 50, 65);
            items.forEach((it, i) => {
                const lineas = doc.splitTextToSize(limpiar(it), ANCHO - 10);
                nuevaPagina(lineas.length * 5.5 + 2);
                doc.setFont('helvetica', 'bold'); doc.text((i + 1) + '.', M + 2, y);
                doc.setFont('helvetica', 'normal'); doc.text(lineas, M + 10, y);
                y += lineas.length * 5.5 + 2;
            });
            y += 6;
        };
        seccion(t.res_places_title, d.lugares, [26, 122, 184]);
        seccion(t.res_food_title, d.comida, [245, 130, 32]);
        seccion(t.res_hotel_title, d.hospedaje, [16, 160, 110]);

        // Pie en todas las páginas
        const n = doc.getNumberOfPages();
        for (let i = 1; i <= n; i++) {
            doc.setPage(i);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(120, 130, 145);
            doc.text('Tu Guia - Viaja, Explora, Descubre  |  ' + new Date().toLocaleDateString(this.lang) + '  |  ' + i + '/' + n, W / 2, 291, { align: 'center' });
        }
        doc.save('Itinerario_' + d.id + '.pdf');
    }
}

// Inicializar la aplicación globalmente
const app = new TuGuiaApp();