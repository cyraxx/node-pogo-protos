/// <reference path="bytebuffer.d.ts" />
/// <reference path="long.d.ts" />
declare module POGOProtos {
    interface ProtoBufMapItem<KeyType, ValueType> {
        key: KeyType,
        value: ValueType
    }
    interface ProtoBufMap<KeyType, ValueType> {
        clear(): void;
        delete(key: KeyType): void;
        get(key: KeyType): ValueType;
        has(key: KeyType): boolean;
        set(key: KeyType, value: ValueType): void;
        forEach(fn: (value: ValueType, key: KeyType) => void): void;
        size: number;
        map: { [key: string]: ProtoBufMapItem<KeyType, ValueType> }
    }
}
declare module POGOProtos {
    export interface Enums {
    }
}
declare module POGOProtos.Enums {
    export const enum ActivityType {
        ACTIVITY_UNKNOWN = 0,
        ACTIVITY_CATCH_POKEMON = 1,
        ACTIVITY_CATCH_LEGEND_POKEMON = 2,
        ACTIVITY_FLEE_POKEMON = 3,
        ACTIVITY_DEFEAT_FORT = 4,
        ACTIVITY_EVOLVE_POKEMON = 5,
        ACTIVITY_HATCH_EGG = 6,
        ACTIVITY_WALK_KM = 7,
        ACTIVITY_POKEDEX_ENTRY_NEW = 8,
        ACTIVITY_CATCH_FIRST_THROW = 9,
        ACTIVITY_CATCH_NICE_THROW = 10,
        ACTIVITY_CATCH_GREAT_THROW = 11,
        ACTIVITY_CATCH_EXCELLENT_THROW = 12,
        ACTIVITY_CATCH_CURVEBALL = 13,
        ACTIVITY_CATCH_FIRST_CATCH_OF_DAY = 14,
        ACTIVITY_CATCH_MILESTONE = 15,
        ACTIVITY_TRAIN_POKEMON = 16,
        ACTIVITY_SEARCH_FORT = 17,
        ACTIVITY_RELEASE_POKEMON = 18,
        ACTIVITY_HATCH_EGG_SMALL_BONUS = 19,
        ACTIVITY_HATCH_EGG_MEDIUM_BONUS = 20,
        ACTIVITY_HATCH_EGG_LARGE_BONUS = 21,
        ACTIVITY_DEFEAT_GYM_DEFENDER = 22,
        ACTIVITY_DEFEAT_GYM_LEADER = 23,
    }
}
declare module POGOProtos.Enums {
    export const enum BadgeType {
        BADGE_UNSET = 0,
        BADGE_TRAVEL_KM = 1,
        BADGE_POKEDEX_ENTRIES = 2,
        BADGE_CAPTURE_TOTAL = 3,
        BADGE_DEFEATED_FORT = 4,
        BADGE_EVOLVED_TOTAL = 5,
        BADGE_HATCHED_TOTAL = 6,
        BADGE_ENCOUNTERED_TOTAL = 7,
        BADGE_POKESTOPS_VISITED = 8,
        BADGE_UNIQUE_POKESTOPS = 9,
        BADGE_POKEBALL_THROWN = 10,
        BADGE_BIG_MAGIKARP = 11,
        BADGE_DEPLOYED_TOTAL = 12,
        BADGE_BATTLE_ATTACK_WON = 13,
        BADGE_BATTLE_TRAINING_WON = 14,
        BADGE_BATTLE_DEFEND_WON = 15,
        BADGE_PRESTIGE_RAISED = 16,
        BADGE_PRESTIGE_DROPPED = 17,
        BADGE_TYPE_NORMAL = 18,
        BADGE_TYPE_FIGHTING = 19,
        BADGE_TYPE_FLYING = 20,
        BADGE_TYPE_POISON = 21,
        BADGE_TYPE_GROUND = 22,
        BADGE_TYPE_ROCK = 23,
        BADGE_TYPE_BUG = 24,
        BADGE_TYPE_GHOST = 25,
        BADGE_TYPE_STEEL = 26,
        BADGE_TYPE_FIRE = 27,
        BADGE_TYPE_WATER = 28,
        BADGE_TYPE_GRASS = 29,
        BADGE_TYPE_ELECTRIC = 30,
        BADGE_TYPE_PSYCHIC = 31,
        BADGE_TYPE_ICE = 32,
        BADGE_TYPE_DRAGON = 33,
        BADGE_TYPE_DARK = 34,
        BADGE_TYPE_FAIRY = 35,
        BADGE_SMALL_RATTATA = 36,
        BADGE_PIKACHU = 37,
    }
}
declare module POGOProtos.Enums {
    export const enum CameraInterpolation {
        CAM_INTERP_CUT = 0,
        CAM_INTERP_LINEAR = 1,
        CAM_INTERP_SMOOTH = 2,
        CAM_INTERP_SMOOTH_ROT_LINEAR_MOVE = 3,
        CAM_INTERP_DEPENDS = 4,
    }
}
declare module POGOProtos.Enums {
    export const enum CameraTarget {
        CAM_TARGET_ATTACKER = 0,
        CAM_TARGET_ATTACKER_EDGE = 1,
        CAM_TARGET_ATTACKER_GROUND = 2,
        CAM_TARGET_DEFENDER = 3,
        CAM_TARGET_DEFENDER_EDGE = 4,
        CAM_TARGET_DEFENDER_GROUND = 5,
        CAM_TARGET_ATTACKER_DEFENDER = 6,
        CAM_TARGET_ATTACKER_DEFENDER_EDGE = 7,
        CAM_TARGET_DEFENDER_ATTACKER = 8,
        CAM_TARGET_DEFENDER_ATTACKER_EDGE = 9,
        CAM_TARGET_ATTACKER_DEFENDER_MIRROR = 11,
        CAM_TARGET_SHOULDER_ATTACKER_DEFENDER = 12,
        CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR = 13,
        CAM_TARGET_ATTACKER_DEFENDER_WORLD = 14,
    }
}
declare module POGOProtos.Enums {
    export const enum Gender {
        MALE = 0,
        FEMALE = 1,
    }
}
declare module POGOProtos.Enums {
    export const enum HoloIapItemCategory {
        IAP_CATEGORY_NONE = 0,
        IAP_CATEGORY_BUNDLE = 1,
        IAP_CATEGORY_ITEMS = 2,
        IAP_CATEGORY_UPGRADES = 3,
        IAP_CATEGORY_POKECOINS = 4,
    }
}
declare module POGOProtos.Enums {
    export const enum ItemCategory {
        ITEM_CATEGORY_NONE = 0,
        ITEM_CATEGORY_POKEBALL = 1,
        ITEM_CATEGORY_FOOD = 2,
        ITEM_CATEGORY_MEDICINE = 3,
        ITEM_CATEGORY_BOOST = 4,
        ITEM_CATEGORY_UTILITES = 5,
        ITEM_CATEGORY_CAMERA = 6,
        ITEM_CATEGORY_DISK = 7,
        ITEM_CATEGORY_INCUBATOR = 8,
        ITEM_CATEGORY_INCENSE = 9,
        ITEM_CATEGORY_XP_BOOST = 10,
        ITEM_CATEGORY_INVENTORY_UPGRADE = 11,
    }
}
declare module POGOProtos.Enums {
    export const enum ItemEffect {
        ITEM_EFFECT_NONE = 0,
        ITEM_EFFECT_CAP_NO_FLEE = 1000,
        ITEM_EFFECT_CAP_NO_MOVEMENT = 1002,
        ITEM_EFFECT_CAP_NO_THREAT = 1003,
        ITEM_EFFECT_CAP_TARGET_MAX = 1004,
        ITEM_EFFECT_CAP_TARGET_SLOW = 1005,
        ITEM_EFFECT_CAP_CHANCE_NIGHT = 1006,
        ITEM_EFFECT_CAP_CHANCE_TRAINER = 1007,
        ITEM_EFFECT_CAP_CHANCE_FIRST_THROW = 1008,
        ITEM_EFFECT_CAP_CHANCE_LEGEND = 1009,
        ITEM_EFFECT_CAP_CHANCE_HEAVY = 1010,
        ITEM_EFFECT_CAP_CHANCE_REPEAT = 1011,
        ITEM_EFFECT_CAP_CHANCE_MULTI_THROW = 1012,
        ITEM_EFFECT_CAP_CHANCE_ALWAYS = 1013,
        ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW = 1014,
    }
}
declare module POGOProtos.Enums {
    export const enum Platform {
        UNSET = 0,
        IOS = 1,
        ANDROID = 2,
        OSX = 3,
        WINDOWS = 4,
    }
}
declare module POGOProtos.Enums {
    export const enum PokemonFamilyId {
        FAMILY_UNSET = 0,
        FAMILY_BULBASAUR = 1,
        FAMILY_CHARMANDER = 4,
        FAMILY_SQUIRTLE = 7,
        FAMILY_CATERPIE = 10,
        FAMILY_WEEDLE = 13,
        FAMILY_PIDGEY = 16,
        FAMILY_RATTATA = 19,
        FAMILY_SPEAROW = 21,
        FAMILY_EKANS = 23,
        FAMILY_PIKACHU = 25,
        FAMILY_SANDSHREW = 27,
        FAMILY_NIDORAN_FEMALE = 29,
        FAMILY_NIDORAN_MALE = 32,
        FAMILY_CLEFAIRY = 35,
        FAMILY_VULPIX = 37,
        FAMILY_JIGGLYPUFF = 39,
        FAMILY_ZUBAT = 41,
        FAMILY_ODDISH = 43,
        FAMILY_PARAS = 46,
        FAMILY_VENONAT = 48,
        FAMILY_DIGLETT = 50,
        FAMILY_MEOWTH = 52,
        FAMILY_PSYDUCK = 54,
        FAMILY_MANKEY = 56,
        FAMILY_GROWLITHE = 58,
        FAMILY_POLIWAG = 60,
        FAMILY_ABRA = 63,
        FAMILY_MACHOP = 66,
        FAMILY_BELLSPROUT = 69,
        FAMILY_TENTACOOL = 72,
        FAMILY_GEODUDE = 74,
        FAMILY_PONYTA = 77,
        FAMILY_SLOWPOKE = 79,
        FAMILY_MAGNEMITE = 81,
        FAMILY_FARFETCHD = 83,
        FAMILY_DODUO = 84,
        FAMILY_SEEL = 86,
        FAMILY_GRIMER = 88,
        FAMILY_SHELLDER = 90,
        FAMILY_GASTLY = 92,
        FAMILY_ONIX = 95,
        FAMILY_DROWZEE = 96,
        FAMILY_HYPNO = 97,
        FAMILY_KRABBY = 98,
        FAMILY_VOLTORB = 100,
        FAMILY_EXEGGCUTE = 102,
        FAMILY_CUBONE = 104,
        FAMILY_HITMONLEE = 106,
        FAMILY_HITMONCHAN = 107,
        FAMILY_LICKITUNG = 108,
        FAMILY_KOFFING = 109,
        FAMILY_RHYHORN = 111,
        FAMILY_CHANSEY = 113,
        FAMILY_TANGELA = 114,
        FAMILY_KANGASKHAN = 115,
        FAMILY_HORSEA = 116,
        FAMILY_GOLDEEN = 118,
        FAMILY_STARYU = 120,
        FAMILY_MR_MIME = 122,
        FAMILY_SCYTHER = 123,
        FAMILY_JYNX = 124,
        FAMILY_ELECTABUZZ = 125,
        FAMILY_MAGMAR = 126,
        FAMILY_PINSIR = 127,
        FAMILY_TAUROS = 128,
        FAMILY_MAGIKARP = 129,
        FAMILY_LAPRAS = 131,
        FAMILY_DITTO = 132,
        FAMILY_EEVEE = 133,
        FAMILY_PORYGON = 137,
        FAMILY_OMANYTE = 138,
        FAMILY_KABUTO = 140,
        FAMILY_AERODACTYL = 142,
        FAMILY_SNORLAX = 143,
        FAMILY_ARTICUNO = 144,
        FAMILY_ZAPDOS = 145,
        FAMILY_MOLTRES = 146,
        FAMILY_DRATINI = 147,
        FAMILY_MEWTWO = 150,
        FAMILY_MEW = 151,
    }
}
declare module POGOProtos.Enums {
    export const enum PokemonId {
        MISSINGNO = 0,
        BULBASAUR = 1,
        IVYSAUR = 2,
        VENUSAUR = 3,
        CHARMANDER = 4,
        CHARMELEON = 5,
        CHARIZARD = 6,
        SQUIRTLE = 7,
        WARTORTLE = 8,
        BLASTOISE = 9,
        CATERPIE = 10,
        METAPOD = 11,
        BUTTERFREE = 12,
        WEEDLE = 13,
        KAKUNA = 14,
        BEEDRILL = 15,
        PIDGEY = 16,
        PIDGEOTTO = 17,
        PIDGEOT = 18,
        RATTATA = 19,
        RATICATE = 20,
        SPEAROW = 21,
        FEAROW = 22,
        EKANS = 23,
        ARBOK = 24,
        PIKACHU = 25,
        RAICHU = 26,
        SANDSHREW = 27,
        SANDSLASH = 28,
        NIDORAN_FEMALE = 29,
        NIDORINA = 30,
        NIDOQUEEN = 31,
        NIDORAN_MALE = 32,
        NIDORINO = 33,
        NIDOKING = 34,
        CLEFAIRY = 35,
        CLEFABLE = 36,
        VULPIX = 37,
        NINETALES = 38,
        JIGGLYPUFF = 39,
        WIGGLYTUFF = 40,
        ZUBAT = 41,
        GOLBAT = 42,
        ODDISH = 43,
        GLOOM = 44,
        VILEPLUME = 45,
        PARAS = 46,
        PARASECT = 47,
        VENONAT = 48,
        VENOMOTH = 49,
        DIGLETT = 50,
        DUGTRIO = 51,
        MEOWTH = 52,
        PERSIAN = 53,
        PSYDUCK = 54,
        GOLDUCK = 55,
        MANKEY = 56,
        PRIMEAPE = 57,
        GROWLITHE = 58,
        ARCANINE = 59,
        POLIWAG = 60,
        POLIWHIRL = 61,
        POLIWRATH = 62,
        ABRA = 63,
        KADABRA = 64,
        ALAKAZAM = 65,
        MACHOP = 66,
        MACHOKE = 67,
        MACHAMP = 68,
        BELLSPROUT = 69,
        WEEPINBELL = 70,
        VICTREEBEL = 71,
        TENTACOOL = 72,
        TENTACRUEL = 73,
        GEODUDE = 74,
        GRAVELER = 75,
        GOLEM = 76,
        PONYTA = 77,
        RAPIDASH = 78,
        SLOWPOKE = 79,
        SLOWBRO = 80,
        MAGNEMITE = 81,
        MAGNETON = 82,
        FARFETCHD = 83,
        DODUO = 84,
        DODRIO = 85,
        SEEL = 86,
        DEWGONG = 87,
        GRIMER = 88,
        MUK = 89,
        SHELLDER = 90,
        CLOYSTER = 91,
        GASTLY = 92,
        HAUNTER = 93,
        GENGAR = 94,
        ONIX = 95,
        DROWZEE = 96,
        HYPNO = 97,
        KRABBY = 98,
        KINGLER = 99,
        VOLTORB = 100,
        ELECTRODE = 101,
        EXEGGCUTE = 102,
        EXEGGUTOR = 103,
        CUBONE = 104,
        MAROWAK = 105,
        HITMONLEE = 106,
        HITMONCHAN = 107,
        LICKITUNG = 108,
        KOFFING = 109,
        WEEZING = 110,
        RHYHORN = 111,
        RHYDON = 112,
        CHANSEY = 113,
        TANGELA = 114,
        KANGASKHAN = 115,
        HORSEA = 116,
        SEADRA = 117,
        GOLDEEN = 118,
        SEAKING = 119,
        STARYU = 120,
        STARMIE = 121,
        MR_MIME = 122,
        SCYTHER = 123,
        JYNX = 124,
        ELECTABUZZ = 125,
        MAGMAR = 126,
        PINSIR = 127,
        TAUROS = 128,
        MAGIKARP = 129,
        GYARADOS = 130,
        LAPRAS = 131,
        DITTO = 132,
        EEVEE = 133,
        VAPOREON = 134,
        JOLTEON = 135,
        FLAREON = 136,
        PORYGON = 137,
        OMANYTE = 138,
        OMASTAR = 139,
        KABUTO = 140,
        KABUTOPS = 141,
        AERODACTYL = 142,
        SNORLAX = 143,
        ARTICUNO = 144,
        ZAPDOS = 145,
        MOLTRES = 146,
        DRATINI = 147,
        DRAGONAIR = 148,
        DRAGONITE = 149,
        MEWTWO = 150,
        MEW = 151,
    }
}
declare module POGOProtos.Enums {
    export const enum PokemonMove {
        MOVE_UNSET = 0,
        THUNDER_SHOCK = 1,
        QUICK_ATTACK = 2,
        SCRATCH = 3,
        EMBER = 4,
        VINE_WHIP = 5,
        TACKLE = 6,
        RAZOR_LEAF = 7,
        TAKE_DOWN = 8,
        WATER_GUN = 9,
        BITE = 10,
        POUND = 11,
        DOUBLE_SLAP = 12,
        WRAP = 13,
        HYPER_BEAM = 14,
        LICK = 15,
        DARK_PULSE = 16,
        SMOG = 17,
        SLUDGE = 18,
        METAL_CLAW = 19,
        VICE_GRIP = 20,
        FLAME_WHEEL = 21,
        MEGAHORN = 22,
        WING_ATTACK = 23,
        FLAMETHROWER = 24,
        SUCKER_PUNCH = 25,
        DIG = 26,
        LOW_KICK = 27,
        CROSS_CHOP = 28,
        PSYCHO_CUT = 29,
        PSYBEAM = 30,
        EARTHQUAKE = 31,
        STONE_EDGE = 32,
        ICE_PUNCH = 33,
        HEART_STAMP = 34,
        DISCHARGE = 35,
        FLASH_CANNON = 36,
        PECK = 37,
        DRILL_PECK = 38,
        ICE_BEAM = 39,
        BLIZZARD = 40,
        AIR_SLASH = 41,
        HEAT_WAVE = 42,
        TWINEEDLE = 43,
        POISON_JAB = 44,
        AERIAL_ACE = 45,
        DRILL_RUN = 46,
        PETAL_BLIZZARD = 47,
        MEGA_DRAIN = 48,
        BUG_BUZZ = 49,
        POISON_FANG = 50,
        NIGHT_SLASH = 51,
        SLASH = 52,
        BUBBLE_BEAM = 53,
        SUBMISSION = 54,
        KARATE_CHOP = 55,
        LOW_SWEEP = 56,
        AQUA_JET = 57,
        AQUA_TAIL = 58,
        SEED_BOMB = 59,
        PSYSHOCK = 60,
        ROCK_THROW = 61,
        ANCIENT_POWER = 62,
        ROCK_TOMB = 63,
        ROCK_SLIDE = 64,
        POWER_GEM = 65,
        SHADOW_SNEAK = 66,
        SHADOW_PUNCH = 67,
        SHADOW_CLAW = 68,
        OMINOUS_WIND = 69,
        SHADOW_BALL = 70,
        BULLET_PUNCH = 71,
        MAGNET_BOMB = 72,
        STEEL_WING = 73,
        IRON_HEAD = 74,
        PARABOLIC_CHARGE = 75,
        SPARK = 76,
        THUNDER_PUNCH = 77,
        THUNDER = 78,
        THUNDERBOLT = 79,
        TWISTER = 80,
        DRAGON_BREATH = 81,
        DRAGON_PULSE = 82,
        DRAGON_CLAW = 83,
        DISARMING_VOICE = 84,
        DRAINING_KISS = 85,
        DAZZLING_GLEAM = 86,
        MOONBLAST = 87,
        PLAY_ROUGH = 88,
        CROSS_POISON = 89,
        SLUDGE_BOMB = 90,
        SLUDGE_WAVE = 91,
        GUNK_SHOT = 92,
        MUD_SHOT = 93,
        BONE_CLUB = 94,
        BULLDOZE = 95,
        MUD_BOMB = 96,
        FURY_CUTTER = 97,
        BUG_BITE = 98,
        SIGNAL_BEAM = 99,
        X_SCISSOR = 100,
        FLAME_CHARGE = 101,
        FLAME_BURST = 102,
        FIRE_BLAST = 103,
        BRINE = 104,
        WATER_PULSE = 105,
        SCALD = 106,
        HYDRO_PUMP = 107,
        PSYCHIC = 108,
        PSYSTRIKE = 109,
        ICE_SHARD = 110,
        ICY_WIND = 111,
        FROST_BREATH = 112,
        ABSORB = 113,
        GIGA_DRAIN = 114,
        FIRE_PUNCH = 115,
        SOLAR_BEAM = 116,
        LEAF_BLADE = 117,
        POWER_WHIP = 118,
        SPLASH = 119,
        ACID = 120,
        AIR_CUTTER = 121,
        HURRICANE = 122,
        BRICK_BREAK = 123,
        CUT = 124,
        SWIFT = 125,
        HORN_ATTACK = 126,
        STOMP = 127,
        HEADBUTT = 128,
        HYPER_FANG = 129,
        SLAM = 130,
        BODY_SLAM = 131,
        REST = 132,
        STRUGGLE = 133,
        SCALD_BLASTOISE = 134,
        HYDRO_PUMP_BLASTOISE = 135,
        WRAP_GREEN = 136,
        WRAP_PINK = 137,
        FURY_CUTTER_FAST = 200,
        BUG_BITE_FAST = 201,
        BITE_FAST = 202,
        SUCKER_PUNCH_FAST = 203,
        DRAGON_BREATH_FAST = 204,
        THUNDER_SHOCK_FAST = 205,
        SPARK_FAST = 206,
        LOW_KICK_FAST = 207,
        KARATE_CHOP_FAST = 208,
        EMBER_FAST = 209,
        WING_ATTACK_FAST = 210,
        PECK_FAST = 211,
        LICK_FAST = 212,
        SHADOW_CLAW_FAST = 213,
        VINE_WHIP_FAST = 214,
        RAZOR_LEAF_FAST = 215,
        MUD_SHOT_FAST = 216,
        ICE_SHARD_FAST = 217,
        FROST_BREATH_FAST = 218,
        QUICK_ATTACK_FAST = 219,
        SCRATCH_FAST = 220,
        TACKLE_FAST = 221,
        POUND_FAST = 222,
        CUT_FAST = 223,
        POISON_JAB_FAST = 224,
        ACID_FAST = 225,
        PSYCHO_CUT_FAST = 226,
        ROCK_THROW_FAST = 227,
        METAL_CLAW_FAST = 228,
        BULLET_PUNCH_FAST = 229,
        WATER_GUN_FAST = 230,
        SPLASH_FAST = 231,
        WATER_GUN_FAST_BLASTOISE = 232,
        MUD_SLAP_FAST = 233,
        ZEN_HEADBUTT_FAST = 234,
        CONFUSION_FAST = 235,
        POISON_STING_FAST = 236,
        BUBBLE_FAST = 237,
        FEINT_ATTACK_FAST = 238,
        STEEL_WING_FAST = 239,
        FIRE_FANG_FAST = 240,
        ROCK_SMASH_FAST = 241,
    }
}
declare module POGOProtos.Enums {
    export const enum PokemonMovementType {
        MOVEMENT_STATIC = 0,
        MOVEMENT_JUMP = 1,
        MOVEMENT_VERTICAL = 2,
        MOVEMENT_PSYCHIC = 3,
        MOVEMENT_ELECTRIC = 4,
        MOVEMENT_FLYING = 5,
        MOVEMENT_HOVERING = 6,
    }
}
declare module POGOProtos.Enums {
    export const enum PokemonRarity {
        POKEMON_RARITY_NORMAL = 0,
        POKEMON_RARITY_LEGENDARY = 1,
        POKEMON_RARITY_MYTHIC = 2,
    }
}
declare module POGOProtos.Enums {
    export const enum PokemonType {
        POKEMON_TYPE_NONE = 0,
        POKEMON_TYPE_NORMAL = 1,
        POKEMON_TYPE_FIGHTING = 2,
        POKEMON_TYPE_FLYING = 3,
        POKEMON_TYPE_POISON = 4,
        POKEMON_TYPE_GROUND = 5,
        POKEMON_TYPE_ROCK = 6,
        POKEMON_TYPE_BUG = 7,
        POKEMON_TYPE_GHOST = 8,
        POKEMON_TYPE_STEEL = 9,
        POKEMON_TYPE_FIRE = 10,
        POKEMON_TYPE_WATER = 11,
        POKEMON_TYPE_GRASS = 12,
        POKEMON_TYPE_ELECTRIC = 13,
        POKEMON_TYPE_PSYCHIC = 14,
        POKEMON_TYPE_ICE = 15,
        POKEMON_TYPE_DRAGON = 16,
        POKEMON_TYPE_DARK = 17,
        POKEMON_TYPE_FAIRY = 18,
    }
}
declare module POGOProtos.Enums {
    export const enum TeamColor {
        NEUTRAL = 0,
        BLUE = 1,
        RED = 2,
        YELLOW = 3,
    }
}
declare module POGOProtos.Enums {
    export const enum TutorialState {
        LEGAL_SCREEN = 0,
        AVATAR_SELECTION = 1,
        ACCOUNT_CREATION = 2,
        POKEMON_CAPTURE = 3,
        NAME_SELECTION = 4,
        POKEMON_BERRY = 5,
        USE_ITEM = 6,
        FIRST_TIME_EXPERIENCE_COMPLETE = 7,
        POKESTOP_TUTORIAL = 8,
        GYM_TUTORIAL = 9,
    }
}
declare module POGOProtos {
    export interface Data {
    }
}
declare module POGOProtos.Data {
    export interface AssetDigestEntry {
        asset_id: string;
        bundle_name: string;
        version: Long;
        checksum: number;
        size: number;
        key: ByteBuffer;
    }
}
declare module POGOProtos.Data {
    export interface DownloadUrlEntry {
        asset_id: string;
        url: string;
        size: number;
        checksum: number;
    }
}
declare module POGOProtos.Data {
    export interface PlayerBadge {
        badge_type: Enums.BadgeType;
        rank: number;
        start_value: number;
        end_value: number;
        current_value: number;
    }
}
declare module POGOProtos.Data {
    export interface PlayerData {
        creation_timestamp_ms: Long;
        username: string;
        team: Enums.TeamColor;
        tutorial_state: Enums.TutorialState[];
        avatar: Player.PlayerAvatar;
        max_pokemon_storage: number;
        max_item_storage: number;
        daily_bonus: Player.DailyBonus;
        equipped_badge: Player.EquippedBadge;
        contact_settings: Player.ContactSettings;
        currencies: Player.Currency[];
        remaining_codename_claims: number;
    }
}
declare module POGOProtos.Data {
    export interface PokedexEntry {
        pokemon_id: Enums.PokemonId;
        times_encountered: number;
        times_captured: number;
        evolution_stone_pieces: number;
        evolution_stones: number;
    }
}
declare module POGOProtos.Data {
    export interface PokemonData {
        id: Long;
        pokemon_id: Enums.PokemonId;
        cp: number;
        stamina: number;
        stamina_max: number;
        move_1: Enums.PokemonMove;
        move_2: Enums.PokemonMove;
        deployed_fort_id: string;
        owner_name: string;
        is_egg: boolean;
        egg_km_walked_target: number;
        egg_km_walked_start: number;
        origin: number;
        height_m: number;
        weight_kg: number;
        individual_attack: number;
        individual_defense: number;
        individual_stamina: number;
        cp_multiplier: number;
        pokeball: Inventory.Item.ItemId;
        captured_cell_id: Long;
        battles_attacked: number;
        battles_defended: number;
        egg_incubator_id: string;
        creation_time_ms: Long;
        num_upgrades: number;
        additional_cp_multiplier: number;
        favorite: number;
        nickname: string;
        from_fort: number;
    }
}
declare module POGOProtos.Data {
    export interface Player {
    }
}
declare module POGOProtos.Data.Player {
    export interface ContactSettings {
        send_marketing_emails: boolean;
        send_push_notifications: boolean;
    }
}
declare module POGOProtos.Data.Player {
    export interface Currency {
        name: string;
        amount: number;
    }
}
declare module POGOProtos.Data.Player {
    export interface DailyBonus {
        next_collected_timestamp_ms: Long;
        next_defender_bonus_collect_timestamp_ms: Long;
    }
}
declare module POGOProtos.Data.Player {
    export interface EquippedBadge {
        badge_type: Enums.BadgeType;
        level: number;
        next_equip_change_allowed_timestamp_ms: Long;
    }
}
declare module POGOProtos.Data.Player {
    export interface PlayerAvatar {
        skin: number;
        hair: number;
        shirt: number;
        pants: number;
        hat: number;
        shoes: number;
        gender: Enums.Gender;
        eyes: number;
        backpack: number;
    }
}
declare module POGOProtos.Data.Player {
    export interface PlayerCamera {
        is_default_camera: boolean;
    }
}
declare module POGOProtos.Data.Player {
    export interface PlayerCurrency {
        gems: number;
    }
}
declare module POGOProtos.Data.Player {
    export interface PlayerPublicProfile {
        name: string;
        level: number;
        avatar: PlayerAvatar;
    }
}
declare module POGOProtos.Data.Player {
    export interface PlayerStats {
        level: number;
        experience: Long;
        prev_level_xp: Long;
        next_level_xp: Long;
        km_walked: number;
        pokemons_encountered: number;
        unique_pokedex_entries: number;
        pokemons_captured: number;
        evolutions: number;
        poke_stop_visits: number;
        pokeballs_thrown: number;
        eggs_hatched: number;
        big_magikarp_caught: number;
        battle_attack_won: number;
        battle_attack_total: number;
        battle_defended_won: number;
        battle_training_won: number;
        battle_training_total: number;
        prestige_raised_total: number;
        prestige_dropped_total: number;
        pokemon_deployed: number;
        pokemon_caught_by_type: ByteBuffer;
        small_rattata_caught: number;
    }
}
declare module POGOProtos.Data {
    export interface Gym {
    }
}
declare module POGOProtos.Data.Gym {
    export interface GymMembership {
        pokemon_data: PokemonData;
        trainer_public_profile: Player.PlayerPublicProfile;
    }
}
declare module POGOProtos.Data.Gym {
    export interface GymState {
        fort_data: Map.Fort.FortData;
        memberships: GymMembership[];
    }
}
declare module POGOProtos.Data {
    export interface Battle {
    }
}
declare module POGOProtos.Data.Battle {
    export interface BattleAction {
        Type: BattleActionType;
        action_start_ms: Long;
        duration_ms: number;
        energy_delta: number;
        attacker_index: number;
        target_index: number;
        active_pokemon_id: Long;
        player_joined: BattleParticipant;
        battle_results: BattleResults;
        damage_windows_start_timestamp_mss: Long;
        damage_windows_end_timestamp_mss: Long;
        player_left: BattleParticipant;
        target_pokemon_id: Long;
    }
}
declare module POGOProtos.Data.Battle {
    export interface BattleLog {
        state: BattleState;
        battle_type: BattleType;
        server_ms: Long;
        battle_actions: BattleAction[];
        battle_start_timestamp_ms: Long;
        battle_end_timestamp_ms: Long;
    }
}
declare module POGOProtos.Data.Battle {
    export interface BattleParticipant {
        active_pokemon: BattlePokemonInfo;
        trainer_public_profile: Player.PlayerPublicProfile;
        reverse_pokemon: BattlePokemonInfo[];
        defeated_pokemon: BattlePokemonInfo[];
    }
}
declare module POGOProtos.Data.Battle {
    export interface BattlePokemonInfo {
        pokemon_data: PokemonData;
        current_health: number;
        current_energy: number;
    }
}
declare module POGOProtos.Data.Battle {
    export interface BattleResults {
        gym_state: Gym.GymState;
        attackers: BattleParticipant[];
        player_experience_awarded: number[];
        next_defender_pokemon_id: Long;
        gym_points_delta: number;
    }
}
declare module POGOProtos.Data.Battle {
    export const enum BattleActionType {
        ACTION_UNSET = 0,
        ACTION_ATTACK = 1,
        ACTION_DODGE = 2,
        ACTION_SPECIAL_ATTACK = 3,
        ACTION_SWAP_POKEMON = 4,
        ACTION_FAINT = 5,
        ACTION_PLAYER_JOIN = 6,
        ACTION_PLAYER_QUIT = 7,
        ACTION_VICTORY = 8,
        ACTION_DEFEAT = 9,
        ACTION_TIMED_OUT = 10,
    }
}
declare module POGOProtos.Data.Battle {
    export const enum BattleState {
        STATE_UNSET = 0,
        ACTIVE = 1,
        VICTORY = 2,
        DEFEATED = 3,
        TIMED_OUT = 4,
    }
}
declare module POGOProtos.Data.Battle {
    export const enum BattleType {
        BATTLE_TYPE_UNSET = 0,
        BATTLE_TYPE_NORMAL = 1,
        BATTLE_TYPE_TRAINING = 2,
    }
}
declare module POGOProtos.Data {
    export interface Capture {
    }
}
declare module POGOProtos.Data.Capture {
    export interface CaptureAward {
        activity_type: Enums.ActivityType[];
        xp: number[];
        candy: number[];
        stardust: number[];
    }
}
declare module POGOProtos.Data.Capture {
    export interface CaptureProbability {
        pokeball_type: Inventory.Item.ItemId[];
        capture_probability: number[];
        reticle_difficulty_scale: number;
    }
}
declare module POGOProtos.Data {
    export interface Logs {
    }
}
declare module POGOProtos.Data.Logs {
    export interface ActionLogEntry {
        timestamp_ms: Long;
        sfida: boolean;
        catch_pokemon: CatchPokemonLogEntry;
        fort_search: FortSearchLogEntry;
        Action: string
    }
}
declare module POGOProtos.Data.Logs {
    export interface CatchPokemonLogEntry {
        result: CatchPokemonLogEntry.Result;
        pokemon_id: Enums.PokemonId;
        combat_points: number;
        pokemon_data_id: Long;
    }
}
declare module POGOProtos.Data.Logs.CatchPokemonLogEntry {
    export const enum Result {
        UNSET = 0,
        POKEMON_CAPTURED = 1,
        POKEMON_FLED = 2,
        POKEMON_HATCHED = 3,
    }
}
declare module POGOProtos.Data.Logs {
    export interface FortSearchLogEntry {
        result: FortSearchLogEntry.Result;
        fort_id: string;
        items: Inventory.Item.ItemData[];
        eggs: number;
    }
}
declare module POGOProtos.Data.Logs.FortSearchLogEntry {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
    }
}
declare module POGOProtos {
    export interface Inventory {
    }
}
declare module POGOProtos.Inventory {
    export interface AppliedItem {
        item_id: Item.ItemId;
        item_type: Item.ItemType;
        expire_ms: Long;
        applied_ms: Long;
    }
}
declare module POGOProtos.Inventory {
    export interface AppliedItems {
        item: AppliedItem[];
    }
}
declare module POGOProtos.Inventory {
    export interface Candy {
        family_id: Enums.PokemonFamilyId;
        candy: number;
    }
}
declare module POGOProtos.Inventory {
    export interface EggIncubator {
        id: string;
        item_id: Item.ItemId;
        incubator_type: EggIncubatorType;
        uses_remaining: number;
        pokemon_id: Long;
        start_km_walked: number;
        target_km_walked: number;
    }
}
declare module POGOProtos.Inventory {
    export interface EggIncubators {
        egg_incubator: EggIncubator[];
    }
}
declare module POGOProtos.Inventory {
    export interface InventoryDelta {
        original_timestamp_ms: Long;
        new_timestamp_ms: Long;
        inventory_items: InventoryItem[];
    }
}
declare module POGOProtos.Inventory {
    export interface InventoryItem {
        modified_timestamp_ms: Long;
        deleted_item: InventoryItem.DeletedItem;
        inventory_item_data: InventoryItemData;
    }
}
declare module POGOProtos.Inventory.InventoryItem {
    export interface DeletedItem {
        pokemon_id: Long;
    }
}
declare module POGOProtos.Inventory {
    export interface InventoryItemData {
        pokemon_data: Data.PokemonData;
        item: Item.ItemData;
        pokedex_entry: Data.PokedexEntry;
        player_stats: Data.Player.PlayerStats;
        player_currency: Data.Player.PlayerCurrency;
        player_camera: Data.Player.PlayerCamera;
        inventory_upgrades: InventoryUpgrades;
        applied_items: AppliedItems;
        egg_incubators: EggIncubators;
        candy: Candy;
    }
}
declare module POGOProtos.Inventory {
    export interface InventoryUpgrade {
        item_id: Item.ItemId;
        upgrade_type: InventoryUpgradeType;
        additional_storage: number;
    }
}
declare module POGOProtos.Inventory {
    export interface InventoryUpgrades {
        inventory_upgrades: InventoryUpgrade[];
    }
}
declare module POGOProtos.Inventory {
    export interface Item {
    }
}
declare module POGOProtos.Inventory.Item {
    export interface ItemAward {
        item_id: ItemId;
        item_count: number;
    }
}
declare module POGOProtos.Inventory.Item {
    export interface ItemData {
        item_id: ItemId;
        count: number;
        unseen: boolean;
    }
}
declare module POGOProtos.Inventory.Item {
    export const enum ItemId {
        ITEM_UNKNOWN = 0,
        ITEM_POKE_BALL = 1,
        ITEM_GREAT_BALL = 2,
        ITEM_ULTRA_BALL = 3,
        ITEM_MASTER_BALL = 4,
        ITEM_POTION = 101,
        ITEM_SUPER_POTION = 102,
        ITEM_HYPER_POTION = 103,
        ITEM_MAX_POTION = 104,
        ITEM_REVIVE = 201,
        ITEM_MAX_REVIVE = 202,
        ITEM_LUCKY_EGG = 301,
        ITEM_INCENSE_ORDINARY = 401,
        ITEM_INCENSE_SPICY = 402,
        ITEM_INCENSE_COOL = 403,
        ITEM_INCENSE_FLORAL = 404,
        ITEM_TROY_DISK = 501,
        ITEM_X_ATTACK = 602,
        ITEM_X_DEFENSE = 603,
        ITEM_X_MIRACLE = 604,
        ITEM_RAZZ_BERRY = 701,
        ITEM_BLUK_BERRY = 702,
        ITEM_NANAB_BERRY = 703,
        ITEM_WEPAR_BERRY = 704,
        ITEM_PINAP_BERRY = 705,
        ITEM_SPECIAL_CAMERA = 801,
        ITEM_INCUBATOR_BASIC_UNLIMITED = 901,
        ITEM_INCUBATOR_BASIC = 902,
        ITEM_POKEMON_STORAGE_UPGRADE = 1001,
        ITEM_ITEM_STORAGE_UPGRADE = 1002,
    }
}
declare module POGOProtos.Inventory.Item {
    export const enum ItemType {
        ITEM_TYPE_NONE = 0,
        ITEM_TYPE_POKEBALL = 1,
        ITEM_TYPE_POTION = 2,
        ITEM_TYPE_REVIVE = 3,
        ITEM_TYPE_MAP = 4,
        ITEM_TYPE_BATTLE = 5,
        ITEM_TYPE_FOOD = 6,
        ITEM_TYPE_CAMERA = 7,
        ITEM_TYPE_DISK = 8,
        ITEM_TYPE_INCUBATOR = 9,
        ITEM_TYPE_INCENSE = 10,
        ITEM_TYPE_XP_BOOST = 11,
        ITEM_TYPE_INVENTORY_UPGRADE = 12,
    }
}
declare module POGOProtos.Inventory {
    export const enum EggIncubatorType {
        INCUBATOR_UNSET = 0,
        INCUBATOR_DISTANCE = 1,
    }
}
declare module POGOProtos.Inventory {
    export const enum InventoryUpgradeType {
        UPGRADE_UNSET = 0,
        INCREASE_ITEM_STORAGE = 1,
        INCREASE_POKEMON_STORAGE = 2,
    }
}
declare module POGOProtos {
    export interface Map {
    }
}
declare module POGOProtos.Map {
    export interface MapCell {
        s2_cell_id: Long;
        current_timestamp_ms: Long;
        forts: Fort.FortData[];
        spawn_points: SpawnPoint[];
        deleted_objects: string[];
        is_truncated_list: boolean;
        fort_summaries: Fort.FortSummary[];
        decimated_spawn_points: SpawnPoint[];
        wild_pokemons: Pokemon.WildPokemon[];
        catchable_pokemons: Pokemon.MapPokemon[];
        nearby_pokemons: Pokemon.NearbyPokemon[];
    }
}
declare module POGOProtos.Map {
    export interface SpawnPoint {
        latitude: number;
        longitude: number;
    }
}
declare module POGOProtos.Map {
    export interface Fort {
    }
}
declare module POGOProtos.Map.Fort {
    export interface FortData {
        id: string;
        last_modified_timestamp_ms: Long;
        latitude: number;
        longitude: number;
        enabled: boolean;
        type: FortType;
        owned_by_team: Enums.TeamColor;
        guard_pokemon_id: Enums.PokemonId;
        guard_pokemon_cp: number;
        gym_points: Long;
        is_in_battle: boolean;
        active_fort_modifier: Inventory.Item.ItemId[];
        lure_info: FortLureInfo;
        cooldown_complete_timestamp_ms: Long;
        sponsor: FortSponsor;
        rendering_type: FortRenderingType;
    }
}
declare module POGOProtos.Map.Fort {
    export interface FortLureInfo {
        fort_id: string;
        encounter_id: Long;
        active_pokemon_id: Enums.PokemonId;
        lure_expires_timestamp_ms: Long;
    }
}
declare module POGOProtos.Map.Fort {
    export interface FortModifier {
        item_id: Inventory.Item.ItemId;
        expiration_timestamp_ms: Long;
        deployer_player_codename: string;
    }
}
declare module POGOProtos.Map.Fort {
    export interface FortSummary {
        fort_summary_id: string;
        last_modified_timestamp_ms: Long;
        latitude: number;
        longitude: number;
    }
}
declare module POGOProtos.Map.Fort {
    export const enum FortRenderingType {
        DEFAULT = 0,
        INTERNAL_TEST = 1,
    }
}
declare module POGOProtos.Map.Fort {
    export const enum FortSponsor {
        UNSET_SPONSOR = 0,
        MCDONALDS = 1,
        POKEMON_STORE = 2,
    }
}
declare module POGOProtos.Map.Fort {
    export const enum FortType {
        GYM = 0,
        CHECKPOINT = 1,
    }
}
declare module POGOProtos.Map {
    export interface Pokemon {
    }
}
declare module POGOProtos.Map.Pokemon {
    export interface MapPokemon {
        spawn_point_id: string;
        encounter_id: Long;
        pokemon_id: Enums.PokemonId;
        expiration_timestamp_ms: Long;
        latitude: number;
        longitude: number;
    }
}
declare module POGOProtos.Map.Pokemon {
    export interface NearbyPokemon {
        pokemon_id: Enums.PokemonId;
        distance_in_meters: number;
        encounter_id: Long;
        fort_id: string;
        fort_image_url: string;
    }
}
declare module POGOProtos.Map.Pokemon {
    export interface WildPokemon {
        encounter_id: Long;
        last_modified_timestamp_ms: Long;
        latitude: number;
        longitude: number;
        spawn_point_id: string;
        pokemon_data: Data.PokemonData;
        time_till_hidden_ms: number;
    }
}
declare module POGOProtos.Map {
    export const enum MapObjectsStatus {
        UNSET_STATUS = 0,
        SUCCESS = 1,
        LOCATION_UNSET = 2,
    }
}
declare module POGOProtos {
    export interface Networking {
    }
}
declare module POGOProtos.Networking {
    export interface Requests {
    }
}
declare module POGOProtos.Networking.Requests {
    export interface Request {
        request_type: RequestType;
        request_message: ByteBuffer;
    }
}
declare module POGOProtos.Networking.Requests {
    export interface Messages {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface AddFortModifierMessage {
        modifier_type: Inventory.Item.ItemId;
        fort_id: string;
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface AttackGymMessage {
        gym_id: string;
        battle_id: string;
        attack_actions: Data.Battle.BattleAction[];
        last_retrieved_actions: Data.Battle.BattleAction;
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface CatchPokemonMessage {
        encounter_id: Long;
        pokeball: Inventory.Item.ItemId;
        normalized_reticle_size: number;
        spawn_point_id: string;
        hit_pokemon: boolean;
        spin_modifier: number;
        normalized_hit_position: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface CheckAwardedBadgesMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface CheckCodenameAvailableMessage {
        codename: string;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface ClaimCodenameMessage {
        codename: string;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface CollectDailyBonusMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface CollectDailyDefenderBonusMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface DiskEncounterMessage {
        encounter_id: Long;
        fort_id: string;
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface DownloadItemTemplatesMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface DownloadRemoteConfigVersionMessage {
        platform: Enums.Platform;
        device_manufacturer: string;
        device_model: string;
        locale: string;
        app_version: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface DownloadSettingsMessage {
        hash: string;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface EchoMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface EncounterMessage {
        encounter_id: Long;
        spawn_point_id: string;
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface EncounterTutorialCompleteMessage {
        pokemon_id: Enums.PokemonId;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface EquipBadgeMessage {
        badge_type: Enums.BadgeType;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface EvolvePokemonMessage {
        pokemon_id: Long;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface FortDeployPokemonMessage {
        fort_id: string;
        pokemon_id: Long;
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface FortDetailsMessage {
        fort_id: string;
        latitude: number;
        longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface FortRecallPokemonMessage {
        fort_id: string;
        pokemon_id: Long;
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface FortSearchMessage {
        fort_id: string;
        player_latitude: number;
        player_longitude: number;
        fort_latitude: number;
        fort_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetAssetDigestMessage {
        platform: Enums.Platform;
        device_manufacturer: string;
        device_model: string;
        locale: string;
        app_version: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetDownloadUrlsMessage {
        asset_id: string[];
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetGymDetailsMessage {
        gym_id: string;
        player_latitude: number;
        player_longitude: number;
        gym_latitude: number;
        gym_longitude: number;
        client_version: string;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetHatchedEggsMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetIncensePokemonMessage {
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetInventoryMessage {
        last_timestamp_ms: Long;
        item_been_seen: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetMapObjectsMessage {
        cell_id: Long[];
        since_timestamp_ms: Long[];
        latitude: number;
        longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetPlayerMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetPlayerProfileMessage {
        player_name: string;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface GetSuggestedCodenamesMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface IncenseEncounterMessage {
        encounter_id: Long;
        encounter_location: string;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface LevelUpRewardsMessage {
        level: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface MarkTutorialCompleteMessage {
        tutorials_completed: Enums.TutorialState[];
        send_marketing_emails: boolean;
        send_push_notifications: boolean;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface NicknamePokemonMessage {
        pokemon_id: Long;
        nickname: string;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface PlayerUpdateMessage {
        latitude: number;
        longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface RecycleInventoryItemMessage {
        item_id: Inventory.Item.ItemId;
        count: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface ReleasePokemonMessage {
        pokemon_id: Long;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface SetAvatarMessage {
        player_avatar: Data.Player.PlayerAvatar;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface SetContactSettingsMessage {
        contact_settings: Data.Player.ContactSettings;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface SetFavoritePokemonMessage {
        pokemon_id: Long;
        is_favorite: boolean;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface SetPlayerTeamMessage {
        team: Enums.TeamColor;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface SfidaActionLogMessage {
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface StartGymBattleMessage {
        gym_id: string;
        attacking_pokemon_ids: Long[];
        defending_pokemon_id: Long;
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface UpgradePokemonMessage {
        pokemon_id: Long;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface UseIncenseMessage {
        incense_type: Inventory.Item.ItemId;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface UseItemCaptureMessage {
        item_id: Inventory.Item.ItemId;
        encounter_id: Long;
        spawn_point_id: string;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface UseItemEggIncubatorMessage {
        item_id: string;
        pokemon_id: Long;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface UseItemGymMessage {
        item_id: Inventory.Item.ItemId;
        gym_id: string;
        player_latitude: number;
        player_longitude: number;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface UseItemPotionMessage {
        item_id: Inventory.Item.ItemId;
        pokemon_id: Long;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface UseItemReviveMessage {
        item_id: Inventory.Item.ItemId;
        pokemon_id: Long;
    }
}
declare module POGOProtos.Networking.Requests.Messages {
    export interface UseItemXpBoostMessage {
        item_id: Inventory.Item.ItemId;
    }
}
declare module POGOProtos.Networking.Requests {
    export const enum RequestType {
        METHOD_UNSET = 0,
        PLAYER_UPDATE = 1,
        GET_PLAYER = 2,
        GET_INVENTORY = 4,
        DOWNLOAD_SETTINGS = 5,
        DOWNLOAD_ITEM_TEMPLATES = 6,
        DOWNLOAD_REMOTE_CONFIG_VERSION = 7,
        FORT_SEARCH = 101,
        ENCOUNTER = 102,
        CATCH_POKEMON = 103,
        FORT_DETAILS = 104,
        ITEM_USE = 105,
        GET_MAP_OBJECTS = 106,
        FORT_DEPLOY_POKEMON = 110,
        FORT_RECALL_POKEMON = 111,
        RELEASE_POKEMON = 112,
        USE_ITEM_POTION = 113,
        USE_ITEM_CAPTURE = 114,
        USE_ITEM_FLEE = 115,
        USE_ITEM_REVIVE = 116,
        TRADE_SEARCH = 117,
        TRADE_OFFER = 118,
        TRADE_RESPONSE = 119,
        TRADE_RESULT = 120,
        GET_PLAYER_PROFILE = 121,
        GET_ITEM_PACK = 122,
        BUY_ITEM_PACK = 123,
        BUY_GEM_PACK = 124,
        EVOLVE_POKEMON = 125,
        GET_HATCHED_EGGS = 126,
        ENCOUNTER_TUTORIAL_COMPLETE = 127,
        LEVEL_UP_REWARDS = 128,
        CHECK_AWARDED_BADGES = 129,
        USE_ITEM_GYM = 133,
        GET_GYM_DETAILS = 134,
        START_GYM_BATTLE = 135,
        ATTACK_GYM = 136,
        RECYCLE_INVENTORY_ITEM = 137,
        COLLECT_DAILY_BONUS = 138,
        USE_ITEM_XP_BOOST = 139,
        USE_ITEM_EGG_INCUBATOR = 140,
        USE_INCENSE = 141,
        GET_INCENSE_POKEMON = 142,
        INCENSE_ENCOUNTER = 143,
        ADD_FORT_MODIFIER = 144,
        DISK_ENCOUNTER = 145,
        COLLECT_DAILY_DEFENDER_BONUS = 146,
        UPGRADE_POKEMON = 147,
        SET_FAVORITE_POKEMON = 148,
        NICKNAME_POKEMON = 149,
        EQUIP_BADGE = 150,
        SET_CONTACT_SETTINGS = 151,
        GET_ASSET_DIGEST = 300,
        GET_DOWNLOAD_URLS = 301,
        GET_SUGGESTED_CODENAMES = 401,
        CHECK_CODENAME_AVAILABLE = 402,
        CLAIM_CODENAME = 403,
        SET_AVATAR = 404,
        SET_PLAYER_TEAM = 405,
        MARK_TUTORIAL_COMPLETE = 406,
        LOAD_SPAWN_POINTS = 500,
        ECHO = 666,
        DEBUG_UPDATE_INVENTORY = 700,
        DEBUG_DELETE_PLAYER = 701,
        SFIDA_REGISTRATION = 800,
        SFIDA_ACTION_LOG = 801,
        SFIDA_CERTIFICATION = 802,
        SFIDA_UPDATE = 803,
        SFIDA_ACTION = 804,
        SFIDA_DOWSER = 805,
        SFIDA_CAPTURE = 806,
    }
}
declare module POGOProtos.Networking {
    export interface Envelopes {
    }
}
declare module POGOProtos.Networking.Envelopes {
    export interface AuthTicket {
        start: ByteBuffer;
        expire_timestamp_ms: Long;
        end: ByteBuffer;
    }
}
declare module POGOProtos.Networking.Envelopes {
    export interface RequestEnvelope {
        status_code: number;
        request_id: Long;
        requests: Requests.Request[];
        unknown6: Unknown6;
        latitude: number;
        longitude: number;
        altitude: number;
        auth_info: RequestEnvelope.AuthInfo;
        auth_ticket: AuthTicket;
        unknown12: Long;
    }
}
declare module POGOProtos.Networking.Envelopes.RequestEnvelope {
    export interface AuthInfo {
        provider: string;
        token: AuthInfo.JWT;
    }
}
declare module POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo {
    export interface JWT {
        contents: string;
        unknown2: number;
    }
}
declare module POGOProtos.Networking.Envelopes {
    export interface ResponseEnvelope {
        status_code: number;
        request_id: Long;
        api_url: string;
        unknown6: Unknown6Response[];
        auth_ticket: AuthTicket;
        returns: ByteBuffer[];
        error: string;
    }
}
declare module POGOProtos.Networking.Envelopes {
    export interface Signature {
        timestamp_since_start: Long;
        location_fix: Signature.LocationFix[];
        gps_info: Signature.AndroidGpsInfo;
        sensor_info: Signature.SensorInfo;
        device_info: Signature.DeviceInfo;
        activity_status: Signature.ActivityStatus;
        location_hash1: Long;
        location_hash2: Long;
        session_hash: ByteBuffer;
        timestamp: Long;
        request_hash: Long[];
        unknown25: Long;
    }
}
declare module POGOProtos.Networking.Envelopes.Signature {
    export interface LocationFix {
        provider: string;
        timestamp_snapshot: Long;
        latitude: number;
        longitude: number;
        horizontal_accuracy: number;
        altitude: number;
        vertical_accuracy: number;
        provider_status: Long;
        floor: number;
        location_type: Long;
    }
}
declare module POGOProtos.Networking.Envelopes.Signature {
    export interface AndroidGpsInfo {
        time_to_fix: Long;
        satellites_prn: number[];
        snr: number[];
        azimuth: number[];
        elevation: number[];
        has_almanac: boolean[];
        has_ephemeris: boolean[];
        used_in_fix: boolean[];
    }
}
declare module POGOProtos.Networking.Envelopes.Signature {
    export interface SensorInfo {
        timestamp_snapshot: Long;
        magnetometer_x: number;
        magnetometer_y: number;
        magnetometer_z: number;
        angle_normalized_x: number;
        angle_normalized_y: number;
        angle_normalized_z: number;
        accel_raw_x: number;
        accel_raw_y: number;
        accel_raw_z: number;
        gyroscope_raw_x: number;
        gyroscope_raw_y: number;
        gyroscope_raw_z: number;
        accel_normalized_x: number;
        accel_normalized_y: number;
        accel_normalized_z: number;
        accelerometer_axes: Long;
    }
}
declare module POGOProtos.Networking.Envelopes.Signature {
    export interface DeviceInfo {
        device_id: string;
        android_board_name: string;
        android_bootloader: string;
        device_brand: string;
        device_model: string;
        device_model_identifier: string;
        device_model_boot: string;
        hardware_manufacturer: string;
        hardware_model: string;
        firmware_brand: string;
        firmware_tags: string;
        firmware_type: string;
        firmware_fingerprint: string;
    }
}
declare module POGOProtos.Networking.Envelopes.Signature {
    export interface ActivityStatus {
        start_time_ms: Long;
        unknown_status: boolean;
        walking: boolean;
        running: boolean;
        stationary: boolean;
        automotive: boolean;
        tilting: boolean;
        cycling: boolean;
        status: ByteBuffer;
    }
}
declare module POGOProtos.Networking.Envelopes {
    export interface Unknown6 {
        request_type: number;
        unknown2: Unknown6.Unknown2;
    }
}
declare module POGOProtos.Networking.Envelopes.Unknown6 {
    export interface Unknown2 {
        encrypted_signature: ByteBuffer;
    }
}
declare module POGOProtos.Networking.Envelopes {
    export interface Unknown6Response {
        response_type: number;
        unknown2: Unknown6Response.Unknown2;
    }
}
declare module POGOProtos.Networking.Envelopes.Unknown6Response {
    export interface Unknown2 {
        unknown1: Long;
        items: Unknown2.StoreItem[];
        player_currencies: Data.Player.Currency[];
        unknown4: string;
    }
}
declare module POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2 {
    export interface StoreItem {
        item_id: string;
        is_iap: boolean;
        currency_to_buy: Data.Player.Currency;
        yields_currency: Data.Player.Currency;
        yields_item: Inventory.Item.ItemData;
        tags: StoreItem.Tag[];
        unknown7: number;
    }
}
declare module POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem {
    export interface Tag {
        key: string;
        value: string;
    }
}
declare module POGOProtos.Networking {
    export interface Responses {
    }
}
declare module POGOProtos.Networking.Responses {
    export interface AddFortModifierResponse {
        result: AddFortModifierResponse.Result;
        fort_details: FortDetailsResponse;
    }
}
declare module POGOProtos.Networking.Responses.AddFortModifierResponse {
    export const enum Result {
        NO_RESULT_SET = 0,
        SUCCESS = 1,
        FORT_ALREADY_HAS_MODIFIER = 2,
        TOO_FAR_AWAY = 3,
        NO_ITEM_IN_INVENTORY = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface AttackGymResponse {
        result: AttackGymResponse.Result;
        battle_log: Data.Battle.BattleLog;
        battle_id: string;
        active_defender: Data.Battle.BattlePokemonInfo;
        active_attacker: Data.Battle.BattlePokemonInfo;
    }
}
declare module POGOProtos.Networking.Responses.AttackGymResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_INVALID_ATTACK_ACTIONS = 2,
        ERROR_NOT_IN_RANGE = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface CatchPokemonResponse {
        status: CatchPokemonResponse.CatchStatus;
        miss_percent: number;
        captured_pokemon_id: Long;
        capture_award: Data.Capture.CaptureAward;
    }
}
declare module POGOProtos.Networking.Responses.CatchPokemonResponse {
    export const enum CatchStatus {
        CATCH_ERROR = 0,
        CATCH_SUCCESS = 1,
        CATCH_ESCAPE = 2,
        CATCH_FLEE = 3,
        CATCH_MISSED = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface CheckAwardedBadgesResponse {
        success: boolean;
        awarded_badges: Enums.BadgeType[];
        awarded_badge_levels: number[];
    }
}
declare module POGOProtos.Networking.Responses {
    export interface CheckCodenameAvailableResponse {
        codename: string;
        user_message: string;
        is_assignable: boolean;
        status: CheckCodenameAvailableResponse.Status;
    }
}
declare module POGOProtos.Networking.Responses.CheckCodenameAvailableResponse {
    export const enum Status {
        UNSET = 0,
        SUCCESS = 1,
        CODENAME_NOT_AVAILABLE = 2,
        CODENAME_NOT_VALID = 3,
        CURRENT_OWNER = 4,
        CODENAME_CHANGE_NOT_ALLOWED = 5,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface ClaimCodenameResponse {
        codename: string;
        user_message: string;
        is_assignable: boolean;
        status: ClaimCodenameResponse.Status;
        updated_player: Data.PlayerData;
    }
}
declare module POGOProtos.Networking.Responses.ClaimCodenameResponse {
    export const enum Status {
        UNSET = 0,
        SUCCESS = 1,
        CODENAME_NOT_AVAILABLE = 2,
        CODENAME_NOT_VALID = 3,
        CURRENT_OWNER = 4,
        CODENAME_CHANGE_NOT_ALLOWED = 5,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface CollectDailyBonusResponse {
        result: CollectDailyBonusResponse.Result;
    }
}
declare module POGOProtos.Networking.Responses.CollectDailyBonusResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        FAILURE = 2,
        TOO_SOON = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface CollectDailyDefenderBonusResponse {
        result: CollectDailyDefenderBonusResponse.Result;
        currency_type: string[];
        currency_awarded: number[];
        defenders_count: number;
    }
}
declare module POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        FAILURE = 2,
        TOO_SOON = 3,
        NO_DEFENDERS = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface DiskEncounterResponse {
        result: DiskEncounterResponse.Result;
        pokemon_data: Data.PokemonData;
        capture_probability: Data.Capture.CaptureProbability;
    }
}
declare module POGOProtos.Networking.Responses.DiskEncounterResponse {
    export const enum Result {
        UNKNOWN = 0,
        SUCCESS = 1,
        NOT_AVAILABLE = 2,
        NOT_IN_RANGE = 3,
        ENCOUNTER_ALREADY_FINISHED = 4,
        POKEMON_INVENTORY_FULL = 5,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface DownloadItemTemplatesResponse {
        success: boolean;
        item_templates: DownloadItemTemplatesResponse.ItemTemplate[];
        timestamp_ms: Long;
    }
}
declare module POGOProtos.Networking.Responses.DownloadItemTemplatesResponse {
    export interface ItemTemplate {
        template_id: string;
        pokemon_settings: Settings.Master.PokemonSettings;
        item_settings: Settings.Master.ItemSettings;
        move_settings: Settings.Master.MoveSettings;
        move_sequence_settings: Settings.Master.MoveSequenceSettings;
        type_effective: Settings.Master.TypeEffectiveSettings;
        badge_settings: Settings.Master.BadgeSettings;
        camera: Settings.Master.CameraSettings;
        player_level: Settings.Master.PlayerLevelSettings;
        gym_level: Settings.Master.GymLevelSettings;
        battle_settings: Settings.Master.GymBattleSettings;
        encounter_settings: Settings.Master.EncounterSettings;
        iap_item_display: Settings.Master.IapItemDisplay;
        iap_settings: Settings.Master.IapSettings;
        pokemon_upgrades: Settings.Master.PokemonUpgradeSettings;
        equipped_badges: Settings.Master.EquippedBadgeSettings;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface DownloadRemoteConfigVersionResponse {
        result: DownloadRemoteConfigVersionResponse.Result;
        item_templates_timestamp_ms: Long;
        asset_digest_timestamp_ms: Long;
    }
}
declare module POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface DownloadSettingsResponse {
        error: string;
        hash: string;
        settings: Settings.GlobalSettings;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface EchoResponse {
        context: string;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface EncounterResponse {
        wild_pokemon: Map.Pokemon.WildPokemon;
        background: EncounterResponse.Background;
        status: EncounterResponse.Status;
        capture_probability: Data.Capture.CaptureProbability;
    }
}
declare module POGOProtos.Networking.Responses.EncounterResponse {
    export const enum Background {
        PARK = 0,
        DESERT = 1,
    }
}
declare module POGOProtos.Networking.Responses.EncounterResponse {
    export const enum Status {
        ENCOUNTER_ERROR = 0,
        ENCOUNTER_SUCCESS = 1,
        ENCOUNTER_NOT_FOUND = 2,
        ENCOUNTER_CLOSED = 3,
        ENCOUNTER_POKEMON_FLED = 4,
        ENCOUNTER_NOT_IN_RANGE = 5,
        ENCOUNTER_ALREADY_HAPPENED = 6,
        POKEMON_INVENTORY_FULL = 7,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface EncounterTutorialCompleteResponse {
        result: EncounterTutorialCompleteResponse.Result;
        pokemon_data: Data.PokemonData;
        capture_award: Data.Capture.CaptureAward;
    }
}
declare module POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_INVALID_POKEMON = 2,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface EquipBadgeResponse {
        result: EquipBadgeResponse.Result;
        equipped: Data.Player.EquippedBadge;
    }
}
declare module POGOProtos.Networking.Responses.EquipBadgeResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        COOLDOWN_ACTIVE = 2,
        NOT_QUALIFIED = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface EvolvePokemonResponse {
        result: EvolvePokemonResponse.Result;
        evolved_pokemon_data: Data.PokemonData;
        experience_awarded: number;
        candy_awarded: number;
    }
}
declare module POGOProtos.Networking.Responses.EvolvePokemonResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        FAILED_POKEMON_MISSING = 2,
        FAILED_INSUFFICIENT_RESOURCES = 3,
        FAILED_POKEMON_CANNOT_EVOLVE = 4,
        FAILED_POKEMON_IS_DEPLOYED = 5,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface FortDeployPokemonResponse {
        result: FortDeployPokemonResponse.Result;
        fort_details: FortDetailsResponse;
        pokemon_data: Data.PokemonData;
        gym_state: Data.Gym.GymState;
    }
}
declare module POGOProtos.Networking.Responses.FortDeployPokemonResponse {
    export const enum Result {
        NO_RESULT_SET = 0,
        SUCCESS = 1,
        ERROR_ALREADY_HAS_POKEMON_ON_FORT = 2,
        ERROR_OPPOSING_TEAM_OWNS_FORT = 3,
        ERROR_FORT_IS_FULL = 4,
        ERROR_NOT_IN_RANGE = 5,
        ERROR_PLAYER_HAS_NO_TEAM = 6,
        ERROR_POKEMON_NOT_FULL_HP = 7,
        ERROR_PLAYER_BELOW_MINIMUM_LEVEL = 8,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface FortDetailsResponse {
        fort_id: string;
        team_color: Enums.TeamColor;
        pokemon_data: Data.PokemonData;
        name: string;
        image_urls: string[];
        fp: number;
        stamina: number;
        max_stamina: number;
        type: Map.Fort.FortType;
        latitude: number;
        longitude: number;
        description: string;
        modifiers: Map.Fort.FortModifier[];
    }
}
declare module POGOProtos.Networking.Responses {
    export interface FortRecallPokemonResponse {
        result: FortRecallPokemonResponse.Result;
        fort_details: FortDetailsResponse;
    }
}
declare module POGOProtos.Networking.Responses.FortRecallPokemonResponse {
    export const enum Result {
        NO_RESULT_SET = 0,
        SUCCESS = 1,
        ERROR_NOT_IN_RANGE = 2,
        ERROR_POKEMON_NOT_ON_FORT = 3,
        ERROR_NO_PLAYER = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface FortSearchResponse {
        result: FortSearchResponse.Result;
        items_awarded: Inventory.Item.ItemAward[];
        gems_awarded: number;
        pokemon_data_egg: Data.PokemonData;
        experience_awarded: number;
        cooldown_complete_timestamp_ms: Long;
        chain_hack_sequence_number: number;
    }
}
declare module POGOProtos.Networking.Responses.FortSearchResponse {
    export const enum Result {
        NO_RESULT_SET = 0,
        SUCCESS = 1,
        OUT_OF_RANGE = 2,
        IN_COOLDOWN_PERIOD = 3,
        INVENTORY_FULL = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetAssetDigestResponse {
        digest: Data.AssetDigestEntry[];
        timestamp_ms: Long;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetDownloadUrlsResponse {
        download_urls: Data.DownloadUrlEntry[];
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetGymDetailsResponse {
        gym_state: Data.Gym.GymState;
        name: string;
        urls: string[];
        result: GetGymDetailsResponse.Result;
        description: string;
    }
}
declare module POGOProtos.Networking.Responses.GetGymDetailsResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_NOT_IN_RANGE = 2,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetHatchedEggsResponse {
        success: boolean;
        pokemon_id: Long[];
        experience_awarded: number[];
        candy_awarded: number[];
        stardust_awarded: number[];
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetIncensePokemonResponse {
        result: GetIncensePokemonResponse.Result;
        pokemon_id: Enums.PokemonId;
        latitude: number;
        longitude: number;
        encounter_location: string;
        encounter_id: Long;
        disappear_timestamp_ms: Long;
    }
}
declare module POGOProtos.Networking.Responses.GetIncensePokemonResponse {
    export const enum Result {
        INCENSE_ENCOUNTER_UNKNOWN = 0,
        INCENSE_ENCOUNTER_AVAILABLE = 1,
        INCENSE_ENCOUNTER_NOT_AVAILABLE = 2,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetInventoryResponse {
        success: boolean;
        inventory_delta: Inventory.InventoryDelta;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetMapObjectsResponse {
        map_cells: Map.MapCell[];
        status: Map.MapObjectsStatus;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetPlayerProfileResponse {
        result: GetPlayerProfileResponse.Result;
        start_time: Long;
        badges: Data.PlayerBadge[];
    }
}
declare module POGOProtos.Networking.Responses.GetPlayerProfileResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetPlayerResponse {
        success: boolean;
        player_data: Data.PlayerData;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface GetSuggestedCodenamesResponse {
        codenames: string[];
        success: boolean;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface IncenseEncounterResponse {
        result: IncenseEncounterResponse.Result;
        pokemon_data: Data.PokemonData;
        capture_probability: Data.Capture.CaptureProbability;
    }
}
declare module POGOProtos.Networking.Responses.IncenseEncounterResponse {
    export const enum Result {
        INCENSE_ENCOUNTER_UNKNOWN = 0,
        INCENSE_ENCOUNTER_SUCCESS = 1,
        INCENSE_ENCOUNTER_NOT_AVAILABLE = 2,
        POKEMON_INVENTORY_FULL = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface LevelUpRewardsResponse {
        result: LevelUpRewardsResponse.Result;
        items_awarded: Inventory.Item.ItemAward[];
        items_unlocked: Inventory.Item.ItemId[];
    }
}
declare module POGOProtos.Networking.Responses.LevelUpRewardsResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        AWARDED_ALREADY = 2,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface MarkTutorialCompleteResponse {
        success: boolean;
        player_data: Data.PlayerData;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface NicknamePokemonResponse {
        result: NicknamePokemonResponse.Result;
    }
}
declare module POGOProtos.Networking.Responses.NicknamePokemonResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_INVALID_NICKNAME = 2,
        ERROR_POKEMON_NOT_FOUND = 3,
        ERROR_POKEMON_IS_EGG = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface PlayerUpdateResponse {
        wild_pokemons: Map.Pokemon.WildPokemon[];
        forts: Map.Fort.FortData[];
        forts_nearby: number;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface RecycleInventoryItemResponse {
        result: RecycleInventoryItemResponse.Result;
        new_count: number;
    }
}
declare module POGOProtos.Networking.Responses.RecycleInventoryItemResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_NOT_ENOUGH_COPIES = 2,
        ERROR_CANNOT_RECYCLE_INCUBATORS = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface ReleasePokemonResponse {
        result: ReleasePokemonResponse.Result;
        candy_awarded: number;
    }
}
declare module POGOProtos.Networking.Responses.ReleasePokemonResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        POKEMON_DEPLOYED = 2,
        FAILED = 3,
        ERROR_POKEMON_IS_EGG = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface SetAvatarResponse {
        status: SetAvatarResponse.Status;
        player_data: Data.PlayerData;
    }
}
declare module POGOProtos.Networking.Responses.SetAvatarResponse {
    export const enum Status {
        UNSET = 0,
        SUCCESS = 1,
        AVATAR_ALREADY_SET = 2,
        FAILURE = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface SetContactSettingsResponse {
        status: SetContactSettingsResponse.Status;
        player_data: Data.PlayerData;
    }
}
declare module POGOProtos.Networking.Responses.SetContactSettingsResponse {
    export const enum Status {
        UNSET = 0,
        SUCCESS = 1,
        FAILURE = 2,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface SetFavoritePokemonResponse {
        result: SetFavoritePokemonResponse.Result;
    }
}
declare module POGOProtos.Networking.Responses.SetFavoritePokemonResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_POKEMON_NOT_FOUND = 2,
        ERROR_POKEMON_IS_EGG = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface SetPlayerTeamResponse {
        status: SetPlayerTeamResponse.Status;
        player_data: Data.PlayerData;
    }
}
declare module POGOProtos.Networking.Responses.SetPlayerTeamResponse {
    export const enum Status {
        UNSET = 0,
        SUCCESS = 1,
        TEAM_ALREADY_SET = 2,
        FAILURE = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface SfidaActionLogResponse {
        result: SfidaActionLogResponse.Result;
        log_entries: Data.Logs.ActionLogEntry[];
    }
}
declare module POGOProtos.Networking.Responses.SfidaActionLogResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface StartGymBattleResponse {
        result: StartGymBattleResponse.Result;
        battle_start_timestamp_ms: Long;
        battle_end_timestamp_ms: Long;
        battle_id: string;
        defender: Data.Battle.BattleParticipant;
        battle_log: Data.Battle.BattleLog;
    }
}
declare module POGOProtos.Networking.Responses.StartGymBattleResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_GYM_NOT_FOUND = 2,
        ERROR_GYM_NEUTRAL = 3,
        ERROR_GYM_WRONG_TEAM = 4,
        ERROR_GYM_EMPTY = 5,
        ERROR_INVALID_DEFENDER = 6,
        ERROR_TRAINING_INVALID_ATTACKER_COUNT = 7,
        ERROR_ALL_POKEMON_FAINTED = 8,
        ERROR_TOO_MANY_BATTLES = 9,
        ERROR_TOO_MANY_PLAYERS = 10,
        ERROR_GYM_BATTLE_LOCKOUT = 11,
        ERROR_PLAYER_BELOW_MINIMUM_LEVEL = 12,
        ERROR_NOT_IN_RANGE = 13,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface UpgradePokemonResponse {
        result: UpgradePokemonResponse.Result;
        upgraded_pokemon: Data.PokemonData;
    }
}
declare module POGOProtos.Networking.Responses.UpgradePokemonResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_POKEMON_NOT_FOUND = 2,
        ERROR_INSUFFICIENT_RESOURCES = 3,
        ERROR_UPGRADE_NOT_AVAILABLE = 4,
        ERROR_POKEMON_IS_DEPLOYED = 5,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface UseIncenseResponse {
        result: UseIncenseResponse.Result;
        applied_incense: Inventory.AppliedItem;
    }
}
declare module POGOProtos.Networking.Responses.UseIncenseResponse {
    export const enum Result {
        UNKNOWN = 0,
        SUCCESS = 1,
        INCENSE_ALREADY_ACTIVE = 2,
        NONE_IN_INVENTORY = 3,
        LOCATION_UNSET = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface UseItemCaptureResponse {
        success: boolean;
        item_capture_mult: number;
        item_flee_mult: number;
        stop_movement: boolean;
        stop_attack: boolean;
        target_max: boolean;
        target_slow: boolean;
    }
}
declare module POGOProtos.Networking.Responses {
    export interface UseItemEggIncubatorResponse {
        result: UseItemEggIncubatorResponse.Result;
        egg_incubator: Inventory.EggIncubator;
    }
}
declare module POGOProtos.Networking.Responses.UseItemEggIncubatorResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_INCUBATOR_NOT_FOUND = 2,
        ERROR_POKEMON_EGG_NOT_FOUND = 3,
        ERROR_POKEMON_ID_NOT_EGG = 4,
        ERROR_INCUBATOR_ALREADY_IN_USE = 5,
        ERROR_POKEMON_ALREADY_INCUBATING = 6,
        ERROR_INCUBATOR_NO_USES_REMAINING = 7,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface UseItemGymResponse {
        result: UseItemGymResponse.Result;
        updated_gp: Long;
    }
}
declare module POGOProtos.Networking.Responses.UseItemGymResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_CANNOT_USE = 2,
        ERROR_NOT_IN_RANGE = 3,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface UseItemPotionResponse {
        result: UseItemPotionResponse.Result;
        stamina: number;
    }
}
declare module POGOProtos.Networking.Responses.UseItemPotionResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_NO_POKEMON = 2,
        ERROR_CANNOT_USE = 3,
        ERROR_DEPLOYED_TO_FORT = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface UseItemReviveResponse {
        result: UseItemReviveResponse.Result;
        stamina: number;
    }
}
declare module POGOProtos.Networking.Responses.UseItemReviveResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_NO_POKEMON = 2,
        ERROR_CANNOT_USE = 3,
        ERROR_DEPLOYED_TO_FORT = 4,
    }
}
declare module POGOProtos.Networking.Responses {
    export interface UseItemXpBoostResponse {
        result: UseItemXpBoostResponse.Result;
        applied_items: Inventory.AppliedItems;
    }
}
declare module POGOProtos.Networking.Responses.UseItemXpBoostResponse {
    export const enum Result {
        UNSET = 0,
        SUCCESS = 1,
        ERROR_INVALID_ITEM_TYPE = 2,
        ERROR_XP_BOOST_ALREADY_ACTIVE = 3,
        ERROR_NO_ITEMS_REMAINING = 4,
        ERROR_LOCATION_UNSET = 5,
    }
}
declare module POGOProtos {
    export interface Settings {
    }
}
declare module POGOProtos.Settings {
    export interface DownloadSettingsAction {
        hash: string;
    }
}
declare module POGOProtos.Settings {
    export interface FortSettings {
        interaction_range_meters: number;
        max_total_deployed_pokemon: number;
        max_player_deployed_pokemon: number;
        deploy_stamina_multiplier: number;
        deploy_attack_multiplier: number;
        far_interaction_range_meters: number;
    }
}
declare module POGOProtos.Settings {
    export interface GlobalSettings {
        fort_settings: FortSettings;
        map_settings: MapSettings;
        level_settings: LevelSettings;
        inventory_settings: InventorySettings;
        minimum_client_version: string;
        gps_settings: GpsSettings;
    }
}
declare module POGOProtos.Settings {
    export interface GpsSettings {
        driving_warning_speed_meters_per_second: number;
        driving_warning_cooldown_minutes: number;
        driving_speed_sample_interval_seconds: number;
        driving_speed_sample_count: number;
    }
}
declare module POGOProtos.Settings {
    export interface InventorySettings {
        max_pokemon: number;
        max_bag_items: number;
        base_pokemon: number;
        base_bag_items: number;
        base_eggs: number;
    }
}
declare module POGOProtos.Settings {
    export interface LevelSettings {
        trainer_cp_modifier: number;
        trainer_difficulty_modifier: number;
    }
}
declare module POGOProtos.Settings {
    export interface MapSettings {
        pokemon_visible_range: number;
        poke_nav_range_meters: number;
        encounter_range_meters: number;
        get_map_objects_min_refresh_seconds: number;
        get_map_objects_max_refresh_seconds: number;
        get_map_objects_min_distance_meters: number;
        google_maps_api_key: string;
    }
}
declare module POGOProtos.Settings {
    export interface Master {
    }
}
declare module POGOProtos.Settings.Master {
    export interface BadgeSettings {
        badge_type: Enums.BadgeType;
        badge_rank: number;
        targets: number[];
    }
}
declare module POGOProtos.Settings.Master {
    export interface CameraSettings {
        next_camera: string;
        interpolation: Enums.CameraInterpolation[];
        target_type: Enums.CameraTarget[];
        ease_in_speed: number[];
        east_out_speed: number[];
        duration_seconds: number[];
        wait_seconds: number[];
        transition_seconds: number[];
        angle_degree: number[];
        angle_offset_degree: number[];
        pitch_degree: number[];
        pitch_offset_degree: number[];
        roll_degree: number[];
        distance_meters: number[];
        height_percent: number[];
        vert_ctr_ratio: number[];
    }
}
declare module POGOProtos.Settings.Master {
    export interface EncounterSettings {
        spin_bonus_threshold: number;
        excellent_throw_threshold: number;
        great_throw_threshold: number;
        nice_throw_threshold: number;
        milestone_threshold: number;
    }
}
declare module POGOProtos.Settings.Master {
    export interface EquippedBadgeSettings {
        equip_badge_cooldown_ms: Long;
        catch_probability_bonus: number[];
        flee_probability_bonus: number[];
    }
}
declare module POGOProtos.Settings.Master {
    export interface GymBattleSettings {
        energy_per_sec: number;
        dodge_energy_cost: number;
        retarget_seconds: number;
        enemy_attack_interval: number;
        attack_server_interval: number;
        round_duration_seconds: number;
        bonus_time_per_ally_seconds: number;
        maximum_attackers_per_battle: number;
        same_type_attack_bonus_multiplier: number;
        maximum_energy: number;
        energy_delta_per_health_lost: number;
        dodge_duration_ms: number;
        minimum_player_level: number;
        swap_duration_ms: number;
        dodge_damage_reduction_percent: number;
    }
}
declare module POGOProtos.Settings.Master {
    export interface GymLevelSettings {
        required_experience: number[];
        leader_slots: number[];
        trainer_slots: number[];
        search_roll_bonus: number[];
    }
}
declare module POGOProtos.Settings.Master {
    export interface IapItemDisplay {
        sku: string;
        category: Enums.HoloIapItemCategory;
        sort_order: number;
        item_ids: Inventory.Item.ItemId[];
        counts: number[];
    }
}
declare module POGOProtos.Settings.Master {
    export interface IapSettings {
        daily_bonus_coins: number;
        daily_defender_bonus_per_pokemon: number[];
        daily_defender_bonus_max_defenders: number;
        daily_defender_bonus_currency: string[];
        min_time_between_claims_ms: Long;
        daily_bonus_enabled: boolean;
        daily_defender_bonus_enabled: boolean;
    }
}
declare module POGOProtos.Settings.Master {
    export interface ItemSettings {
        item_id: Inventory.Item.ItemId;
        item_type: Inventory.Item.ItemType;
        category: Enums.ItemCategory;
        drop_freq: number;
        drop_trainer_level: number;
        pokeball: Item.PokeballAttributes;
        potion: Item.PotionAttributes;
        revive: Item.ReviveAttributes;
        battle: Item.BattleAttributes;
        food: Item.FoodAttributes;
        inventory_upgrade: Item.InventoryUpgradeAttributes;
        xp_boost: Item.ExperienceBoostAttributes;
        incense: Item.IncenseAttributes;
        egg_incubator: Item.EggIncubatorAttributes;
        fort_modifier: Item.FortModifierAttributes;
    }
}
declare module POGOProtos.Settings.Master {
    export interface MoveSequenceSettings {
        sequence: string[];
    }
}
declare module POGOProtos.Settings.Master {
    export interface MoveSettings {
        movement_id: Enums.PokemonMove;
        animation_id: number;
        pokemon_type: Enums.PokemonType;
        power: number;
        accuracy_chance: number;
        critical_chance: number;
        heal_scalar: number;
        stamina_loss_scalar: number;
        trainer_level_min: number;
        trainer_level_max: number;
        vfx_name: string;
        duration_ms: number;
        damage_window_start_ms: number;
        damage_window_end_ms: number;
        energy_delta: number;
    }
}
declare module POGOProtos.Settings.Master {
    export interface PlayerLevelSettings {
        rank_num: number[];
        required_experience: number[];
        cp_multiplier: number[];
        max_egg_player_level: number;
        max_encounter_player_level: number;
    }
}
declare module POGOProtos.Settings.Master {
    export interface PokemonSettings {
        pokemon_id: Enums.PokemonId;
        model_scale: number;
        type: Enums.PokemonType;
        type_2: Enums.PokemonType;
        camera: Pokemon.CameraAttributes;
        encounter: Pokemon.EncounterAttributes;
        stats: Pokemon.StatsAttributes;
        quick_moves: Enums.PokemonMove[];
        cinematic_moves: Enums.PokemonMove[];
        animation_time: number[];
        evolution_ids: Enums.PokemonId[];
        evolution_pips: number;
        rarity: Enums.PokemonRarity;
        pokedex_height_m: number;
        pokedex_weight_kg: number;
        parent_pokemon_id: Enums.PokemonId;
        height_std_dev: number;
        weight_std_dev: number;
        km_distance_to_hatch: number;
        family_id: Enums.PokemonFamilyId;
        candy_to_evolve: number;
    }
}
declare module POGOProtos.Settings.Master {
    export interface PokemonUpgradeSettings {
        upgrades_per_level: number;
        allowed_levels_above_player: number;
        candy_cost: number[];
        stardust_cost: number[];
    }
}
declare module POGOProtos.Settings.Master {
    export interface TypeEffectiveSettings {
        attack_scalar: number[];
        attack_type: Enums.PokemonType;
    }
}
declare module POGOProtos.Settings.Master {
    export interface Item {
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface BattleAttributes {
        sta_percent: number;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface EggIncubatorAttributes {
        incubator_type: Inventory.EggIncubatorType;
        uses: number;
        distance_multiplier: number;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface ExperienceBoostAttributes {
        xp_multiplier: number;
        boost_duration_ms: number;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface FoodAttributes {
        item_effect: Enums.ItemEffect[];
        item_effect_percent: number[];
        growth_percent: number;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface FortModifierAttributes {
        modifier_lifetime_seconds: number;
        troy_disk_num_pokemon_spawned: number;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface IncenseAttributes {
        incense_lifetime_seconds: number;
        pokemon_type: Enums.PokemonType[];
        pokemon_incense_type_probability: number;
        standing_time_between_encounters_seconds: number;
        moving_time_between_encounter_seconds: number;
        distance_required_for_shorter_interval_meters: number;
        pokemon_attracted_length_sec: number;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface InventoryUpgradeAttributes {
        additional_storage: number;
        upgrade_type: Inventory.InventoryUpgradeType;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface PokeballAttributes {
        item_effect: Enums.ItemEffect;
        capture_multi: number;
        capture_multi_effect: number;
        item_effect_mod: number;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface PotionAttributes {
        sta_percent: number;
        sta_amount: number;
    }
}
declare module POGOProtos.Settings.Master.Item {
    export interface ReviveAttributes {
        sta_percent: number;
    }
}
declare module POGOProtos.Settings.Master {
    export interface Pokemon {
    }
}
declare module POGOProtos.Settings.Master.Pokemon {
    export interface CameraAttributes {
        disk_radius_m: number;
        cylinder_radius_m: number;
        cylinder_height_m: number;
        cylinder_ground_m: number;
        shoulder_mode_scale: number;
    }
}
declare module POGOProtos.Settings.Master.Pokemon {
    export interface EncounterAttributes {
        base_capture_rate: number;
        base_flee_rate: number;
        collision_radius_m: number;
        collision_height_m: number;
        collision_head_radius_m: number;
        movement_type: Enums.PokemonMovementType;
        movement_timer_s: number;
        jump_time_s: number;
        attack_timer_s: number;
    }
}
declare module POGOProtos.Settings.Master.Pokemon {
    export interface StatsAttributes {
        base_stamina: number;
        base_attack: number;
        base_defense: number;
        dodge_energy_delta: number;
    }
}
