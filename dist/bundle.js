"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var categories=[{id:1e3,name:"Arts & Entertainment",icon:"theatre",categories:[{id:1001,name:"Amusements",icon:"theme_park",categories:[{id:1009,name:"Arcade",icon:"theme_park"},{id:1010,name:"Carousel",icon:"theme_park"},{id:1011,name:"Casino",icon:"theme_park"},{id:1012,name:"Chess",icon:"theme_park"},{id:1013,name:"Dance Hall",icon:"theme_park"},{id:1014,name:"Go Karts",icon:"theme_park"},{id:1015,name:"Pool Hall",icon:"theme_park"},{id:1016,name:"Roller Coaster",icon:"theme_park"},{id:1017,name:"Theme Park",icon:"theme_park"},{id:1018,name:"Tour Provider",icon:"theme_park"},{id:1019,name:"Water Park",icon:"theme_park"}]},{id:1002,name:"Fine Arts",icon:"gallery",categories:[{id:1020,name:"Art Gallery",icon:"gallery"},{id:1021,name:"Public Art",icon:"gallery"}]},{id:1003,name:"Historic",icon:"museum",categories:[{id:1022,name:"Archaeological Site",icon:"museum"},{id:1023,name:"Historic Site",icon:"museum"},{id:1024,name:"Ruins",icon:"museum"}]},{id:1004,name:"Movies",icon:"cinema",categories:[{id:1025,name:"Drive-in Theater",icon:"cinema"},{id:1026,name:"Movie Rental",icon:"cinema"},{id:1060,name:"Movie Theater",icon:"cinema"}]},{id:1005,name:"Museum",icon:"museum",categories:[{id:1028,name:"Art Museum",icon:"museum"},{id:1029,name:"Erotic Museum",icon:"museum"},{id:1030,name:"History Museum",icon:"museum"},{id:1031,name:"Planetarium",icon:"observatory"},{id:1032,name:"Science Museum",icon:"museum"}]},{id:1006,name:"Music",icon:"music",categories:[{id:1033,name:"Amphitheater",icon:"music"},{id:1034,name:"Bandstand",icon:"music"},{id:1035,name:"Concert Hall",icon:"music"},{id:1036,name:"Jazz & Blues",icon:"music"},{id:1037,name:"Opera",icon:"music"},{id:1038,name:"Piano Bar",icon:"music"},{id:1039,name:"Rock Club",icon:"music"},{id:1040,name:"Symphony",icon:"music"}]},{id:1007,name:"Performing Arts",icon:"theatre",categories:[{id:1041,name:"Arts Center",icon:"theatre"},{id:1042,name:"Auditorium",icon:"theatre"},{id:1043,name:"Circus",icon:"theatre"},{id:1044,name:"Comedy Club",icon:"theatre"},{id:1045,name:"Dance",icon:"theatre"},{id:1046,name:"Festival",icon:"theatre"},{id:1047,name:"Performing Arts",icon:"theatre"},{id:1048,name:"Theater",icon:"theatre"}]},{id:1008,name:"Sports",icon:"sports",categories:[{id:1049,name:"Auto Racetrack",icon:"sports"},{id:1050,name:"Baseball Stadium",icon:"baseball"},{id:1051,name:"Basketball Stadium",icon:"basketball"},{id:1052,name:"Bull Ring",icon:"sports"},{id:1053,name:"Dog Racetrack",icon:"sports"},{id:1054,name:"Football Stadium",icon:"sports"},{id:1055,name:"Hockey Arena",icon:"sports"},{id:1056,name:"Horse Racetrack",icon:"sports"},{id:1057,name:"Indoor Arena",icon:"sports"},{id:1058,name:"Soccer Stadium",icon:"soccer"},{id:1059,name:"Tennis Stadium",icon:"sports"}]}]},{id:2e3,name:"Civic",icon:"category-predicate-civic",categories:[{id:2001,name:"Capitol Building",icon:"category-predicate-civic"},{id:2002,name:"City Hall",icon:"category-predicate-civic"},{id:2003,name:"Civic Center",icon:"category-predicate-civic"},{id:2004,name:"Community Center",icon:"category-predicate-civic"},{id:2005,name:"Consulate / Embassy",icon:"category-predicate-civic"},{id:2006,name:"Court House",icon:"courthouse"},{id:2007,name:"Cultural Center",icon:"category-predicate-civic"},{id:2008,name:"Customs House",icon:"category-predicate-civic"},{id:2009,name:"Department of Motor Vehicles",icon:"category-predicate-civic"},{id:2010,name:"Embassy",icon:"category-predicate-civic"},{id:2011,name:"Fire Station",icon:"fire_station"},{id:2012,name:"Government Building",icon:"category-predicate-civic"},{id:2013,name:"Government Office",icon:"category-predicate-civic"},{id:2014,name:"Historic Building",icon:"historical"},{id:2015,name:"Library",icon:"category-predicate-civic"},{id:2016,name:"Military Base",icon:"category-predicate-civic"},{id:2017,name:"Palace",icon:"category-predicate-civic"},{id:2018,name:"Police Station",icon:"police"},{id:2019,name:"Post Box",icon:"post_office"},{id:2020,name:"Post Office",icon:"post_office"},{id:2021,name:"Prison",icon:"category-predicate-civic"},{id:2022,name:"Public Building",icon:"category-predicate-civic"},{id:2023,name:"Ranger Station",icon:"category-predicate-civic"},{id:2024,name:"Register Office",icon:"category-predicate-civic"},{id:2025,name:"State Office Building",icon:"category-predicate-civic"},{id:2026,name:"Town Hall",icon:"category-predicate-civic"}]},{id:3e3,name:"Dining",icon:"restaurant",categories:[{id:3001,name:"Afghan",icon:"restaurant"},{id:3002,name:"African",icon:"restaurant"},{id:3003,name:"Arepa",icon:"restaurant"},{id:3004,name:"Argentinian",icon:"restaurant"},{id:3005,name:"Asian",icon:"restaurant"},{id:3006,name:"Australian",icon:"restaurant"},{id:3007,name:"Austrian",icon:"restaurant"},{id:3008,name:"Bagels",icon:"restaurant"},{id:3009,name:"Bakery",icon:"bakery"},{id:3010,name:"BBQ",icon:"restaurant"},{id:3011,name:"Belarusian",icon:"restaurant"},{id:3012,name:"Belgian",icon:"restaurant"},{id:3013,name:"Bistro",icon:"restaurant"},{id:3014,name:"Bodega",icon:"restaurant"},{id:3015,name:"Bosnian",icon:"restaurant"},{id:3016,name:"Brazilian",icon:"restaurant"},{id:3017,name:"Breakfast",icon:"restaurant"},{id:3018,name:"Brewpub",icon:"restaurant"},{id:3019,name:"British",icon:"restaurant"},{id:3020,name:"Bubble Tea",icon:"restaurant"},{id:3021,name:"Buffet",icon:"restaurant"},{id:3022,name:"Bulgarian",icon:"restaurant"},{id:3023,name:"Burgers",icon:"restaurant"},{id:3024,name:"Burmese",icon:"restaurant"},{id:3025,name:"Burritos",icon:"restaurant"},{id:3026,name:"Cafe",icon:"cafe"},{id:3027,name:"Cafeteria",icon:"restaurant"},{id:3028,name:"Cajun & Creole",icon:"restaurant"},{id:3029,name:"Cambodian",icon:"restaurant"},{id:3030,name:"Cantonese",icon:"restaurant"},{id:3031,name:"Caribbean",icon:"restaurant"},{id:3032,name:"Chinese",icon:"restaurant"},{id:3033,name:"Coffee Shop",icon:"cafe"},{id:3034,name:"Colombian",icon:"restaurant"},{id:3035,name:"Creperie",icon:"restaurant"},{id:3036,name:"Cuban",icon:"restaurant"},{id:3037,name:"Cupcake Shop",icon:"restaurant"},{id:3038,name:"Czech",icon:"restaurant"},{id:3039,name:"Deli",icon:"restaurant"},{id:3040,name:"Dessert Shop",icon:"restaurant"},{id:3041,name:"Dim Sum",icon:"restaurant"},{id:3042,name:"Diner",icon:"restaurant"},{id:3043,name:"Donut Shop",icon:"restaurant"},{id:3044,name:"Dosa",icon:"restaurant"},{id:3045,name:"Dumpling",icon:"restaurant"},{id:3046,name:"Dutch",icon:"restaurant"},{id:3047,name:"Eastern European",icon:"restaurant"},{id:3048,name:"Empanada",icon:"restaurant"},{id:3049,name:"Ethiopian",icon:"restaurant"},{id:3050,name:"Falafel",icon:"restaurant"},{id:3051,name:"Fast Food",icon:"fast_food"},{id:3052,name:"Filipino",icon:"restaurant"},{id:3053,name:"Fish & Chips",icon:"restaurant"},{id:3054,name:"Fondue",icon:"restaurant"},{id:3055,name:"Food Court",icon:"fast_food"},{id:3056,name:"French",icon:"restaurant"},{id:3057,name:"Fried Chicken",icon:"restaurant"},{id:3058,name:"Friterie",icon:"restaurant"},{id:3059,name:"Frozen Yogurt",icon:"ice_cream"},{id:3060,name:"Gastropub",icon:"restaurant"},{id:3061,name:"German",icon:"restaurant"},{id:3062,name:"Gluten-free",icon:"restaurant"},{id:3063,name:"Greek",icon:"restaurant"},{id:3064,name:"Halal",icon:"restaurant"},{id:3065,name:"Hawaiian",icon:"restaurant"},{id:3066,name:"Hong Kong",icon:"restaurant"},{id:3067,name:"Hot Dog",icon:"restaurant"},{id:3068,name:"Hot Pot",icon:"restaurant"},{id:3069,name:"Hungarian",icon:"restaurant"},{id:3070,name:"Ice Cream",icon:"ice_cream"},{id:3071,name:"Indian",icon:"restaurant"},{id:3072,name:"Indian Sweets",icon:"restaurant"},{id:3073,name:"Indonesian",icon:"restaurant"},{id:3074,name:"Irish",icon:"restaurant"},{id:3075,name:"Israeli",icon:"restaurant"},{id:3076,name:"Italian",icon:"restaurant"},{id:3077,name:"Japanese",icon:"restaurant"},{id:3078,name:"Jewish",icon:"restaurant"},{id:3079,name:"Juice Bar",icon:"restaurant"},{id:3080,name:"Kebab",icon:"restaurant"},{id:3081,name:"Korean",icon:"restaurant"},{id:3082,name:"Korean Barbecue",icon:"restaurant"},{id:3083,name:"Latin American",icon:"restaurant"},{id:3084,name:"Lebanese",icon:"restaurant"},{id:3085,name:"Mac & Cheese",icon:"restaurant"},{id:3086,name:"Malaysian",icon:"restaurant"},{id:3087,name:"Mediterranean",icon:"restaurant"},{id:3088,name:"Mexican",icon:"restaurant"},{id:3089,name:"Middle Eastern",icon:"restaurant"},{id:3090,name:"Modern European",icon:"restaurant"},{id:3091,name:"Molecular Gastronomy",icon:"restaurant"},{id:3092,name:"Mongolian",icon:"restaurant"},{id:3093,name:"Moroccan",icon:"restaurant"},{id:3094,name:"New American",icon:"restaurant"},{id:3095,name:"Noodles",icon:"restaurant"},{id:3096,name:"Pakistani",icon:"restaurant"},{id:3097,name:"Pancake House",icon:"restaurant"},{id:3098,name:"Pastry Shop",icon:"restaurant"},{id:3099,name:"Peking Duck",icon:"restaurant"},{id:3100,name:"Persian",icon:"restaurant"},{id:3101,name:"Peruvian",icon:"restaurant"},{id:3102,name:"Pie Shop",icon:"restaurant"},{id:3103,name:"Pizza",icon:"restaurant"},{id:3104,name:"Polish",icon:"restaurant"},{id:3105,name:"Portuguese",icon:"restaurant"},{id:3106,name:"Poutine",icon:"restaurant"},{id:3107,name:"Ramen",icon:"restaurant"},{id:3108,name:"Romanian",icon:"restaurant"},{id:3109,name:"Russian",icon:"restaurant"},{id:3110,name:"Salad Bar",icon:"restaurant"},{id:3111,name:"Salvadoran",icon:"restaurant"},{id:3112,name:"Sandwich Shop",icon:"restaurant"},{id:3113,name:"Satay",icon:"restaurant"},{id:3114,name:"Scandinavian",icon:"restaurant"},{id:3115,name:"Scottish",icon:"restaurant"},{id:3116,name:"Seafood",icon:"restaurant"},{id:3117,name:"Shabu-Shabu",icon:"restaurant"},{id:3118,name:"Slovak",icon:"restaurant"},{id:3119,name:"Smoothies",icon:"restaurant"},{id:3120,name:"Snack",icon:"restaurant"},{id:3121,name:"Soup",icon:"restaurant"},{id:3122,name:"South American",icon:"restaurant"},{id:3123,name:"Southern / Soul Food",icon:"restaurant"},{id:3124,name:"Spanish",icon:"restaurant"},{id:3125,name:"Sri Lankan",icon:"restaurant"},{id:3126,name:"Steak House",icon:"restaurant"},{id:3127,name:"Sushi",icon:"restaurant"},{id:3128,name:"Swiss",icon:"restaurant"},{id:3129,name:"Szechuan",icon:"restaurant"},{id:3130,name:"Tacos",icon:"restaurant"},{id:3131,name:"Taiwanese",icon:"restaurant"},{id:3132,name:"Tapas",icon:"restaurant"},{id:3133,name:"Tatar",icon:"restaurant"},{id:3134,name:"Tea House",icon:"restaurant"},{id:3135,name:"Tex-Mex",icon:"restaurant"},{id:3136,name:"Thai",icon:"restaurant"},{id:3137,name:"Theme",icon:"restaurant"},{id:3138,name:"Tibetan",icon:"restaurant"},{id:3139,name:"Truck Stop",icon:"restaurant"},{id:3140,name:"Turkish",icon:"restaurant"},{id:3141,name:"Ukrainian",icon:"restaurant"},{id:3142,name:"Vegan",icon:"restaurant"},{id:3143,name:"Vegetarian",icon:"restaurant"},{id:3144,name:"Venezuelan",icon:"restaurant"},{id:3145,name:"Vietnamese",icon:"restaurant"},{id:3146,name:"Wings",icon:"restaurant"},{id:3147,name:"Yakitori",icon:"restaurant"}]},{id:4e3,name:"Education",icon:"school",categories:[{id:4001,name:"Adult Education Center",icon:"school"},{id:4002,name:"College Academic Building",icon:"university"},{id:4003,name:"College Administrative Building",icon:"university"},{id:4004,name:"College Bookstore",icon:"university"},{id:4005,name:"College Cafeteria",icon:"university"},{id:4006,name:"College Dormitory / Residence Hall",icon:"university"},{id:4007,name:"College Gym",icon:"university"},{id:4008,name:"College Library",icon:"university"},{id:4009,name:"College Quad",icon:"university"},{id:4010,name:"College Rec Center",icon:"university"},{id:4011,name:"College Theater",icon:"university"},{id:4012,name:"Community College",icon:"university"},{id:4013,name:"Cooking School",icon:"school"},{id:4014,name:"Dance Studio",icon:"school"},{id:4015,name:"Driving School",icon:"school"},{id:4016,name:"Elementary School",icon:"school"},{id:4017,name:"Flight School",icon:"school"},{id:4018,name:"Fraternity House",icon:"university"},{id:4019,name:"High School",icon:"school"},{id:4020,name:"Kindergarten",icon:"kindergarten"},{id:4021,name:"Language School",icon:"school"},{id:4022,name:"Law School",icon:"university"},{id:4023,name:"Medical School",icon:"university"},{id:4024,name:"Middle School",icon:"school"},{id:4025,name:"Music School",icon:"school"},{id:4026,name:"Nursery School",icon:"school"},{id:4027,name:"Preschool",icon:"kindergarten"},{id:4028,name:"Private School",icon:"school"},{id:4029,name:"Religious School",icon:"school"},{id:4030,name:"School",icon:"school"},{id:4031,name:"Sorority House",icon:"university"},{id:4032,name:"Student Center",icon:"university"},{id:4033,name:"Swim School",icon:"school"},{id:4034,name:"University",icon:"university"},{id:4035,name:"Vocational School",icon:"school"}]},{id:5e3,name:"Nightlife",icon:"category-predicate-drink",categories:[{id:5001,name:"Bar",icon:"category-predicate-drink"},{id:5002,name:"Beach Bar",icon:"category-predicate-drink"},{id:5003,name:"Beer Bar",icon:"brewery"},{id:5004,name:"Beer Garden",icon:"brewery"},{id:5005,name:"Brewery",icon:"brewery"},{id:5006,name:"Champagne Bar",icon:"category-predicate-drink"},{id:5007,name:"Cocktail Bar",icon:"category-predicate-drink"},{id:5008,name:"Distillery",icon:"category-predicate-drink"},{id:5009,name:"Dive Bar",icon:"category-predicate-drink"},{id:5010,name:"Gay Bar",icon:"category-predicate-drink"},{id:5011,name:"Hookah Bar",icon:"category-predicate-drink"},{id:5012,name:"Hotel Bar",icon:"category-predicate-drink"},{id:5013,name:"Karaoke",icon:"category-predicate-drink"},{id:5014,name:"Lounge",icon:"category-predicate-drink"},{id:5015,name:"Nightclub",icon:"category-predicate-drink"},{id:5016,name:"Oxygen Bar",icon:"category-predicate-drink"},{id:5017,name:"Pub",icon:"category-predicate-drink"},{id:5018,name:"Sake Bar",icon:"category-predicate-drink"},{id:5019,name:"Speakeasy",icon:"category-predicate-drink"},{id:5020,name:"Sports Bar",icon:"category-predicate-drink"},{id:5021,name:"Strip Club",icon:"category-predicate-drink"},{id:5022,name:"Tiki Bar",icon:"category-predicate-drink"},{id:5023,name:"Whisky Bar",icon:"category-predicate-drink"},{id:5024,name:"Wine Bar",icon:"wine"},{id:5025,name:"Winery",icon:"winery"}]},{id:6e3,name:"Outdoors & Recreation",icon:"category-predicate-nature",categories:[{id:6001,name:"Animals",icon:"zoo",categories:[{id:6008,name:"Aquarium",icon:"aquarium"},{id:6009,name:"Aviary",icon:"zoo"},{id:6010,name:"Petting Zoo",icon:"zoo"},{id:6011,name:"Stables",icon:"zoo"},{id:6012,name:"Zoo",icon:"zoo"}]},{id:6002,name:"Farming",icon:"category-predicate-nature",categories:[{id:6013,name:"Aquatic Farm",icon:"aquarium"},{id:6014,name:"Dairy Farm",icon:"category-predicate-nature"},{id:6015,name:"Farm",icon:"category-predicate-nature"},{id:6016,name:"Livestock Farm",icon:"category-predicate-nature"},{id:6017,name:"Orchard",icon:"category-predicate-nature"},{id:6018,name:"Plant Nursery",icon:"category-predicate-nature"},{id:6019,name:"Poultry Farm",icon:"category-predicate-nature"},{id:6020,name:"Vineyard",icon:"winery"}]},{id:6003,name:"Landmark",icon:"lighthouse",categories:[{id:6021,name:"Bridge",icon:"bridge"},{id:6022,name:"Canyon",icon:"category-predicate-nature"},{id:6023,name:"Castle",icon:"castle"},{id:6024,name:"Cave",icon:"category-predicate-nature"},{id:6025,name:"Cemetery",icon:"cemetery"},{id:6026,name:"City Walls",icon:"monument"},{id:6027,name:"Cliff",icon:"category-predicate-nature"},{id:6028,name:"Dam",icon:"monument"},{id:6029,name:"Dike",icon:"monument"},{id:6030,name:"Dunes",icon:"category-predicate-nature"},{id:6031,name:"Firepit",icon:"category-predicate-nature"},{id:6032,name:"Fortress",icon:"fort"},{id:6033,name:"Fountain",icon:"monument"},{id:6034,name:"Gate",icon:"monument"},{id:6035,name:"Glacier",icon:"category-predicate-nature"},{id:6036,name:"Hot Spring",icon:"hot_spring"},{id:6037,name:"Jetty",icon:"monument"},{id:6038,name:"Lagoon",icon:"category-predicate-nature"},{id:6039,name:"Lake",icon:"category-predicate-nature"},{id:6040,name:"Lighthouse",icon:"lighthouse"},{id:6041,name:"Memorial",icon:"memorial"},{id:6042,name:"Monument",icon:"monument"},{id:6043,name:"Mountain",icon:"peak"},{id:6044,name:"Pagoda",icon:"monument"},{id:6045,name:"Plaza",icon:"monument"},{id:6046,name:"Quarry",icon:"category-predicate-nature"},{id:6047,name:"Rapids",icon:"category-predicate-nature"},{id:6048,name:"Reservoir",icon:"category-predicate-nature"},{id:6049,name:"Scenic View",icon:"viewpoint"},{id:6050,name:"Square",icon:"monument"},{id:6051,name:"Telescope",icon:"monument"},{id:6052,name:"Tour Provider",icon:"attraction"},{id:6053,name:"Tourist Attraction",icon:"attraction"},{id:6054,name:"Tourist Information",icon:"information"},{id:6055,name:"Tower",icon:"tower"},{id:6056,name:"Tunnel",icon:"monument"},{id:6057,name:"UNESCO World Heritage Site",icon:"attraction"},{id:6058,name:"Volcano",icon:"volcano"},{id:6059,name:"Water Tower",icon:"monument"},{id:6060,name:"Waterfall",icon:"category-predicate-nature"},{id:6061,name:"Well",icon:"monument"},{id:6062,name:"Wharf",icon:"marina"}]},{id:6004,name:"Parks",icon:"park",categories:[{id:6063,name:"Battlefield",icon:"park"},{id:6064,name:"Botanical Garden",icon:"garden"},{id:6065,name:"City Park",icon:"park"},{id:6066,name:"Dog Park",icon:"pet"},{id:6067,name:"Forest",icon:"forest"},{id:6068,name:"National Park",icon:"park"},{id:6069,name:"Nature Preserve",icon:"nature_reserve"},{id:6070,name:"Town Common",icon:"park"}]},{id:6005,name:"Recreation",icon:"swimming_area",categories:[{id:6071,name:"Barbecue",icon:"bbq"},{id:6072,name:"Bathing Area",icon:"beach"},{id:6073,name:"Beach",icon:"beach"},{id:6074,name:"Bike Trail",icon:"bicycle_rental_station"},{id:6075,name:"Boat Charter",icon:"marina"},{id:6076,name:"Boat Ramp",icon:"slipway"},{id:6077,name:"Boat Rental",icon:"marina"},{id:6078,name:"Campground",icon:"camp_site"},{id:6079,name:"Disc Golf",icon:"golf_course"},{id:6080,name:"Dive Center",icon:"marina"},{id:6081,name:"Fishing",icon:"marina"},{id:6082,name:"Garden",icon:"garden"},{id:6083,name:"Gun Range",icon:"park"},{id:6084,name:"Laser Tag",icon:"park"},{id:6085,name:"Marina",icon:"marina"},{id:6086,name:"Maze",icon:"park"},{id:6087,name:"Miniature Golf",icon:"golf_course"},{id:6088,name:"Nude Beach",icon:"beach"},{id:6089,name:"Picnic Area",icon:"park"},{id:6090,name:"Playground",icon:"playground"},{id:6091,name:"Rafting",icon:"swimming_area"},{id:6092,name:"Recreational Facility",icon:"recreation_ground"},{id:6093,name:"Roller Skating Rink",icon:"recreation_ground"},{id:6094,name:"RV Park",icon:"park"},{id:6095,name:"Sailing Club",icon:"marina"},{id:6096,name:"Skydiving",icon:"attraction"},{id:6097,name:"Summer Camp",icon:"summer_camp"},{id:6098,name:"Surfing",icon:"swimming_area"},{id:6099,name:"Trail Station",icon:"park"},{id:6100,name:"Water Park",icon:"swimming_area"}]},{id:6006,name:"Snow",icon:"ski",categories:[{id:6101,name:"Ski Lift",icon:"ski"},{id:6102,name:"Ski Rental",icon:"ski"},{id:6103,name:"Ski School",icon:"ski_rental"},{id:6104,name:"Ski Shop",icon:"ski_rental"},{id:6105,name:"Ski Slope",icon:"ski"}]},{id:6007,name:"Sports",icon:"pitch",categories:[{id:6106,name:"Badminton Court",icon:"pitch"},{id:6107,name:"Baseball Field",icon:"pitch"},{id:6108,name:"Basketball Court",icon:"pitch"},{id:6109,name:"Bowling Alley",icon:"bowling_alley"},{id:6110,name:"Boxing Gym",icon:"pitch"},{id:6111,name:"Climbing Gym",icon:"pitch"},{id:6112,name:"Cricket",icon:"pitch"},{id:6113,name:"Cycle Studio",icon:"pitch"},{id:6114,name:"Diet & Weight Loss",icon:"pitch"},{id:6115,name:"Diving Center",icon:"pitch"},{id:6116,name:"Fitness Center",icon:"pitch"},{id:6117,name:"Golf Course",icon:"golf_course"},{id:6118,name:"Golf Driving Range",icon:"golf_course"},{id:6119,name:"Gym",icon:"pitch"},{id:6120,name:"Gymnastics Studio",icon:"pitch"},{id:6121,name:"Hockey Field",icon:"pitch"},{id:6122,name:"Ice Skating Rink",icon:"pitch"},{id:6123,name:"Martial Arts",icon:"pitch"},{id:6124,name:"Paintball Field",icon:"pitch"},{id:6125,name:"Pilates Studio",icon:"pitch"},{id:6126,name:"Playing Field",icon:"pitch"},{id:6127,name:"Rock Climbing",icon:"pitch"},{id:6128,name:"Rugby League",icon:"pitch"},{id:6129,name:"Skate Park",icon:"pitch"},{id:6130,name:"Soccer Field",icon:"pitch"},{id:6131,name:"Sports Center",icon:"sports_centre"},{id:6132,name:"Sports Club",icon:"pitch"},{id:6133,name:"Squash Court",icon:"pitch"},{id:6134,name:"Swimming Pool",icon:"swimming_area"},{id:6135,name:"Tennis Court",icon:"pitch"},{id:6136,name:"Track",icon:"pitch"},{id:6137,name:"Volleyball Court",icon:"pitch"},{id:6138,name:"Yoga Studio",icon:"pitch"}]}]},{id:7e3,name:"Services",icon:"doityourself",categories:[{id:7001,name:"Automotive",icon:"car",categories:[{id:7016,name:"Automobile Dealership",icon:"car"},{id:7017,name:"Automobile Rental",icon:"car"},{id:7018,name:"Automobile Repair",icon:"car_repair"},{id:7019,name:"Boat Sales",icon:"marina"},{id:7020,name:"Car Wash",icon:"car"},{id:7021,name:"EV Charging Station",icon:"car"},{id:7022,name:"Gas Station",icon:"fuel"},{id:7023,name:"Motorcycle Sales",icon:"car"},{id:7024,name:"Recreational Vehicle Sales",icon:"car"}]},{id:7002,name:"Bathing",icon:"toilets",categories:[{id:7025,name:"Bath House",icon:"drinking_water"},{id:7026,name:"Drinking Water",icon:"drinking_water"},{id:7027,name:"Restrooms",icon:"toilets"},{id:7028,name:"Shower",icon:"toilets"}]},{id:7003,name:"Beauty & Spa",icon:"category-namespace-shop_and_service",categories:[{id:7029,name:"Adult",icon:"category-namespace-shop_and_service"},{id:7030,name:"Barber",icon:"category-namespace-shop_and_service"},{id:7031,name:"Beauty Salon",icon:"hairdresser"},{id:7032,name:"Day Spa",icon:"category-namespace-shop_and_service"},{id:7033,name:"Massage",icon:"category-namespace-shop_and_service"},{id:7034,name:"Nail Salon",icon:"category-namespace-shop_and_service"},{id:7035,name:"Piercing Parlor",icon:"category-namespace-shop_and_service"},{id:7036,name:"Sauna / Steam Room",icon:"category-namespace-shop_and_service"},{id:7037,name:"Tanning Salon",icon:"category-namespace-shop_and_service"},{id:7038,name:"Tattoo Parlor",icon:"category-namespace-shop_and_service"}]},{id:7004,name:"Building & Trades",icon:"doityourself",categories:[{id:7039,name:"Carpenter",icon:"doityourself"},{id:7040,name:"Cleaning & Sanitation",icon:"doityourself"},{id:7041,name:"Construction Company",icon:"doityourself"},{id:7042,name:"Electrician",icon:"doityourself"},{id:7043,name:"Equipment Rental",icon:"doityourself"},{id:7044,name:"HVAC Company",icon:"doityourself"},{id:7045,name:"Landfill",icon:"doityourself"},{id:7046,name:"Landscaper",icon:"garden"},{id:7047,name:"Locksmith",icon:"doityourself"},{id:7048,name:"Painting Company",icon:"painter"},{id:7049,name:"Pest Control",icon:"doityourself"},{id:7050,name:"Plumber",icon:"doityourself"},{id:7051,name:"Stonemason",icon:"doityourself"}]},{id:7005,name:"Communications",icon:"newspaper",categories:[{id:7052,name:"Film & Video Production",icon:"newspaper"},{id:7053,name:"Newspaper",icon:"newspaper"},{id:7054,name:"Radio Station",icon:"newspaper"},{id:7055,name:"Recording Studio",icon:"newspaper"},{id:7056,name:"Television Station",icon:"newspaper"}]},{id:7006,name:"Events",icon:"public",categories:[{id:7057,name:"Convention Center",icon:"public"},{id:7058,name:"Event Space",icon:"public"},{id:7059,name:"Exhibition Hall",icon:"public"},{id:7060,name:"Wedding Hall",icon:"public"}]},{id:7007,name:"Health",icon:"hospital",categories:[{id:7061,name:"Acupuncturist",icon:"hospital"},{id:7062,name:"Alternative Medicine",icon:"hospital"},{id:7063,name:"Chiropractor",icon:"hospital"},{id:7064,name:"Clinic",icon:"hospital"},{id:7065,name:"Dentist",icon:"hospital"},{id:7066,name:"Doctor",icon:"hospital"},{id:7067,name:"Emergency Room",icon:"hospital"},{id:7068,name:"Hospice",icon:"hospital"},{id:7069,name:"Hospital",icon:"hospital"},{id:7070,name:"Marijuana Dispensary",icon:"hospital"},{id:7071,name:"Maternity Clinic",icon:"hospital"},{id:7072,name:"Medical Center",icon:"hospital"},{id:7073,name:"Medical Lab",icon:"hospital"},{id:7074,name:"Midwife",icon:"hospital"},{id:7075,name:"Nursing Home",icon:"nursing_home"},{id:7076,name:"Nutritionist",icon:"hospital"},{id:7077,name:"Optometrist",icon:"hospital"},{id:7078,name:"Physical Therapist",icon:"hospital"},{id:7079,name:"Podiatrist",icon:"hospital"},{id:7080,name:"Rehab Center",icon:"hospital"},{id:7081,name:"Therapist",icon:"hospital"},{id:7082,name:"Urgent Care Center",icon:"hospital"},{id:7083,name:"Veterinarian",icon:"hospital"}]},{id:7008,name:"Industrial",icon:"industrial",categories:[{id:7084,name:"Aerospace",icon:"industrial"},{id:7085,name:"Distribution Center",icon:"industrial"},{id:7086,name:"Factory",icon:"industrial"},{id:7087,name:"Industrial Estate",icon:"industrial"},{id:7088,name:"Laboratory",icon:"industrial"},{id:7089,name:"Mining & Drilling",icon:"industrial"},{id:7090,name:"Oil Field",icon:"industrial"},{id:7091,name:"Power Plant",icon:"industrial"},{id:7092,name:"Warehouse",icon:"industrial"},{id:7093,name:"Waste / Recycling Facility",icon:"industrial"},{id:7094,name:"Windmill",icon:"industrial"}]},{id:7009,name:"Money",icon:"bank",categories:[{id:7096,name:"Bank",icon:"bank"},{id:7097,name:"Check Cashing",icon:"bank"},{id:7098,name:"Credit Union",icon:"bank"},{id:7099,name:"Currency Exchange",icon:"bank"},{id:7100,name:"Financial Services",icon:"bank"},{id:7101,name:"Investment Brokerage",icon:"bank"}]},{id:7010,name:"Office",icon:"company",categories:[{id:7102,name:"Accountant",icon:"office"},{id:7103,name:"Advertising Agency",icon:"office"},{id:7104,name:"Animal Shelter",icon:"office"},{id:7105,name:"Architect",icon:"office"},{id:7106,name:"Art & Design Studio",icon:"office"},{id:7107,name:"Art Services",icon:"office"},{id:7108,name:"Art Studio",icon:"office"},{id:7109,name:"Building",icon:"office"},{id:7110,name:"Business Center",icon:"office"},{id:7111,name:"Computer Services",icon:"computer"},{id:7112,name:"Coworking Space",icon:"office"},{id:7113,name:"Detective & Security Services",icon:"office"},{id:7114,name:"Employment Agencies",icon:"office"},{id:7115,name:"Engineering",icon:"office"},{id:7116,name:"Entertainment Service",icon:"office"},{id:7117,name:"Funeral Home",icon:"office"},{id:7118,name:"Hacker Space",icon:"office"},{id:7119,name:"Insurance Agent",icon:"insurance"},{id:7120,name:"Internet Cafe",icon:"office"},{id:7121,name:"Lawyer & Legal Services",icon:"office"},{id:7122,name:"Management & Consulting",icon:"office"},{id:7123,name:"Non-Profit",icon:"office"},{id:7124,name:"Notary",icon:"office"},{id:7125,name:"Political Office",icon:"office"},{id:7126,name:"Printing & Photocopies",icon:"office"},{id:7127,name:"Real Estate Agent",icon:"estate_agent"},{id:7128,name:"Real Estate Services",icon:"estate_agent"},{id:7129,name:"Recruiting Agency",icon:"office"},{id:7130,name:"Research",icon:"computer"},{id:7131,name:"Secretarial Services",icon:"computer"},{id:7132,name:"Surveying",icon:"office"},{id:7133,name:"Tech Startup",icon:"office"},{id:7134,name:"Testing Lab",icon:"office"},{id:7135,name:"Travel Agent",icon:"office"}]},{id:7011,name:"Organization",icon:"public",categories:[{id:7136,name:"Community Association",icon:"public"},{id:7137,name:"Foundation",icon:"public"},{id:7138,name:"Labor Organization",icon:"public"},{id:7139,name:"Membership Organization",icon:"public"},{id:7140,name:"Political Organization",icon:"public"},{id:7141,name:"Professional Association",icon:"public"},{id:7142,name:"Religious Organization",icon:"public"},{id:7143,name:"Social Club",icon:"public"}]},{id:7012,name:"Religious",icon:"place_of_worship",categories:[{id:7144,name:"Buddhist Temple",icon:"place_of_worship"},{id:7145,name:"Church",icon:"place_of_worship"},{id:7146,name:"Confucian Temple",icon:"place_of_worship"},{id:7147,name:"Hindu Temple",icon:"place_of_worship"},{id:7148,name:"Kingdom Hall",icon:"place_of_worship"},{id:7149,name:"Mission",icon:"place_of_worship"},{id:7150,name:"Monastery",icon:"place_of_worship"},{id:7151,name:"Mosque",icon:"place_of_worship"},{id:7152,name:"Religious Center",icon:"place_of_worship"},{id:7153,name:"Shrine",icon:"place_of_worship"},{id:7154,name:"Synagogue",icon:"place_of_worship"},{id:7155,name:"Temple",icon:"place_of_worship"}]},{id:7013,name:"Residential",icon:"hotel",categories:[{id:7156,name:"Assisted Living",icon:"hotel"},{id:7157,name:"Housing Project",icon:"hotel"},{id:7158,name:"Residential Building",icon:"hotel"},{id:7159,name:"Residential Development",icon:"hotel"},{id:7160,name:"Trailer Park",icon:"hotel"}]},{id:7014,name:"Retail",icon:"store",categories:[{id:7161,name:"Astrologer / Psychic",icon:"store"},{id:7162,name:"Bicycle Repair",icon:"bicycle_rental_station"},{id:7163,name:"Dry Cleaner",icon:"dry_cleaning"},{id:7164,name:"Gaming Cafe",icon:"store"},{id:7165,name:"Laundromat",icon:"laundry"},{id:7166,name:"Locksmith",icon:"store"},{id:7167,name:"Lottery Store",icon:"store"},{id:7168,name:"Pet Services",icon:"pet"},{id:7169,name:"Photography Lab",icon:"photographic_laboratory"},{id:7170,name:"Portrait Studio",icon:"photographer"},{id:7171,name:"Repair Shop",icon:"store"},{id:7172,name:"Self-service Laundry",icon:"fashion"},{id:7173,name:"Shoe Repair & Shine",icon:"shoemaker"},{id:7174,name:"Storage",icon:"store"},{id:7175,name:"Tailor",icon:"fashion"}]},{id:7015,name:"Social",icon:"office",categories:[{id:7176,name:"Adult Care",icon:"category-namespace-health"},{id:7177,name:"Child Care",icon:"category-namespace-health"},{id:7178,name:"Emergency Phone",icon:"category-namespace-health"},{id:7179,name:"Emergency Shelter",icon:"category-namespace-health"},{id:7180,name:"Employment Agencies",icon:"office"},{id:7181,name:"Job Training",icon:"office"},{id:7182,name:"Retirement Home",icon:"category-namespace-health"}]}]},{id:8e3,name:"Shopping",icon:"category-predicate-shop",categories:[{id:8001,name:"Adult Shop",icon:"category-predicate-shop"},{id:8002,name:"Antique Store",icon:"category-predicate-shop"},{id:8003,name:"Arts & Crafts Store",icon:"category-predicate-shop"},{id:8004,name:"Automotive Supplies",icon:"category-predicate-shop"},{id:8005,name:"Beauty & Cosmetics",icon:"category-predicate-shop"},{id:8006,name:"Bicycle Store",icon:"bicycle"},{id:8007,name:"Big Box Store",icon:"category-predicate-shop"},{id:8008,name:"Bookstore",icon:"books"},{id:8009,name:"Camera Store",icon:"photographer"},{id:8010,name:"Catalog Store",icon:"category-predicate-shop"},{id:8011,name:"Clothing",icon:"clothes",categories:[{id:8079,name:"Accessories Store",icon:"clothes"},{id:8080,name:"Baby Store",icon:"clothes"},{id:8081,name:"Boutique",icon:"clothes"},{id:8082,name:"Bridal Store",icon:"clothes"},{id:8083,name:"Children's Clothing Store",icon:"clothes"},{id:8084,name:"Lingerie Shop",icon:"clothes"},{id:8085,name:"Men's Clothing Store",icon:"clothes"},{id:8086,name:"Shoe Store",icon:"clothes"},{id:8087,name:"Women's Clothing Store",icon:"clothes"}]},{id:8012,name:"Comic Books",icon:"category-predicate-shop"},{id:8013,name:"Computers & Home Electronics",icon:"computer"},{id:8014,name:"Convenience Store",icon:"category-predicate-shop"},{id:8015,name:"Cosmetics Shop",icon:"category-predicate-shop"},{id:8016,name:"Costume Shop",icon:"category-predicate-shop"},{id:8017,name:"Craft Store",icon:"category-predicate-shop"},{id:8018,name:"Department Store",icon:"department_store"},{id:8019,name:"Dietary & Supplement Shop",icon:"category-predicate-shop"},{id:8020,name:"Discount & Variety Store",icon:"category-predicate-shop"},{id:8021,name:"Duty Free Shop",icon:"category-predicate-shop"},{id:8022,name:"Electronics Store",icon:"category-predicate-shop"},{id:8023,name:"Event Tickets",icon:"category-predicate-shop"},{id:8024,name:"Fabric Store",icon:"category-predicate-shop"},{id:8025,name:"Fishing Supply",icon:"category-predicate-shop"},{id:8026,name:"Flea Market",icon:"category-predicate-shop"},{id:8027,name:"Florist",icon:"florist"},{id:8028,name:"Food & Beverage",icon:"greengrocer",categories:[{id:8088,name:"Bakery",icon:"bakery"},{id:8089,name:"Beer Store",icon:"brewery"},{id:8090,name:"Butcher Shop",icon:"butcher"},{id:8091,name:"Candy Store",icon:"confectionery"},{id:8092,name:"Cheese Shop",icon:"greengrocer"},{id:8093,name:"Chocolate Shop",icon:"confectionery"},{id:8094,name:"Convenience Store",icon:"convenience"},{id:8095,name:"Dairy Store",icon:"greengrocer"},{id:8096,name:"Farmers Market",icon:"greengrocer"},{id:8097,name:"Fish Market",icon:"aquarium"},{id:8098,name:"Fruits & Vegetables",icon:"greengrocer"},{id:8099,name:"Gourmet Shop",icon:"greengrocer"},{id:8100,name:"Grocery",icon:"supermarket"},{id:8101,name:"Health Food Store",icon:"greengrocer"},{id:8102,name:"Herbs & Spices",icon:"greengrocer"},{id:8103,name:"Liquor Store",icon:"liquor"},{id:8104,name:"Pork Store",icon:"greengrocer"},{id:8105,name:"Supermarket",icon:"greengrocer"},{id:8106,name:"Wine Shop",icon:"wine"}]},{id:8029,name:"Frame Shop",icon:"category-predicate-shop"},{id:8030,name:"Gifts & Souvenirs",icon:"gift"},{id:8031,name:"Gourmet Shop",icon:"category-predicate-shop"},{id:8032,name:"Gun Shop",icon:"category-predicate-shop"},{id:8033,name:"Hobby Store",icon:"category-predicate-shop"},{id:8034,name:"Home & Garden",icon:"doityourself",categories:[{id:8107,name:"Building Materials",icon:"hardware"},{id:8108,name:"Carpets & Floor Coverings",icon:"category-predicate-shop"},{id:8109,name:"Garden Center",icon:"category-predicate-shop"},{id:8110,name:"Hardware Store",icon:"doityourself"},{id:8111,name:"Home Furnishings",icon:"category-predicate-shop"},{id:8112,name:"Household Appliances",icon:"category-predicate-shop"},{id:8113,name:"Kitchen Supply",icon:"category-predicate-shop"},{id:8114,name:"Lighting Store",icon:"category-predicate-shop"},{id:8115,name:"Mobile Homes",icon:"category-predicate-shop"}]},{id:8035,name:"Hunting Supply",icon:"category-predicate-shop"},{id:8036,name:"Jewelry Store",icon:"jewelry"},{id:8037,name:"Knitting Store",icon:"category-predicate-shop"},{id:8038,name:"Leather Goods",icon:"category-predicate-shop"},{id:8039,name:"Luggage Store",icon:"category-predicate-shop"},{id:8040,name:"Marketplace",icon:"category-predicate-shop"},{id:8041,name:"Mattress Store",icon:"category-predicate-shop"},{id:8042,name:"Medical Supply Store",icon:"category-predicate-shop"},{id:8043,name:"Mobile Phones",icon:"mobile_phone"},{id:8044,name:"Music Store",icon:"music"},{id:8045,name:"Musical Instruments",icon:"category-predicate-shop"},{id:8046,name:"Newsstand",icon:"newspaper"},{id:8047,name:"Office Supply",icon:"category-predicate-shop"},{id:8048,name:"Optical Goods",icon:"category-predicate-shop"},{id:8049,name:"Optician",icon:"optician"},{id:8050,name:"Outdoor Supply",icon:"category-predicate-shop"},{id:8051,name:"Outlet Mall",icon:"category-predicate-shop"},{id:8052,name:"Outlet Store",icon:"category-predicate-shop"},{id:8053,name:"Party Supplies",icon:"category-predicate-shop"},{id:8054,name:"Pawn Shop",icon:"category-predicate-shop"},{id:8055,name:"Pet Store",icon:"pet"},{id:8056,name:"Pharmacy",icon:"pharmacy"},{id:8057,name:"Photographic Equipment",icon:"photographer"},{id:8058,name:"Pop-Up Shop",icon:"category-predicate-shop"},{id:8059,name:"Record Shop",icon:"category-predicate-shop"},{id:8060,name:"Scuba Diving",icon:"category-predicate-shop"},{id:8061,name:"Shipping Store",icon:"category-predicate-shop"},{id:8062,name:"Shopping Center",icon:"category-predicate-shop"},{id:8063,name:"Shopping Mall",icon:"mall"},{id:8064,name:"Skateboard Shop",icon:"category-predicate-shop"},{id:8065,name:"Ski Shop",icon:"category-predicate-shop"},{id:8066,name:"Smoke / Vape Shop",icon:"category-predicate-shop"},{id:8067,name:"Souvenir Store",icon:"category-predicate-shop"},{id:8068,name:"Sporting Goods",icon:"sports"},{id:8069,name:"Stationery & Office Supplies",icon:"category-predicate-shop"},{id:8070,name:"Surf Shop",icon:"category-predicate-shop"},{id:8071,name:"Thrift Store",icon:"category-predicate-shop"},{id:8072,name:"Toy and Game Store",icon:"toys"},{id:8073,name:"Used Merchandise",icon:"category-predicate-shop"},{id:8074,name:"Vacant Storefront",icon:"category-predicate-shop"},{id:8075,name:"Video Game Store",icon:"category-predicate-shop"},{id:8076,name:"Video Store",icon:"category-predicate-shop"},{id:8077,name:"Warehouse Store",icon:"category-predicate-shop"},{id:8078,name:"Watch Shop",icon:"category-predicate-shop"},{id:8116,name:"Wholesale Store",icon:"category-predicate-shop"}]},{id:9e3,name:"Travel",icon:"category-predicate-transport",categories:[{id:9001,name:"Air",icon:"airport",categories:[{id:9007,name:"Airport",icon:"airport"},{id:9008,name:"Airport Gate",icon:"airport"},{id:9009,name:"Airport Lounge",icon:"airport"},{id:9010,name:"Airport Service",icon:"airport"},{id:9011,name:"Airport Terminal",icon:"airport"},{id:9012,name:"Airport Tram",icon:"airport"},{id:9013,name:"Baggage Claim",icon:"airport"},{id:9014,name:"Duty-free Shop",icon:"airport"},{id:9015,name:"Heliport",icon:"airport"}]},{id:9002,name:"Automotive",icon:"parking",categories:[{id:9016,name:"Garage",icon:"parking"},{id:9017,name:"Lot",icon:"parking"},{id:9018,name:"Rest Area",icon:"parking"},{id:9019,name:"Toll Booth",icon:"parking"},{id:9020,name:"Truck Stop",icon:"parking"}]},{id:9003,name:"Bicycle",icon:"bicycle_parking",categories:[{id:9021,name:"Bicycle",icon:"bicycle_parking"},{id:9022,name:"Bike Rental",icon:"bicycle_rental_station"},{id:9023,name:"Bike Share Station",icon:"bicycle_rental_station"}]},{id:9004,name:"Marine",icon:"dock",categories:[{id:9024,name:"Boat Rental",icon:"dock"},{id:9025,name:"Ferry Terminal",icon:"ferry_terminal"},{id:9026,name:"Pier",icon:"pier"},{id:9027,name:"Port",icon:"pier"},{id:9028,name:"Seaport",icon:"dock"}]},{id:9005,name:"Rest",icon:"hotel",categories:[{id:9029,name:"Bed & Breakfast",icon:"bed_and_breakfast"},{id:9030,name:"Boarding House",icon:"hotel"},{id:9031,name:"Campground",icon:"camp_site"},{id:9032,name:"Chalets",icon:"chalet"},{id:9033,name:"Guest House",icon:"guest_house"},{id:9034,name:"Hostel",icon:"hostel"},{id:9035,name:"Hotel",icon:"hotel"},{id:9036,name:"Motel",icon:"motel"},{id:9037,name:"Resort",icon:"beach_resort"},{id:9038,name:"Ski Resort",icon:"ski"}]},{id:9006,name:"Transit",icon:"station",categories:[{id:9039,name:"Bus Station",icon:"station"},{id:9040,name:"Bus Stop",icon:"station"},{id:9041,name:"Cable Car Station",icon:"station"},{id:9042,name:"Light Rail Station",icon:"station"},{id:9043,name:"Metro Station",icon:"station"},{id:9044,name:"Taxi Stand",icon:"car"},{id:9045,name:"Train Station",icon:"station"},{id:9046,name:"Tram Stop",icon:"station"}]}]}],flattenArray=function(i){var a=[];return function e(i){i.forEach(function(n){a.push(Object.keys(n).filter(function(i){return!Array.isArray(n[i])}).reduce(function(i,e){return i[e]=n[e],i},{})),Object.keys(n).forEach(function(i){Array.isArray(n[i])&&e(n[i])})})}(i),a},byId=flattenArray(categories).reduce(function(i,e){return i[e.id]=e,i}),dump=function(){return categories},findById=function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(!i)throw Error();return byId[i]||{}};exports.dump=dump,exports.findById=findById;
