
/**
 * @see https://htmlpreview.github.io/?https://raw.githubusercontent.com/dcodeIO/protobuf.js/master/docs/ProtoBuf.Builder.Message.html
 */
declare abstract class ProtoBufMessage {
  static decode64(str?: string): any;
  static decodeDelimited(buffer?: ByteBuffer | ArrayBuffer | Buffer | string, enc?: string): any;
  static decodeHex(str?: string): any;
  static decodeJSON(str?: string): any;

  add(key: string, value: any, noAssert?: boolean): any;
  calculate(): number;
  encode(buffer?, noVerify?: boolean): any;
  encode64(): string;
  encodeAB(): any;
  encodeDelimited(buffer?: ByteBuffer | boolean, noVerify?: boolean);
  encodeHex(): string;
  encodeJSON(): string;
  encodeNB(): any;
  get(key: string, noAssert?: boolean): any;
  set(value: any, noAssert?: boolean): any;
  toArrayBuffer(): ArrayBuffer;
  toBase64(): string;
  toBuffer(): any;
  toHex(): any;
  toRaw(): any;
  toString(): string;
}


export namespace Data {
  
  export class AssetDigestEntry extends ProtoBufMessage {
    constructor(data: AssetDigestEntryData);
    static decode(buffer?: any, length?: number | string, enc?: string): AssetDigestEntry;
    asset_id: string;
    getAssetId(): string;
    setAssetId(value: any, noAssert?: boolean);
    bundle_name: string;
    getBundleName(): string;
    setBundleName(value: any, noAssert?: boolean);
    version: number;
    getVersion(): number;
    setVersion(value: any, noAssert?: boolean);
    checksum: number;
    getChecksum(): number;
    setChecksum(value: any, noAssert?: boolean);
    size: number;
    getSize(): number;
    setSize(value: any, noAssert?: boolean);
    key: ByteBuffer;
    getKey(): ByteBuffer;
    setKey(value: any, noAssert?: boolean);
  }
  
  interface AssetDigestEntryData {
    asset_id?: string;
    bundle_name?: string;
    version?: number;
    checksum?: number;
    size?: number;
    key?: ByteBuffer;
  }


  export class DownloadUrlEntry extends ProtoBufMessage {
    constructor(data: DownloadUrlEntryData);
    static decode(buffer?: any, length?: number | string, enc?: string): DownloadUrlEntry;
    asset_id: string;
    getAssetId(): string;
    setAssetId(value: any, noAssert?: boolean);
    url: string;
    getUrl(): string;
    setUrl(value: any, noAssert?: boolean);
    size: number;
    getSize(): number;
    setSize(value: any, noAssert?: boolean);
    checksum: number;
    getChecksum(): number;
    setChecksum(value: any, noAssert?: boolean);
  }
  
  interface DownloadUrlEntryData {
    asset_id?: string;
    url?: string;
    size?: number;
    checksum?: number;
  }


  export class PlayerBadge extends ProtoBufMessage {
    constructor(data: PlayerBadgeData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerBadge;
    badge_type: Enums.BadgeType;
    getBadgeType(): Enums.BadgeType;
    setBadgeType(value: any, noAssert?: boolean);
    rank: number;
    getRank(): number;
    setRank(value: any, noAssert?: boolean);
    start_value: number;
    getStartValue(): number;
    setStartValue(value: any, noAssert?: boolean);
    end_value: number;
    getEndValue(): number;
    setEndValue(value: any, noAssert?: boolean);
    current_value: number;
    getCurrentValue(): number;
    setCurrentValue(value: any, noAssert?: boolean);
  }
  
  interface PlayerBadgeData {
    badge_type?: Enums.BadgeType;
    rank?: number;
    start_value?: number;
    end_value?: number;
    current_value?: number;
  }


  export class PlayerData extends ProtoBufMessage {
    constructor(data: PlayerDataData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerData;
    creation_timestamp_ms: number;
    getCreationTimestampMs(): number;
    setCreationTimestampMs(value: any, noAssert?: boolean);
    username: string;
    getUsername(): string;
    setUsername(value: any, noAssert?: boolean);
    team: Enums.TeamColor;
    getTeam(): Enums.TeamColor;
    setTeam(value: any, noAssert?: boolean);
    tutorial_state: Enums.TutorialState[];
    getTutorialState(): Enums.TutorialState[];
    setTutorialState(value: any, noAssert?: boolean);
    avatar: Player.PlayerAvatar;
    getAvatar(): Player.PlayerAvatar;
    setAvatar(value: any, noAssert?: boolean);
    max_pokemon_storage: number;
    getMaxPokemonStorage(): number;
    setMaxPokemonStorage(value: any, noAssert?: boolean);
    max_item_storage: number;
    getMaxItemStorage(): number;
    setMaxItemStorage(value: any, noAssert?: boolean);
    daily_bonus: Player.DailyBonus;
    getDailyBonus(): Player.DailyBonus;
    setDailyBonus(value: any, noAssert?: boolean);
    equipped_badge: Player.EquippedBadge;
    getEquippedBadge(): Player.EquippedBadge;
    setEquippedBadge(value: any, noAssert?: boolean);
    contact_settings: Player.ContactSettings;
    getContactSettings(): Player.ContactSettings;
    setContactSettings(value: any, noAssert?: boolean);
    currencies: Player.Currency[];
    getCurrencies(): Player.Currency[];
    setCurrencies(value: any, noAssert?: boolean);
  }
  
  interface PlayerDataData {
    creation_timestamp_ms?: number;
    username?: string;
    team?: Enums.TeamColor;
    tutorial_state: Enums.TutorialState[];
    avatar?: Player.PlayerAvatar;
    max_pokemon_storage?: number;
    max_item_storage?: number;
    daily_bonus?: Player.DailyBonus;
    equipped_badge?: Player.EquippedBadge;
    contact_settings?: Player.ContactSettings;
    currencies: Player.Currency[];
  }


  export class PokedexEntry extends ProtoBufMessage {
    constructor(data: PokedexEntryData);
    static decode(buffer?: any, length?: number | string, enc?: string): PokedexEntry;
    pokemon_id: Enums.PokemonId;
    getPokemonId(): Enums.PokemonId;
    setPokemonId(value: any, noAssert?: boolean);
    times_encountered: number;
    getTimesEncountered(): number;
    setTimesEncountered(value: any, noAssert?: boolean);
    times_captured: number;
    getTimesCaptured(): number;
    setTimesCaptured(value: any, noAssert?: boolean);
    evolution_stone_pieces: number;
    getEvolutionStonePieces(): number;
    setEvolutionStonePieces(value: any, noAssert?: boolean);
    evolution_stones: number;
    getEvolutionStones(): number;
    setEvolutionStones(value: any, noAssert?: boolean);
  }
  
  interface PokedexEntryData {
    pokemon_id?: Enums.PokemonId;
    times_encountered?: number;
    times_captured?: number;
    evolution_stone_pieces?: number;
    evolution_stones?: number;
  }


  export class PokemonData extends ProtoBufMessage {
    constructor(data: PokemonDataData);
    static decode(buffer?: any, length?: number | string, enc?: string): PokemonData;
    id: number;
    getId(): number;
    setId(value: any, noAssert?: boolean);
    pokemon_id: Enums.PokemonId;
    getPokemonId(): Enums.PokemonId;
    setPokemonId(value: any, noAssert?: boolean);
    cp: number;
    getCp(): number;
    setCp(value: any, noAssert?: boolean);
    stamina: number;
    getStamina(): number;
    setStamina(value: any, noAssert?: boolean);
    stamina_max: number;
    getStaminaMax(): number;
    setStaminaMax(value: any, noAssert?: boolean);
    move_1: Enums.PokemonMove;
    getMove_1(): Enums.PokemonMove;
    setMove_1(value: any, noAssert?: boolean);
    move_2: Enums.PokemonMove;
    getMove_2(): Enums.PokemonMove;
    setMove_2(value: any, noAssert?: boolean);
    deployed_fort_id: string;
    getDeployedFortId(): string;
    setDeployedFortId(value: any, noAssert?: boolean);
    owner_name: string;
    getOwnerName(): string;
    setOwnerName(value: any, noAssert?: boolean);
    is_egg: boolean;
    getIsEgg(): boolean;
    setIsEgg(value: any, noAssert?: boolean);
    egg_km_walked_target: number;
    getEggKmWalkedTarget(): number;
    setEggKmWalkedTarget(value: any, noAssert?: boolean);
    egg_km_walked_start: number;
    getEggKmWalkedStart(): number;
    setEggKmWalkedStart(value: any, noAssert?: boolean);
    origin: number;
    getOrigin(): number;
    setOrigin(value: any, noAssert?: boolean);
    height_m: number;
    getHeightM(): number;
    setHeightM(value: any, noAssert?: boolean);
    weight_kg: number;
    getWeightKg(): number;
    setWeightKg(value: any, noAssert?: boolean);
    individual_attack: number;
    getIndividualAttack(): number;
    setIndividualAttack(value: any, noAssert?: boolean);
    individual_defense: number;
    getIndividualDefense(): number;
    setIndividualDefense(value: any, noAssert?: boolean);
    individual_stamina: number;
    getIndividualStamina(): number;
    setIndividualStamina(value: any, noAssert?: boolean);
    cp_multiplier: number;
    getCpMultiplier(): number;
    setCpMultiplier(value: any, noAssert?: boolean);
    pokeball: Inventory.Item.ItemId;
    getPokeball(): Inventory.Item.ItemId;
    setPokeball(value: any, noAssert?: boolean);
    captured_cell_id: number;
    getCapturedCellId(): number;
    setCapturedCellId(value: any, noAssert?: boolean);
    battles_attacked: number;
    getBattlesAttacked(): number;
    setBattlesAttacked(value: any, noAssert?: boolean);
    battles_defended: number;
    getBattlesDefended(): number;
    setBattlesDefended(value: any, noAssert?: boolean);
    egg_incubator_id: string;
    getEggIncubatorId(): string;
    setEggIncubatorId(value: any, noAssert?: boolean);
    creation_time_ms: number;
    getCreationTimeMs(): number;
    setCreationTimeMs(value: any, noAssert?: boolean);
    num_upgrades: number;
    getNumUpgrades(): number;
    setNumUpgrades(value: any, noAssert?: boolean);
    additional_cp_multiplier: number;
    getAdditionalCpMultiplier(): number;
    setAdditionalCpMultiplier(value: any, noAssert?: boolean);
    favorite: number;
    getFavorite(): number;
    setFavorite(value: any, noAssert?: boolean);
    nickname: string;
    getNickname(): string;
    setNickname(value: any, noAssert?: boolean);
    from_fort: number;
    getFromFort(): number;
    setFromFort(value: any, noAssert?: boolean);
  }
  
  interface PokemonDataData {
    id?: number;
    pokemon_id?: Enums.PokemonId;
    cp?: number;
    stamina?: number;
    stamina_max?: number;
    move_1?: Enums.PokemonMove;
    move_2?: Enums.PokemonMove;
    deployed_fort_id?: string;
    owner_name?: string;
    is_egg?: boolean;
    egg_km_walked_target?: number;
    egg_km_walked_start?: number;
    origin?: number;
    height_m?: number;
    weight_kg?: number;
    individual_attack?: number;
    individual_defense?: number;
    individual_stamina?: number;
    cp_multiplier?: number;
    pokeball?: Inventory.Item.ItemId;
    captured_cell_id?: number;
    battles_attacked?: number;
    battles_defended?: number;
    egg_incubator_id?: string;
    creation_time_ms?: number;
    num_upgrades?: number;
    additional_cp_multiplier?: number;
    favorite?: number;
    nickname?: string;
    from_fort?: number;
  }

}
    

export namespace Data.Player {
  
  export class ContactSettings extends ProtoBufMessage {
    constructor(data: ContactSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): ContactSettings;
    send_marketing_emails: boolean;
    getSendMarketingEmails(): boolean;
    setSendMarketingEmails(value: any, noAssert?: boolean);
    send_push_notifications: boolean;
    getSendPushNotifications(): boolean;
    setSendPushNotifications(value: any, noAssert?: boolean);
  }
  
  interface ContactSettingsData {
    send_marketing_emails?: boolean;
    send_push_notifications?: boolean;
  }


  export class Currency extends ProtoBufMessage {
    constructor(data: CurrencyData);
    static decode(buffer?: any, length?: number | string, enc?: string): Currency;
    name: string;
    getName(): string;
    setName(value: any, noAssert?: boolean);
    amount: number;
    getAmount(): number;
    setAmount(value: any, noAssert?: boolean);
  }
  
  interface CurrencyData {
    name?: string;
    amount?: number;
  }


  export class DailyBonus extends ProtoBufMessage {
    constructor(data: DailyBonusData);
    static decode(buffer?: any, length?: number | string, enc?: string): DailyBonus;
    next_collected_timestamp_ms: number;
    getNextCollectedTimestampMs(): number;
    setNextCollectedTimestampMs(value: any, noAssert?: boolean);
    next_defender_bonus_collect_timestamp_ms: number;
    getNextDefenderBonusCollectTimestampMs(): number;
    setNextDefenderBonusCollectTimestampMs(value: any, noAssert?: boolean);
  }
  
  interface DailyBonusData {
    next_collected_timestamp_ms?: number;
    next_defender_bonus_collect_timestamp_ms?: number;
  }


  export class EquippedBadge extends ProtoBufMessage {
    constructor(data: EquippedBadgeData);
    static decode(buffer?: any, length?: number | string, enc?: string): EquippedBadge;
    badge_type: Enums.BadgeType;
    getBadgeType(): Enums.BadgeType;
    setBadgeType(value: any, noAssert?: boolean);
    level: number;
    getLevel(): number;
    setLevel(value: any, noAssert?: boolean);
    next_equip_change_allowed_timestamp_ms: number;
    getNextEquipChangeAllowedTimestampMs(): number;
    setNextEquipChangeAllowedTimestampMs(value: any, noAssert?: boolean);
  }
  
  interface EquippedBadgeData {
    badge_type?: Enums.BadgeType;
    level?: number;
    next_equip_change_allowed_timestamp_ms?: number;
  }


  export class PlayerAvatar extends ProtoBufMessage {
    constructor(data: PlayerAvatarData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerAvatar;
    skin: number;
    getSkin(): number;
    setSkin(value: any, noAssert?: boolean);
    hair: number;
    getHair(): number;
    setHair(value: any, noAssert?: boolean);
    shirt: number;
    getShirt(): number;
    setShirt(value: any, noAssert?: boolean);
    pants: number;
    getPants(): number;
    setPants(value: any, noAssert?: boolean);
    hat: number;
    getHat(): number;
    setHat(value: any, noAssert?: boolean);
    shoes: number;
    getShoes(): number;
    setShoes(value: any, noAssert?: boolean);
    gender: Enums.Gender;
    getGender(): Enums.Gender;
    setGender(value: any, noAssert?: boolean);
    eyes: number;
    getEyes(): number;
    setEyes(value: any, noAssert?: boolean);
    backpack: number;
    getBackpack(): number;
    setBackpack(value: any, noAssert?: boolean);
  }
  
  interface PlayerAvatarData {
    skin?: number;
    hair?: number;
    shirt?: number;
    pants?: number;
    hat?: number;
    shoes?: number;
    gender?: Enums.Gender;
    eyes?: number;
    backpack?: number;
  }


  export class PlayerCamera extends ProtoBufMessage {
    constructor(data: PlayerCameraData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerCamera;
    is_default_camera: boolean;
    getIsDefaultCamera(): boolean;
    setIsDefaultCamera(value: any, noAssert?: boolean);
  }
  
  interface PlayerCameraData {
    is_default_camera?: boolean;
  }


  export class PlayerCurrency extends ProtoBufMessage {
    constructor(data: PlayerCurrencyData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerCurrency;
    gems: number;
    getGems(): number;
    setGems(value: any, noAssert?: boolean);
  }
  
  interface PlayerCurrencyData {
    gems?: number;
  }


  export class PlayerPublicProfile extends ProtoBufMessage {
    constructor(data: PlayerPublicProfileData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerPublicProfile;
    name: string;
    getName(): string;
    setName(value: any, noAssert?: boolean);
    level: number;
    getLevel(): number;
    setLevel(value: any, noAssert?: boolean);
    avatar: Player.PlayerAvatar;
    getAvatar(): Player.PlayerAvatar;
    setAvatar(value: any, noAssert?: boolean);
  }
  
  interface PlayerPublicProfileData {
    name?: string;
    level?: number;
    avatar?: Player.PlayerAvatar;
  }


  export class PlayerStats extends ProtoBufMessage {
    constructor(data: PlayerStatsData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerStats;
    level: number;
    getLevel(): number;
    setLevel(value: any, noAssert?: boolean);
    experience: number;
    getExperience(): number;
    setExperience(value: any, noAssert?: boolean);
    prev_level_xp: number;
    getPrevLevelXp(): number;
    setPrevLevelXp(value: any, noAssert?: boolean);
    next_level_xp: number;
    getNextLevelXp(): number;
    setNextLevelXp(value: any, noAssert?: boolean);
    km_walked: number;
    getKmWalked(): number;
    setKmWalked(value: any, noAssert?: boolean);
    pokemons_encountered: number;
    getPokemonsEncountered(): number;
    setPokemonsEncountered(value: any, noAssert?: boolean);
    unique_pokedex_entries: number;
    getUniquePokedexEntries(): number;
    setUniquePokedexEntries(value: any, noAssert?: boolean);
    pokemons_captured: number;
    getPokemonsCaptured(): number;
    setPokemonsCaptured(value: any, noAssert?: boolean);
    evolutions: number;
    getEvolutions(): number;
    setEvolutions(value: any, noAssert?: boolean);
    poke_stop_visits: number;
    getPokeStopVisits(): number;
    setPokeStopVisits(value: any, noAssert?: boolean);
    pokeballs_thrown: number;
    getPokeballsThrown(): number;
    setPokeballsThrown(value: any, noAssert?: boolean);
    eggs_hatched: number;
    getEggsHatched(): number;
    setEggsHatched(value: any, noAssert?: boolean);
    big_magikarp_caught: number;
    getBigMagikarpCaught(): number;
    setBigMagikarpCaught(value: any, noAssert?: boolean);
    battle_attack_won: number;
    getBattleAttackWon(): number;
    setBattleAttackWon(value: any, noAssert?: boolean);
    battle_attack_total: number;
    getBattleAttackTotal(): number;
    setBattleAttackTotal(value: any, noAssert?: boolean);
    battle_defended_won: number;
    getBattleDefendedWon(): number;
    setBattleDefendedWon(value: any, noAssert?: boolean);
    battle_training_won: number;
    getBattleTrainingWon(): number;
    setBattleTrainingWon(value: any, noAssert?: boolean);
    battle_training_total: number;
    getBattleTrainingTotal(): number;
    setBattleTrainingTotal(value: any, noAssert?: boolean);
    prestige_raised_total: number;
    getPrestigeRaisedTotal(): number;
    setPrestigeRaisedTotal(value: any, noAssert?: boolean);
    prestige_dropped_total: number;
    getPrestigeDroppedTotal(): number;
    setPrestigeDroppedTotal(value: any, noAssert?: boolean);
    pokemon_deployed: number;
    getPokemonDeployed(): number;
    setPokemonDeployed(value: any, noAssert?: boolean);
    pokemon_caught_by_type: ByteBuffer;
    getPokemonCaughtByType(): ByteBuffer;
    setPokemonCaughtByType(value: any, noAssert?: boolean);
    small_rattata_caught: number;
    getSmallRattataCaught(): number;
    setSmallRattataCaught(value: any, noAssert?: boolean);
  }
  
  interface PlayerStatsData {
    level?: number;
    experience?: number;
    prev_level_xp?: number;
    next_level_xp?: number;
    km_walked?: number;
    pokemons_encountered?: number;
    unique_pokedex_entries?: number;
    pokemons_captured?: number;
    evolutions?: number;
    poke_stop_visits?: number;
    pokeballs_thrown?: number;
    eggs_hatched?: number;
    big_magikarp_caught?: number;
    battle_attack_won?: number;
    battle_attack_total?: number;
    battle_defended_won?: number;
    battle_training_won?: number;
    battle_training_total?: number;
    prestige_raised_total?: number;
    prestige_dropped_total?: number;
    pokemon_deployed?: number;
    pokemon_caught_by_type?: ByteBuffer;
    small_rattata_caught?: number;
  }

}
    

export namespace Data.Gym {
  
  export class GymMembership extends ProtoBufMessage {
    constructor(data: GymMembershipData);
    static decode(buffer?: any, length?: number | string, enc?: string): GymMembership;
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    trainer_public_profile: Player.PlayerPublicProfile;
    getTrainerPublicProfile(): Player.PlayerPublicProfile;
    setTrainerPublicProfile(value: any, noAssert?: boolean);
  }
  
  interface GymMembershipData {
    pokemon_data?: Data.PokemonData;
    trainer_public_profile?: Player.PlayerPublicProfile;
  }


  export class GymState extends ProtoBufMessage {
    constructor(data: GymStateData);
    static decode(buffer?: any, length?: number | string, enc?: string): GymState;
    fort_data: Map.Fort.FortData;
    getFortData(): Map.Fort.FortData;
    setFortData(value: any, noAssert?: boolean);
    memberships: Gym.GymMembership[];
    getMemberships(): Gym.GymMembership[];
    setMemberships(value: any, noAssert?: boolean);
  }
  
  interface GymStateData {
    fort_data?: Map.Fort.FortData;
    memberships: Gym.GymMembership[];
  }

}
    

export namespace Data.Battle {
  
  export class BattleAction extends ProtoBufMessage {
    constructor(data: BattleActionData);
    static decode(buffer?: any, length?: number | string, enc?: string): BattleAction;
    Type: Battle.BattleActionType;
    get_Type(): Battle.BattleActionType;
    set_Type(value: any, noAssert?: boolean);
    action_start_ms: number;
    getActionStartMs(): number;
    setActionStartMs(value: any, noAssert?: boolean);
    duration_ms: number;
    getDurationMs(): number;
    setDurationMs(value: any, noAssert?: boolean);
    energy_delta: number;
    getEnergyDelta(): number;
    setEnergyDelta(value: any, noAssert?: boolean);
    attacker_index: number;
    getAttackerIndex(): number;
    setAttackerIndex(value: any, noAssert?: boolean);
    target_index: number;
    getTargetIndex(): number;
    setTargetIndex(value: any, noAssert?: boolean);
    active_pokemon_id: number;
    getActivePokemonId(): number;
    setActivePokemonId(value: any, noAssert?: boolean);
    player_joined: Battle.BattleParticipant;
    getPlayerJoined(): Battle.BattleParticipant;
    setPlayerJoined(value: any, noAssert?: boolean);
    battle_results: Battle.BattleResults;
    getBattleResults(): Battle.BattleResults;
    setBattleResults(value: any, noAssert?: boolean);
    damage_windows_start_timestamp_mss: number;
    getDamageWindowsStartTimestampMss(): number;
    setDamageWindowsStartTimestampMss(value: any, noAssert?: boolean);
    damage_windows_end_timestamp_mss: number;
    getDamageWindowsEndTimestampMss(): number;
    setDamageWindowsEndTimestampMss(value: any, noAssert?: boolean);
    player_left: Battle.BattleParticipant;
    getPlayerLeft(): Battle.BattleParticipant;
    setPlayerLeft(value: any, noAssert?: boolean);
    target_pokemon_id: number;
    getTargetPokemonId(): number;
    setTargetPokemonId(value: any, noAssert?: boolean);
  }
  
  interface BattleActionData {
    Type?: Battle.BattleActionType;
    action_start_ms?: number;
    duration_ms?: number;
    energy_delta?: number;
    attacker_index?: number;
    target_index?: number;
    active_pokemon_id?: number;
    player_joined?: Battle.BattleParticipant;
    battle_results?: Battle.BattleResults;
    damage_windows_start_timestamp_mss?: number;
    damage_windows_end_timestamp_mss?: number;
    player_left?: Battle.BattleParticipant;
    target_pokemon_id?: number;
  }


  export class BattleLog extends ProtoBufMessage {
    constructor(data: BattleLogData);
    static decode(buffer?: any, length?: number | string, enc?: string): BattleLog;
    state: Battle.BattleState;
    getState(): Battle.BattleState;
    setState(value: any, noAssert?: boolean);
    battle_type: Battle.BattleType;
    getBattleType(): Battle.BattleType;
    setBattleType(value: any, noAssert?: boolean);
    server_ms: number;
    getServerMs(): number;
    setServerMs(value: any, noAssert?: boolean);
    battle_actions: Battle.BattleAction[];
    getBattleActions(): Battle.BattleAction[];
    setBattleActions(value: any, noAssert?: boolean);
    battle_start_timestamp_ms: number;
    getBattleStartTimestampMs(): number;
    setBattleStartTimestampMs(value: any, noAssert?: boolean);
    battle_end_timestamp_ms: number;
    getBattleEndTimestampMs(): number;
    setBattleEndTimestampMs(value: any, noAssert?: boolean);
  }
  
  interface BattleLogData {
    state?: Battle.BattleState;
    battle_type?: Battle.BattleType;
    server_ms?: number;
    battle_actions: Battle.BattleAction[];
    battle_start_timestamp_ms?: number;
    battle_end_timestamp_ms?: number;
  }


  export class BattleParticipant extends ProtoBufMessage {
    constructor(data: BattleParticipantData);
    static decode(buffer?: any, length?: number | string, enc?: string): BattleParticipant;
    active_pokemon: Battle.BattlePokemonInfo;
    getActivePokemon(): Battle.BattlePokemonInfo;
    setActivePokemon(value: any, noAssert?: boolean);
    trainer_public_profile: Player.PlayerPublicProfile;
    getTrainerPublicProfile(): Player.PlayerPublicProfile;
    setTrainerPublicProfile(value: any, noAssert?: boolean);
    reverse_pokemon: Battle.BattlePokemonInfo[];
    getReversePokemon(): Battle.BattlePokemonInfo[];
    setReversePokemon(value: any, noAssert?: boolean);
    defeated_pokemon: Battle.BattlePokemonInfo[];
    getDefeatedPokemon(): Battle.BattlePokemonInfo[];
    setDefeatedPokemon(value: any, noAssert?: boolean);
  }
  
  interface BattleParticipantData {
    active_pokemon?: Battle.BattlePokemonInfo;
    trainer_public_profile?: Player.PlayerPublicProfile;
    reverse_pokemon: Battle.BattlePokemonInfo[];
    defeated_pokemon: Battle.BattlePokemonInfo[];
  }


  export class BattlePokemonInfo extends ProtoBufMessage {
    constructor(data: BattlePokemonInfoData);
    static decode(buffer?: any, length?: number | string, enc?: string): BattlePokemonInfo;
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    current_health: number;
    getCurrentHealth(): number;
    setCurrentHealth(value: any, noAssert?: boolean);
    current_energy: number;
    getCurrentEnergy(): number;
    setCurrentEnergy(value: any, noAssert?: boolean);
  }
  
  interface BattlePokemonInfoData {
    pokemon_data?: Data.PokemonData;
    current_health?: number;
    current_energy?: number;
  }


  export class BattleResults extends ProtoBufMessage {
    constructor(data: BattleResultsData);
    static decode(buffer?: any, length?: number | string, enc?: string): BattleResults;
    gym_state: Gym.GymState;
    getGymState(): Gym.GymState;
    setGymState(value: any, noAssert?: boolean);
    attackers: Battle.BattleParticipant[];
    getAttackers(): Battle.BattleParticipant[];
    setAttackers(value: any, noAssert?: boolean);
    player_experience_awarded: number[];
    getPlayerExperienceAwarded(): number[];
    setPlayerExperienceAwarded(value: any, noAssert?: boolean);
    next_defender_pokemon_id: number;
    getNextDefenderPokemonId(): number;
    setNextDefenderPokemonId(value: any, noAssert?: boolean);
    gym_points_delta: number;
    getGymPointsDelta(): number;
    setGymPointsDelta(value: any, noAssert?: boolean);
  }
  
  interface BattleResultsData {
    gym_state?: Gym.GymState;
    attackers: Battle.BattleParticipant[];
    player_experience_awarded: number[];
    next_defender_pokemon_id?: number;
    gym_points_delta?: number;
  }


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
    

  export const enum BattleState {
    STATE_UNSET = 0,
    ACTIVE = 1,
    VICTORY = 2,
    DEFEATED = 3,
    TIMED_OUT = 4,
  }
    

  export const enum BattleType {
    BATTLE_TYPE_UNSET = 0,
    NORMAL = 1,
    TRAINING = 2,
  }
    
}
    

export namespace Data.Capture {
  
  export class CaptureAward extends ProtoBufMessage {
    constructor(data: CaptureAwardData);
    static decode(buffer?: any, length?: number | string, enc?: string): CaptureAward;
    activity_type: Enums.ActivityType[];
    getActivityType(): Enums.ActivityType[];
    setActivityType(value: any, noAssert?: boolean);
    xp: number[];
    getXp(): number[];
    setXp(value: any, noAssert?: boolean);
    candy: number[];
    getCandy(): number[];
    setCandy(value: any, noAssert?: boolean);
    stardust: number[];
    getStardust(): number[];
    setStardust(value: any, noAssert?: boolean);
  }
  
  interface CaptureAwardData {
    activity_type: Enums.ActivityType[];
    xp: number[];
    candy: number[];
    stardust: number[];
  }


  export class CaptureProbability extends ProtoBufMessage {
    constructor(data: CaptureProbabilityData);
    static decode(buffer?: any, length?: number | string, enc?: string): CaptureProbability;
    pokeball_type: Inventory.Item.ItemId[];
    getPokeballType(): Inventory.Item.ItemId[];
    setPokeballType(value: any, noAssert?: boolean);
    capture_probability: number[];
    getCaptureProbability(): number[];
    setCaptureProbability(value: any, noAssert?: boolean);
    reticle_difficulty_scale: number;
    getReticleDifficultyScale(): number;
    setReticleDifficultyScale(value: any, noAssert?: boolean);
  }
  
  interface CaptureProbabilityData {
    pokeball_type: Inventory.Item.ItemId[];
    capture_probability: number[];
    reticle_difficulty_scale?: number;
  }

}
    

export namespace Data.Logs {
  
  export class ActionLogEntry extends ProtoBufMessage {
    constructor(data: ActionLogEntryData);
    static decode(buffer?: any, length?: number | string, enc?: string): ActionLogEntry;
    timestamp_ms: number;
    getTimestampMs(): number;
    setTimestampMs(value: any, noAssert?: boolean);
    sfida: boolean;
    getSfida(): boolean;
    setSfida(value: any, noAssert?: boolean);
    catch_pokemon: Logs.CatchPokemonLogEntry;
    getCatchPokemon(): Logs.CatchPokemonLogEntry;
    setCatchPokemon(value: any, noAssert?: boolean);
    fort_search: Logs.FortSearchLogEntry;
    getFortSearch(): Logs.FortSearchLogEntry;
    setFortSearch(value: any, noAssert?: boolean);
  }
  
  interface ActionLogEntryData {
    timestamp_ms?: number;
    sfida?: boolean;
    catch_pokemon?: Logs.CatchPokemonLogEntry;
    fort_search?: Logs.FortSearchLogEntry;
  }


  export class CatchPokemonLogEntry extends ProtoBufMessage {
    constructor(data: CatchPokemonLogEntryData);
    static decode(buffer?: any, length?: number | string, enc?: string): CatchPokemonLogEntry;
    result: CatchPokemonLogEntry.Result;
    getResult(): CatchPokemonLogEntry.Result;
    setResult(value: any, noAssert?: boolean);
    pokemon_id: Enums.PokemonId;
    getPokemonId(): Enums.PokemonId;
    setPokemonId(value: any, noAssert?: boolean);
    combat_points: number;
    getCombatPoints(): number;
    setCombatPoints(value: any, noAssert?: boolean);
    pokemon_data_id: number;
    getPokemonDataId(): number;
    setPokemonDataId(value: any, noAssert?: boolean);
  }
  
  interface CatchPokemonLogEntryData {
    result?: CatchPokemonLogEntry.Result;
    pokemon_id?: Enums.PokemonId;
    combat_points?: number;
    pokemon_data_id?: number;
  }


  export class FortSearchLogEntry extends ProtoBufMessage {
    constructor(data: FortSearchLogEntryData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortSearchLogEntry;
    result: FortSearchLogEntry.Result;
    getResult(): FortSearchLogEntry.Result;
    setResult(value: any, noAssert?: boolean);
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    items: Inventory.Item.ItemData[];
    getItems(): Inventory.Item.ItemData[];
    setItems(value: any, noAssert?: boolean);
    eggs: number;
    getEggs(): number;
    setEggs(value: any, noAssert?: boolean);
  }
  
  interface FortSearchLogEntryData {
    result?: FortSearchLogEntry.Result;
    fort_id?: string;
    items: Inventory.Item.ItemData[];
    eggs?: number;
  }

}
    

export namespace Inventory {
  
  export class AppliedItem extends ProtoBufMessage {
    constructor(data: AppliedItemData);
    static decode(buffer?: any, length?: number | string, enc?: string): AppliedItem;
    item_id: Item.ItemId;
    getItemId(): Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    item_type: Item.ItemType;
    getItemType(): Item.ItemType;
    setItemType(value: any, noAssert?: boolean);
    expire_ms: number;
    getExpireMs(): number;
    setExpireMs(value: any, noAssert?: boolean);
    applied_ms: number;
    getAppliedMs(): number;
    setAppliedMs(value: any, noAssert?: boolean);
  }
  
  interface AppliedItemData {
    item_id?: Item.ItemId;
    item_type?: Item.ItemType;
    expire_ms?: number;
    applied_ms?: number;
  }


  export class AppliedItems extends ProtoBufMessage {
    constructor(data: AppliedItemsData);
    static decode(buffer?: any, length?: number | string, enc?: string): AppliedItems;
    item: Inventory.AppliedItem[];
    getItem(): Inventory.AppliedItem[];
    setItem(value: any, noAssert?: boolean);
  }
  
  interface AppliedItemsData {
    item: Inventory.AppliedItem[];
  }


  export class Candy extends ProtoBufMessage {
    constructor(data: CandyData);
    static decode(buffer?: any, length?: number | string, enc?: string): Candy;
    family_id: Enums.PokemonFamilyId;
    getFamilyId(): Enums.PokemonFamilyId;
    setFamilyId(value: any, noAssert?: boolean);
    candy: number;
    getCandy(): number;
    setCandy(value: any, noAssert?: boolean);
  }
  
  interface CandyData {
    family_id?: Enums.PokemonFamilyId;
    candy?: number;
  }


  export class EggIncubator extends ProtoBufMessage {
    constructor(data: EggIncubatorData);
    static decode(buffer?: any, length?: number | string, enc?: string): EggIncubator;
    id: string;
    getId(): string;
    setId(value: any, noAssert?: boolean);
    item_id: Item.ItemId;
    getItemId(): Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    incubator_type: Inventory.EggIncubatorType;
    getIncubatorType(): Inventory.EggIncubatorType;
    setIncubatorType(value: any, noAssert?: boolean);
    uses_remaining: number;
    getUsesRemaining(): number;
    setUsesRemaining(value: any, noAssert?: boolean);
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
    start_km_walked: number;
    getStartKmWalked(): number;
    setStartKmWalked(value: any, noAssert?: boolean);
    target_km_walked: number;
    getTargetKmWalked(): number;
    setTargetKmWalked(value: any, noAssert?: boolean);
  }
  
  interface EggIncubatorData {
    id?: string;
    item_id?: Item.ItemId;
    incubator_type?: Inventory.EggIncubatorType;
    uses_remaining?: number;
    pokemon_id?: number;
    start_km_walked?: number;
    target_km_walked?: number;
  }


  export class EggIncubators extends ProtoBufMessage {
    constructor(data: EggIncubatorsData);
    static decode(buffer?: any, length?: number | string, enc?: string): EggIncubators;
    egg_incubator: Inventory.EggIncubator[];
    getEggIncubator(): Inventory.EggIncubator[];
    setEggIncubator(value: any, noAssert?: boolean);
  }
  
  interface EggIncubatorsData {
    egg_incubator: Inventory.EggIncubator[];
  }


  export class InventoryDelta extends ProtoBufMessage {
    constructor(data: InventoryDeltaData);
    static decode(buffer?: any, length?: number | string, enc?: string): InventoryDelta;
    original_timestamp_ms: number;
    getOriginalTimestampMs(): number;
    setOriginalTimestampMs(value: any, noAssert?: boolean);
    new_timestamp_ms: number;
    getNewTimestampMs(): number;
    setNewTimestampMs(value: any, noAssert?: boolean);
    inventory_items: Inventory.InventoryItem[];
    getInventoryItems(): Inventory.InventoryItem[];
    setInventoryItems(value: any, noAssert?: boolean);
  }
  
  interface InventoryDeltaData {
    original_timestamp_ms?: number;
    new_timestamp_ms?: number;
    inventory_items: Inventory.InventoryItem[];
  }


  export class InventoryItem extends ProtoBufMessage {
    constructor(data: InventoryItemData);
    static decode(buffer?: any, length?: number | string, enc?: string): InventoryItem;
    modified_timestamp_ms: number;
    getModifiedTimestampMs(): number;
    setModifiedTimestampMs(value: any, noAssert?: boolean);
    deleted_item_key: number;
    getDeletedItemKey(): number;
    setDeletedItemKey(value: any, noAssert?: boolean);
    inventory_item_data: Inventory.InventoryItemData;
    getInventoryItemData(): Inventory.InventoryItemData;
    setInventoryItemData(value: any, noAssert?: boolean);
  }
  
  interface InventoryItemData {
    modified_timestamp_ms?: number;
    deleted_item_key?: number;
    inventory_item_data?: Inventory.InventoryItemData;
  }


  export class InventoryItemData extends ProtoBufMessage {
    constructor(data: InventoryItemDataData);
    static decode(buffer?: any, length?: number | string, enc?: string): InventoryItemData;
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    item: Item.ItemData;
    getItem(): Item.ItemData;
    setItem(value: any, noAssert?: boolean);
    pokedex_entry: Data.PokedexEntry;
    getPokedexEntry(): Data.PokedexEntry;
    setPokedexEntry(value: any, noAssert?: boolean);
    player_stats: Data.Player.PlayerStats;
    getPlayerStats(): Data.Player.PlayerStats;
    setPlayerStats(value: any, noAssert?: boolean);
    player_currency: Data.Player.PlayerCurrency;
    getPlayerCurrency(): Data.Player.PlayerCurrency;
    setPlayerCurrency(value: any, noAssert?: boolean);
    player_camera: Data.Player.PlayerCamera;
    getPlayerCamera(): Data.Player.PlayerCamera;
    setPlayerCamera(value: any, noAssert?: boolean);
    inventory_upgrades: Inventory.InventoryUpgrades;
    getInventoryUpgrades(): Inventory.InventoryUpgrades;
    setInventoryUpgrades(value: any, noAssert?: boolean);
    applied_items: Inventory.AppliedItems;
    getAppliedItems(): Inventory.AppliedItems;
    setAppliedItems(value: any, noAssert?: boolean);
    egg_incubators: Inventory.EggIncubators;
    getEggIncubators(): Inventory.EggIncubators;
    setEggIncubators(value: any, noAssert?: boolean);
    candy: Inventory.Candy;
    getCandy(): Inventory.Candy;
    setCandy(value: any, noAssert?: boolean);
  }
  
  interface InventoryItemDataData {
    pokemon_data?: Data.PokemonData;
    item?: Item.ItemData;
    pokedex_entry?: Data.PokedexEntry;
    player_stats?: Data.Player.PlayerStats;
    player_currency?: Data.Player.PlayerCurrency;
    player_camera?: Data.Player.PlayerCamera;
    inventory_upgrades?: Inventory.InventoryUpgrades;
    applied_items?: Inventory.AppliedItems;
    egg_incubators?: Inventory.EggIncubators;
    candy?: Inventory.Candy;
  }


  export class InventoryUpgrade extends ProtoBufMessage {
    constructor(data: InventoryUpgradeData);
    static decode(buffer?: any, length?: number | string, enc?: string): InventoryUpgrade;
    item_id: Item.ItemId;
    getItemId(): Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    upgrade_type: Inventory.InventoryUpgradeType;
    getUpgradeType(): Inventory.InventoryUpgradeType;
    setUpgradeType(value: any, noAssert?: boolean);
    additional_storage: number;
    getAdditionalStorage(): number;
    setAdditionalStorage(value: any, noAssert?: boolean);
  }
  
  interface InventoryUpgradeData {
    item_id?: Item.ItemId;
    upgrade_type?: Inventory.InventoryUpgradeType;
    additional_storage?: number;
  }


  export class InventoryUpgrades extends ProtoBufMessage {
    constructor(data: InventoryUpgradesData);
    static decode(buffer?: any, length?: number | string, enc?: string): InventoryUpgrades;
    inventory_upgrades: Inventory.InventoryUpgrade[];
    getInventoryUpgrades(): Inventory.InventoryUpgrade[];
    setInventoryUpgrades(value: any, noAssert?: boolean);
  }
  
  interface InventoryUpgradesData {
    inventory_upgrades: Inventory.InventoryUpgrade[];
  }


  export const enum EggIncubatorType {
    INCUBATOR_UNSET = 0,
    INCUBATOR_DISTANCE = 1,
  }
    

  export const enum InventoryUpgradeType {
    UPGRADE_UNSET = 0,
    INCREASE_ITEM_STORAGE = 1,
    INCREASE_POKEMON_STORAGE = 2,
  }
    
}
    

export namespace Inventory.Item {
  
  export class ItemAward extends ProtoBufMessage {
    constructor(data: ItemAwardData);
    static decode(buffer?: any, length?: number | string, enc?: string): ItemAward;
    item_id: Item.ItemId;
    getItemId(): Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    item_count: number;
    getItemCount(): number;
    setItemCount(value: any, noAssert?: boolean);
  }
  
  interface ItemAwardData {
    item_id?: Item.ItemId;
    item_count?: number;
  }


  export class ItemData extends ProtoBufMessage {
    constructor(data: ItemDataData);
    static decode(buffer?: any, length?: number | string, enc?: string): ItemData;
    item_id: Item.ItemId;
    getItemId(): Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    count: number;
    getCount(): number;
    setCount(value: any, noAssert?: boolean);
    unseen: boolean;
    getUnseen(): boolean;
    setUnseen(value: any, noAssert?: boolean);
  }
  
  interface ItemDataData {
    item_id?: Item.ItemId;
    count?: number;
    unseen?: boolean;
  }


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
    

export namespace Map {
  
  export class MapCell extends ProtoBufMessage {
    constructor(data: MapCellData);
    static decode(buffer?: any, length?: number | string, enc?: string): MapCell;
    s2_cell_id: number;
    getS2CellId(): number;
    setS2CellId(value: any, noAssert?: boolean);
    current_timestamp_ms: number;
    getCurrentTimestampMs(): number;
    setCurrentTimestampMs(value: any, noAssert?: boolean);
    forts: Fort.FortData[];
    getForts(): Fort.FortData[];
    setForts(value: any, noAssert?: boolean);
    spawn_points: Map.SpawnPoint[];
    getSpawnPoints(): Map.SpawnPoint[];
    setSpawnPoints(value: any, noAssert?: boolean);
    deleted_objects: string[];
    getDeletedObjects(): string[];
    setDeletedObjects(value: any, noAssert?: boolean);
    is_truncated_list: boolean;
    getIsTruncatedList(): boolean;
    setIsTruncatedList(value: any, noAssert?: boolean);
    fort_summaries: Fort.FortSummary[];
    getFortSummaries(): Fort.FortSummary[];
    setFortSummaries(value: any, noAssert?: boolean);
    decimated_spawn_points: Map.SpawnPoint[];
    getDecimatedSpawnPoints(): Map.SpawnPoint[];
    setDecimatedSpawnPoints(value: any, noAssert?: boolean);
    wild_pokemons: Pokemon.WildPokemon[];
    getWildPokemons(): Pokemon.WildPokemon[];
    setWildPokemons(value: any, noAssert?: boolean);
    catchable_pokemons: Pokemon.MapPokemon[];
    getCatchablePokemons(): Pokemon.MapPokemon[];
    setCatchablePokemons(value: any, noAssert?: boolean);
    nearby_pokemons: Pokemon.NearbyPokemon[];
    getNearbyPokemons(): Pokemon.NearbyPokemon[];
    setNearbyPokemons(value: any, noAssert?: boolean);
  }
  
  interface MapCellData {
    s2_cell_id?: number;
    current_timestamp_ms?: number;
    forts: Fort.FortData[];
    spawn_points: Map.SpawnPoint[];
    deleted_objects: string[];
    is_truncated_list?: boolean;
    fort_summaries: Fort.FortSummary[];
    decimated_spawn_points: Map.SpawnPoint[];
    wild_pokemons: Pokemon.WildPokemon[];
    catchable_pokemons: Pokemon.MapPokemon[];
    nearby_pokemons: Pokemon.NearbyPokemon[];
  }


  export class SpawnPoint extends ProtoBufMessage {
    constructor(data: SpawnPointData);
    static decode(buffer?: any, length?: number | string, enc?: string): SpawnPoint;
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
  }
  
  interface SpawnPointData {
    latitude?: number;
    longitude?: number;
  }


  export const enum MapObjectsStatus {
    UNSET_STATUS = 0,
    SUCCESS = 1,
    LOCATION_UNSET = 2,
  }
    
}
    

export namespace Map.Fort {
  
  export class FortData extends ProtoBufMessage {
    constructor(data: FortDataData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortData;
    id: string;
    getId(): string;
    setId(value: any, noAssert?: boolean);
    last_modified_timestamp_ms: number;
    getLastModifiedTimestampMs(): number;
    setLastModifiedTimestampMs(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
    enabled: boolean;
    getEnabled(): boolean;
    setEnabled(value: any, noAssert?: boolean);
    type: Fort.FortType;
    getType(): Fort.FortType;
    setType(value: any, noAssert?: boolean);
    owned_by_team: Enums.TeamColor;
    getOwnedByTeam(): Enums.TeamColor;
    setOwnedByTeam(value: any, noAssert?: boolean);
    guard_pokemon_id: Enums.PokemonId;
    getGuardPokemonId(): Enums.PokemonId;
    setGuardPokemonId(value: any, noAssert?: boolean);
    guard_pokemon_cp: number;
    getGuardPokemonCp(): number;
    setGuardPokemonCp(value: any, noAssert?: boolean);
    gym_points: number;
    getGymPoints(): number;
    setGymPoints(value: any, noAssert?: boolean);
    is_in_battle: boolean;
    getIsInBattle(): boolean;
    setIsInBattle(value: any, noAssert?: boolean);
    cooldown_complete_timestamp_ms: number;
    getCooldownCompleteTimestampMs(): number;
    setCooldownCompleteTimestampMs(value: any, noAssert?: boolean);
    sponsor: Fort.FortSponsor;
    getSponsor(): Fort.FortSponsor;
    setSponsor(value: any, noAssert?: boolean);
    rendering_type: Fort.FortRenderingType;
    getRenderingType(): Fort.FortRenderingType;
    setRenderingType(value: any, noAssert?: boolean);
    active_fort_modifier: ByteBuffer;
    getActiveFortModifier(): ByteBuffer;
    setActiveFortModifier(value: any, noAssert?: boolean);
    lure_info: Fort.FortLureInfo;
    getLureInfo(): Fort.FortLureInfo;
    setLureInfo(value: any, noAssert?: boolean);
  }
  
  interface FortDataData {
    id?: string;
    last_modified_timestamp_ms?: number;
    latitude?: number;
    longitude?: number;
    enabled?: boolean;
    type?: Fort.FortType;
    owned_by_team?: Enums.TeamColor;
    guard_pokemon_id?: Enums.PokemonId;
    guard_pokemon_cp?: number;
    gym_points?: number;
    is_in_battle?: boolean;
    cooldown_complete_timestamp_ms?: number;
    sponsor?: Fort.FortSponsor;
    rendering_type?: Fort.FortRenderingType;
    active_fort_modifier?: ByteBuffer;
    lure_info?: Fort.FortLureInfo;
  }


  export class FortLureInfo extends ProtoBufMessage {
    constructor(data: FortLureInfoData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortLureInfo;
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    active_pokemon_id: Enums.PokemonId;
    getActivePokemonId(): Enums.PokemonId;
    setActivePokemonId(value: any, noAssert?: boolean);
    lure_expires_timestamp_ms: number;
    getLureExpiresTimestampMs(): number;
    setLureExpiresTimestampMs(value: any, noAssert?: boolean);
  }
  
  interface FortLureInfoData {
    fort_id?: string;
    encounter_id?: number;
    active_pokemon_id?: Enums.PokemonId;
    lure_expires_timestamp_ms?: number;
  }


  export class FortModifier extends ProtoBufMessage {
    constructor(data: FortModifierData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortModifier;
    item_id: Inventory.Item.ItemId;
    getItemId(): Inventory.Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    expiration_timestamp_ms: number;
    getExpirationTimestampMs(): number;
    setExpirationTimestampMs(value: any, noAssert?: boolean);
    deployer_player_codename: string;
    getDeployerPlayerCodename(): string;
    setDeployerPlayerCodename(value: any, noAssert?: boolean);
  }
  
  interface FortModifierData {
    item_id?: Inventory.Item.ItemId;
    expiration_timestamp_ms?: number;
    deployer_player_codename?: string;
  }


  export class FortSummary extends ProtoBufMessage {
    constructor(data: FortSummaryData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortSummary;
    fort_summary_id: string;
    getFortSummaryId(): string;
    setFortSummaryId(value: any, noAssert?: boolean);
    last_modified_timestamp_ms: number;
    getLastModifiedTimestampMs(): number;
    setLastModifiedTimestampMs(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
  }
  
  interface FortSummaryData {
    fort_summary_id?: string;
    last_modified_timestamp_ms?: number;
    latitude?: number;
    longitude?: number;
  }


  export const enum FortRenderingType {
    DEFAULT = 0,
    INTERNAL_TEST = 1,
  }
    

  export const enum FortSponsor {
    UNSET_SPONSOR = 0,
    MCDONALDS = 1,
    POKEMON_STORE = 2,
  }
    

  export const enum FortType {
    GYM = 0,
    CHECKPOINT = 1,
  }
    
}
    

export namespace Map.Pokemon {
  
  export class MapPokemon extends ProtoBufMessage {
    constructor(data: MapPokemonData);
    static decode(buffer?: any, length?: number | string, enc?: string): MapPokemon;
    spawn_point_id: string;
    getSpawnPointId(): string;
    setSpawnPointId(value: any, noAssert?: boolean);
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    pokemon_id: Enums.PokemonId;
    getPokemonId(): Enums.PokemonId;
    setPokemonId(value: any, noAssert?: boolean);
    expiration_timestamp_ms: number;
    getExpirationTimestampMs(): number;
    setExpirationTimestampMs(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
  }
  
  interface MapPokemonData {
    spawn_point_id?: string;
    encounter_id?: number;
    pokemon_id?: Enums.PokemonId;
    expiration_timestamp_ms?: number;
    latitude?: number;
    longitude?: number;
  }


  export class NearbyPokemon extends ProtoBufMessage {
    constructor(data: NearbyPokemonData);
    static decode(buffer?: any, length?: number | string, enc?: string): NearbyPokemon;
    pokemon_id: Enums.PokemonId;
    getPokemonId(): Enums.PokemonId;
    setPokemonId(value: any, noAssert?: boolean);
    distance_in_meters: number;
    getDistanceInMeters(): number;
    setDistanceInMeters(value: any, noAssert?: boolean);
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
  }
  
  interface NearbyPokemonData {
    pokemon_id?: Enums.PokemonId;
    distance_in_meters?: number;
    encounter_id?: number;
  }


  export class WildPokemon extends ProtoBufMessage {
    constructor(data: WildPokemonData);
    static decode(buffer?: any, length?: number | string, enc?: string): WildPokemon;
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    last_modified_timestamp_ms: number;
    getLastModifiedTimestampMs(): number;
    setLastModifiedTimestampMs(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
    spawn_point_id: string;
    getSpawnPointId(): string;
    setSpawnPointId(value: any, noAssert?: boolean);
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    time_till_hidden_ms: number;
    getTimeTillHiddenMs(): number;
    setTimeTillHiddenMs(value: any, noAssert?: boolean);
  }
  
  interface WildPokemonData {
    encounter_id?: number;
    last_modified_timestamp_ms?: number;
    latitude?: number;
    longitude?: number;
    spawn_point_id?: string;
    pokemon_data?: Data.PokemonData;
    time_till_hidden_ms?: number;
  }

}
    

export namespace Networking.Requests {
  
  export class Request extends ProtoBufMessage {
    constructor(data: RequestData);
    static decode(buffer?: any, length?: number | string, enc?: string): Request;
    request_type: Requests.RequestType;
    getRequestType(): Requests.RequestType;
    setRequestType(value: any, noAssert?: boolean);
    request_message: ByteBuffer;
    getRequestMessage(): ByteBuffer;
    setRequestMessage(value: any, noAssert?: boolean);
  }
  
  interface RequestData {
    request_type?: Requests.RequestType;
    request_message?: ByteBuffer;
  }


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
    

export namespace Networking.Requests.Messages {
  
  export class AddFortModifierMessage extends ProtoBufMessage {
    constructor(data: AddFortModifierMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): AddFortModifierMessage;
    modifier_type: Inventory.Item.ItemId;
    getModifierType(): Inventory.Item.ItemId;
    setModifierType(value: any, noAssert?: boolean);
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface AddFortModifierMessageData {
    modifier_type?: Inventory.Item.ItemId;
    fort_id?: string;
    player_latitude?: number;
    player_longitude?: number;
  }


  export class AttackGymMessage extends ProtoBufMessage {
    constructor(data: AttackGymMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): AttackGymMessage;
    gym_id: string;
    getGymId(): string;
    setGymId(value: any, noAssert?: boolean);
    battle_id: string;
    getBattleId(): string;
    setBattleId(value: any, noAssert?: boolean);
    attack_actions: Data.Battle.BattleAction[];
    getAttackActions(): Data.Battle.BattleAction[];
    setAttackActions(value: any, noAssert?: boolean);
    last_retrieved_actions: Data.Battle.BattleAction;
    getLastRetrievedActions(): Data.Battle.BattleAction;
    setLastRetrievedActions(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface AttackGymMessageData {
    gym_id?: string;
    battle_id?: string;
    attack_actions: Data.Battle.BattleAction[];
    last_retrieved_actions?: Data.Battle.BattleAction;
    player_latitude?: number;
    player_longitude?: number;
  }


  export class CatchPokemonMessage extends ProtoBufMessage {
    constructor(data: CatchPokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): CatchPokemonMessage;
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    pokeball: Inventory.Item.ItemId;
    getPokeball(): Inventory.Item.ItemId;
    setPokeball(value: any, noAssert?: boolean);
    normalized_reticle_size: number;
    getNormalizedReticleSize(): number;
    setNormalizedReticleSize(value: any, noAssert?: boolean);
    spawn_point_id: string;
    getSpawnPointId(): string;
    setSpawnPointId(value: any, noAssert?: boolean);
    hit_pokemon: boolean;
    getHitPokemon(): boolean;
    setHitPokemon(value: any, noAssert?: boolean);
    spin_modifier: number;
    getSpinModifier(): number;
    setSpinModifier(value: any, noAssert?: boolean);
    normalized_hit_position: number;
    getNormalizedHitPosition(): number;
    setNormalizedHitPosition(value: any, noAssert?: boolean);
  }
  
  interface CatchPokemonMessageData {
    encounter_id?: number;
    pokeball?: Inventory.Item.ItemId;
    normalized_reticle_size?: number;
    spawn_point_id?: string;
    hit_pokemon?: boolean;
    spin_modifier?: number;
    normalized_hit_position?: number;
  }


  export class CheckCodenameAvailableMessage extends ProtoBufMessage {
    constructor(data: CheckCodenameAvailableMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): CheckCodenameAvailableMessage;
    codename: string;
    getCodename(): string;
    setCodename(value: any, noAssert?: boolean);
  }
  
  interface CheckCodenameAvailableMessageData {
    codename?: string;
  }


  export class ClaimCodenameMessage extends ProtoBufMessage {
    constructor(data: ClaimCodenameMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): ClaimCodenameMessage;
    codename: string;
    getCodename(): string;
    setCodename(value: any, noAssert?: boolean);
  }
  
  interface ClaimCodenameMessageData {
    codename?: string;
  }


  export class DiskEncounterMessage extends ProtoBufMessage {
    constructor(data: DiskEncounterMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): DiskEncounterMessage;
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface DiskEncounterMessageData {
    encounter_id?: number;
    fort_id?: string;
    player_latitude?: number;
    player_longitude?: number;
  }


  export class DownloadRemoteConfigVersionMessage extends ProtoBufMessage {
    constructor(data: DownloadRemoteConfigVersionMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): DownloadRemoteConfigVersionMessage;
    platform: Enums.Platform;
    getPlatform(): Enums.Platform;
    setPlatform(value: any, noAssert?: boolean);
    device_manufacturer: string;
    getDeviceManufacturer(): string;
    setDeviceManufacturer(value: any, noAssert?: boolean);
    device_model: string;
    getDeviceModel(): string;
    setDeviceModel(value: any, noAssert?: boolean);
    locale: string;
    getLocale(): string;
    setLocale(value: any, noAssert?: boolean);
    app_version: number;
    getAppVersion(): number;
    setAppVersion(value: any, noAssert?: boolean);
  }
  
  interface DownloadRemoteConfigVersionMessageData {
    platform?: Enums.Platform;
    device_manufacturer?: string;
    device_model?: string;
    locale?: string;
    app_version?: number;
  }


  export class DownloadSettingsMessage extends ProtoBufMessage {
    constructor(data: DownloadSettingsMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): DownloadSettingsMessage;
    hash: string;
    getHash(): string;
    setHash(value: any, noAssert?: boolean);
  }
  
  interface DownloadSettingsMessageData {
    hash?: string;
  }


  export class EncounterMessage extends ProtoBufMessage {
    constructor(data: EncounterMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): EncounterMessage;
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    spawn_point_id: string;
    getSpawnPointId(): string;
    setSpawnPointId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface EncounterMessageData {
    encounter_id?: number;
    spawn_point_id?: string;
    player_latitude?: number;
    player_longitude?: number;
  }


  export class EncounterTutorialCompleteMessage extends ProtoBufMessage {
    constructor(data: EncounterTutorialCompleteMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): EncounterTutorialCompleteMessage;
    pokemon_id: Enums.PokemonId;
    getPokemonId(): Enums.PokemonId;
    setPokemonId(value: any, noAssert?: boolean);
  }
  
  interface EncounterTutorialCompleteMessageData {
    pokemon_id?: Enums.PokemonId;
  }


  export class EquipBadgeMessage extends ProtoBufMessage {
    constructor(data: EquipBadgeMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): EquipBadgeMessage;
    badge_type: Enums.BadgeType;
    getBadgeType(): Enums.BadgeType;
    setBadgeType(value: any, noAssert?: boolean);
  }
  
  interface EquipBadgeMessageData {
    badge_type?: Enums.BadgeType;
  }


  export class EvolvePokemonMessage extends ProtoBufMessage {
    constructor(data: EvolvePokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): EvolvePokemonMessage;
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
  }
  
  interface EvolvePokemonMessageData {
    pokemon_id?: number;
  }


  export class FortDeployPokemonMessage extends ProtoBufMessage {
    constructor(data: FortDeployPokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortDeployPokemonMessage;
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface FortDeployPokemonMessageData {
    fort_id?: string;
    pokemon_id?: number;
    player_latitude?: number;
    player_longitude?: number;
  }


  export class FortDetailsMessage extends ProtoBufMessage {
    constructor(data: FortDetailsMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortDetailsMessage;
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
  }
  
  interface FortDetailsMessageData {
    fort_id?: string;
    latitude?: number;
    longitude?: number;
  }


  export class FortRecallPokemonMessage extends ProtoBufMessage {
    constructor(data: FortRecallPokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortRecallPokemonMessage;
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface FortRecallPokemonMessageData {
    fort_id?: string;
    pokemon_id?: number;
    player_latitude?: number;
    player_longitude?: number;
  }


  export class FortSearchMessage extends ProtoBufMessage {
    constructor(data: FortSearchMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortSearchMessage;
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
    fort_latitude: number;
    getFortLatitude(): number;
    setFortLatitude(value: any, noAssert?: boolean);
    fort_longitude: number;
    getFortLongitude(): number;
    setFortLongitude(value: any, noAssert?: boolean);
  }
  
  interface FortSearchMessageData {
    fort_id?: string;
    player_latitude?: number;
    player_longitude?: number;
    fort_latitude?: number;
    fort_longitude?: number;
  }


  export class GetAssetDigestMessage extends ProtoBufMessage {
    constructor(data: GetAssetDigestMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetAssetDigestMessage;
    platform: Enums.Platform;
    getPlatform(): Enums.Platform;
    setPlatform(value: any, noAssert?: boolean);
    device_manufacturer: string;
    getDeviceManufacturer(): string;
    setDeviceManufacturer(value: any, noAssert?: boolean);
    device_model: string;
    getDeviceModel(): string;
    setDeviceModel(value: any, noAssert?: boolean);
    locale: string;
    getLocale(): string;
    setLocale(value: any, noAssert?: boolean);
    app_version: number;
    getAppVersion(): number;
    setAppVersion(value: any, noAssert?: boolean);
  }
  
  interface GetAssetDigestMessageData {
    platform?: Enums.Platform;
    device_manufacturer?: string;
    device_model?: string;
    locale?: string;
    app_version?: number;
  }


  export class GetDownloadUrlsMessage extends ProtoBufMessage {
    constructor(data: GetDownloadUrlsMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetDownloadUrlsMessage;
    asset_id: string[];
    getAssetId(): string[];
    setAssetId(value: any, noAssert?: boolean);
  }
  
  interface GetDownloadUrlsMessageData {
    asset_id: string[];
  }


  export class GetGymDetailsMessage extends ProtoBufMessage {
    constructor(data: GetGymDetailsMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetGymDetailsMessage;
    gym_id: string;
    getGymId(): string;
    setGymId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
    gym_latitude: number;
    getGymLatitude(): number;
    setGymLatitude(value: any, noAssert?: boolean);
    gym_longitude: number;
    getGymLongitude(): number;
    setGymLongitude(value: any, noAssert?: boolean);
  }
  
  interface GetGymDetailsMessageData {
    gym_id?: string;
    player_latitude?: number;
    player_longitude?: number;
    gym_latitude?: number;
    gym_longitude?: number;
  }


  export class GetIncensePokemonMessage extends ProtoBufMessage {
    constructor(data: GetIncensePokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetIncensePokemonMessage;
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface GetIncensePokemonMessageData {
    player_latitude?: number;
    player_longitude?: number;
  }


  export class GetInventoryMessage extends ProtoBufMessage {
    constructor(data: GetInventoryMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetInventoryMessage;
    last_timestamp_ms: number;
    getLastTimestampMs(): number;
    setLastTimestampMs(value: any, noAssert?: boolean);
    item_been_seen: number;
    getItemBeenSeen(): number;
    setItemBeenSeen(value: any, noAssert?: boolean);
  }
  
  interface GetInventoryMessageData {
    last_timestamp_ms?: number;
    item_been_seen?: number;
  }


  export class GetMapObjectsMessage extends ProtoBufMessage {
    constructor(data: GetMapObjectsMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetMapObjectsMessage;
    cell_id: number[];
    getCellId(): number[];
    setCellId(value: any, noAssert?: boolean);
    since_timestamp_ms: number[];
    getSinceTimestampMs(): number[];
    setSinceTimestampMs(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
  }
  
  interface GetMapObjectsMessageData {
    cell_id: number[];
    since_timestamp_ms: number[];
    latitude?: number;
    longitude?: number;
  }


  export class GetPlayerProfileMessage extends ProtoBufMessage {
    constructor(data: GetPlayerProfileMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetPlayerProfileMessage;
    player_name: string;
    getPlayerName(): string;
    setPlayerName(value: any, noAssert?: boolean);
  }
  
  interface GetPlayerProfileMessageData {
    player_name?: string;
  }


  export class IncenseEncounterMessage extends ProtoBufMessage {
    constructor(data: IncenseEncounterMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): IncenseEncounterMessage;
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    encounter_location: string;
    getEncounterLocation(): string;
    setEncounterLocation(value: any, noAssert?: boolean);
  }
  
  interface IncenseEncounterMessageData {
    encounter_id?: number;
    encounter_location?: string;
  }


  export class LevelUpRewardsMessage extends ProtoBufMessage {
    constructor(data: LevelUpRewardsMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): LevelUpRewardsMessage;
    level: number;
    getLevel(): number;
    setLevel(value: any, noAssert?: boolean);
  }
  
  interface LevelUpRewardsMessageData {
    level?: number;
  }


  export class MarkTutorialCompleteMessage extends ProtoBufMessage {
    constructor(data: MarkTutorialCompleteMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): MarkTutorialCompleteMessage;
    tutorials_completed: Enums.TutorialState[];
    getTutorialsCompleted(): Enums.TutorialState[];
    setTutorialsCompleted(value: any, noAssert?: boolean);
    send_marketing_emails: boolean;
    getSendMarketingEmails(): boolean;
    setSendMarketingEmails(value: any, noAssert?: boolean);
    send_push_notifications: boolean;
    getSendPushNotifications(): boolean;
    setSendPushNotifications(value: any, noAssert?: boolean);
  }
  
  interface MarkTutorialCompleteMessageData {
    tutorials_completed: Enums.TutorialState[];
    send_marketing_emails?: boolean;
    send_push_notifications?: boolean;
  }


  export class NicknamePokemonMessage extends ProtoBufMessage {
    constructor(data: NicknamePokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): NicknamePokemonMessage;
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
    nickname: string;
    getNickname(): string;
    setNickname(value: any, noAssert?: boolean);
  }
  
  interface NicknamePokemonMessageData {
    pokemon_id?: number;
    nickname?: string;
  }


  export class PlayerUpdateMessage extends ProtoBufMessage {
    constructor(data: PlayerUpdateMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerUpdateMessage;
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
  }
  
  interface PlayerUpdateMessageData {
    latitude?: number;
    longitude?: number;
  }


  export class RecycleInventoryItemMessage extends ProtoBufMessage {
    constructor(data: RecycleInventoryItemMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): RecycleInventoryItemMessage;
    item_id: Inventory.Item.ItemId;
    getItemId(): Inventory.Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    count: number;
    getCount(): number;
    setCount(value: any, noAssert?: boolean);
  }
  
  interface RecycleInventoryItemMessageData {
    item_id?: Inventory.Item.ItemId;
    count?: number;
  }


  export class ReleasePokemonMessage extends ProtoBufMessage {
    constructor(data: ReleasePokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): ReleasePokemonMessage;
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
  }
  
  interface ReleasePokemonMessageData {
    pokemon_id?: number;
  }


  export class SetAvatarMessage extends ProtoBufMessage {
    constructor(data: SetAvatarMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): SetAvatarMessage;
    player_avatar: Data.Player.PlayerAvatar;
    getPlayerAvatar(): Data.Player.PlayerAvatar;
    setPlayerAvatar(value: any, noAssert?: boolean);
  }
  
  interface SetAvatarMessageData {
    player_avatar?: Data.Player.PlayerAvatar;
  }


  export class SetContactSettingsMessage extends ProtoBufMessage {
    constructor(data: SetContactSettingsMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): SetContactSettingsMessage;
    contact_settings: Data.Player.ContactSettings;
    getContactSettings(): Data.Player.ContactSettings;
    setContactSettings(value: any, noAssert?: boolean);
  }
  
  interface SetContactSettingsMessageData {
    contact_settings?: Data.Player.ContactSettings;
  }


  export class SetFavoritePokemonMessage extends ProtoBufMessage {
    constructor(data: SetFavoritePokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): SetFavoritePokemonMessage;
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
    is_favorite: boolean;
    getIsFavorite(): boolean;
    setIsFavorite(value: any, noAssert?: boolean);
  }
  
  interface SetFavoritePokemonMessageData {
    pokemon_id?: number;
    is_favorite?: boolean;
  }


  export class SetPlayerTeamMessage extends ProtoBufMessage {
    constructor(data: SetPlayerTeamMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): SetPlayerTeamMessage;
    team: Enums.TeamColor;
    getTeam(): Enums.TeamColor;
    setTeam(value: any, noAssert?: boolean);
  }
  
  interface SetPlayerTeamMessageData {
    team?: Enums.TeamColor;
  }


  export class StartGymBattleMessage extends ProtoBufMessage {
    constructor(data: StartGymBattleMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): StartGymBattleMessage;
    gym_id: string;
    getGymId(): string;
    setGymId(value: any, noAssert?: boolean);
    attacking_pokemon_ids: number[];
    getAttackingPokemonIds(): number[];
    setAttackingPokemonIds(value: any, noAssert?: boolean);
    defending_pokemon_id: number;
    getDefendingPokemonId(): number;
    setDefendingPokemonId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface StartGymBattleMessageData {
    gym_id?: string;
    attacking_pokemon_ids: number[];
    defending_pokemon_id?: number;
    player_latitude?: number;
    player_longitude?: number;
  }


  export class UpgradePokemonMessage extends ProtoBufMessage {
    constructor(data: UpgradePokemonMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): UpgradePokemonMessage;
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
  }
  
  interface UpgradePokemonMessageData {
    pokemon_id?: number;
  }


  export class UseIncenseMessage extends ProtoBufMessage {
    constructor(data: UseIncenseMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseIncenseMessage;
    incense_type: Inventory.Item.ItemId;
    getIncenseType(): Inventory.Item.ItemId;
    setIncenseType(value: any, noAssert?: boolean);
  }
  
  interface UseIncenseMessageData {
    incense_type?: Inventory.Item.ItemId;
  }


  export class UseItemCaptureMessage extends ProtoBufMessage {
    constructor(data: UseItemCaptureMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemCaptureMessage;
    item_id: Inventory.Item.ItemId;
    getItemId(): Inventory.Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    spawn_point_id: string;
    getSpawnPointId(): string;
    setSpawnPointId(value: any, noAssert?: boolean);
  }
  
  interface UseItemCaptureMessageData {
    item_id?: Inventory.Item.ItemId;
    encounter_id?: number;
    spawn_point_id?: string;
  }


  export class UseItemEggIncubatorMessage extends ProtoBufMessage {
    constructor(data: UseItemEggIncubatorMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemEggIncubatorMessage;
    item_id: string;
    getItemId(): string;
    setItemId(value: any, noAssert?: boolean);
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
  }
  
  interface UseItemEggIncubatorMessageData {
    item_id?: string;
    pokemon_id?: number;
  }


  export class UseItemGymMessage extends ProtoBufMessage {
    constructor(data: UseItemGymMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemGymMessage;
    item_id: Inventory.Item.ItemId;
    getItemId(): Inventory.Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    gym_id: string;
    getGymId(): string;
    setGymId(value: any, noAssert?: boolean);
    player_latitude: number;
    getPlayerLatitude(): number;
    setPlayerLatitude(value: any, noAssert?: boolean);
    player_longitude: number;
    getPlayerLongitude(): number;
    setPlayerLongitude(value: any, noAssert?: boolean);
  }
  
  interface UseItemGymMessageData {
    item_id?: Inventory.Item.ItemId;
    gym_id?: string;
    player_latitude?: number;
    player_longitude?: number;
  }


  export class UseItemPotionMessage extends ProtoBufMessage {
    constructor(data: UseItemPotionMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemPotionMessage;
    item_id: Inventory.Item.ItemId;
    getItemId(): Inventory.Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
  }
  
  interface UseItemPotionMessageData {
    item_id?: Inventory.Item.ItemId;
    pokemon_id?: number;
  }


  export class UseItemReviveMessage extends ProtoBufMessage {
    constructor(data: UseItemReviveMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemReviveMessage;
    item_id: Inventory.Item.ItemId;
    getItemId(): Inventory.Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    pokemon_id: number;
    getPokemonId(): number;
    setPokemonId(value: any, noAssert?: boolean);
  }
  
  interface UseItemReviveMessageData {
    item_id?: Inventory.Item.ItemId;
    pokemon_id?: number;
  }


  export class UseItemXpBoostMessage extends ProtoBufMessage {
    constructor(data: UseItemXpBoostMessageData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemXpBoostMessage;
    item_id: Inventory.Item.ItemId;
    getItemId(): Inventory.Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
  }
  
  interface UseItemXpBoostMessageData {
    item_id?: Inventory.Item.ItemId;
  }

}
    

export namespace Networking.Envelopes {
  
  export class AuthTicket extends ProtoBufMessage {
    constructor(data: AuthTicketData);
    static decode(buffer?: any, length?: number | string, enc?: string): AuthTicket;
    start: ByteBuffer;
    getStart(): ByteBuffer;
    setStart(value: any, noAssert?: boolean);
    expire_timestamp_ms: number;
    getExpireTimestampMs(): number;
    setExpireTimestampMs(value: any, noAssert?: boolean);
    end: ByteBuffer;
    getEnd(): ByteBuffer;
    setEnd(value: any, noAssert?: boolean);
  }
  
  interface AuthTicketData {
    start?: ByteBuffer;
    expire_timestamp_ms?: number;
    end?: ByteBuffer;
  }


  export class RequestEnvelope extends ProtoBufMessage {
    constructor(data: RequestEnvelopeData);
    static decode(buffer?: any, length?: number | string, enc?: string): RequestEnvelope;
    status_code: number;
    getStatusCode(): number;
    setStatusCode(value: any, noAssert?: boolean);
    request_id: number;
    getRequestId(): number;
    setRequestId(value: any, noAssert?: boolean);
    requests: Requests.Request[];
    getRequests(): Requests.Request[];
    setRequests(value: any, noAssert?: boolean);
    unknown6: Envelopes.Unknown6[];
    getUnknown6(): Envelopes.Unknown6[];
    setUnknown6(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
    altitude: number;
    getAltitude(): number;
    setAltitude(value: any, noAssert?: boolean);
    auth_info: RequestEnvelope.AuthInfo;
    getAuthInfo(): RequestEnvelope.AuthInfo;
    setAuthInfo(value: any, noAssert?: boolean);
    auth_ticket: Envelopes.AuthTicket;
    getAuthTicket(): Envelopes.AuthTicket;
    setAuthTicket(value: any, noAssert?: boolean);
    unknown12: number;
    getUnknown12(): number;
    setUnknown12(value: any, noAssert?: boolean);
  }
  
  interface RequestEnvelopeData {
    status_code?: number;
    request_id?: number;
    requests: Requests.Request[];
    unknown6: Envelopes.Unknown6[];
    latitude?: number;
    longitude?: number;
    altitude?: number;
    auth_info?: RequestEnvelope.AuthInfo;
    auth_ticket?: Envelopes.AuthTicket;
    unknown12?: number;
  }


  export class ResponseEnvelope extends ProtoBufMessage {
    constructor(data: ResponseEnvelopeData);
    static decode(buffer?: any, length?: number | string, enc?: string): ResponseEnvelope;
    status_code: number;
    getStatusCode(): number;
    setStatusCode(value: any, noAssert?: boolean);
    request_id: number;
    getRequestId(): number;
    setRequestId(value: any, noAssert?: boolean);
    api_url: string;
    getApiUrl(): string;
    setApiUrl(value: any, noAssert?: boolean);
    unknown6: Envelopes.Unknown6Response[];
    getUnknown6(): Envelopes.Unknown6Response[];
    setUnknown6(value: any, noAssert?: boolean);
    auth_ticket: Envelopes.AuthTicket;
    getAuthTicket(): Envelopes.AuthTicket;
    setAuthTicket(value: any, noAssert?: boolean);
    returns: ByteBuffer[];
    getReturns(): ByteBuffer[];
    setReturns(value: any, noAssert?: boolean);
    error: string;
    getError(): string;
    setError(value: any, noAssert?: boolean);
  }
  
  interface ResponseEnvelopeData {
    status_code?: number;
    request_id?: number;
    api_url?: string;
    unknown6: Envelopes.Unknown6Response[];
    auth_ticket?: Envelopes.AuthTicket;
    returns: ByteBuffer[];
    error?: string;
  }


  export class Unknown6 extends ProtoBufMessage {
    constructor(data: Unknown6Data);
    static decode(buffer?: any, length?: number | string, enc?: string): Unknown6;
    request_type: number;
    getRequestType(): number;
    setRequestType(value: any, noAssert?: boolean);
    unknown2: Unknown6.Unknown2;
    getUnknown2(): Unknown6.Unknown2;
    setUnknown2(value: any, noAssert?: boolean);
  }
  
  interface Unknown6Data {
    request_type?: number;
    unknown2?: Unknown6.Unknown2;
  }


  export class Unknown6Response extends ProtoBufMessage {
    constructor(data: Unknown6ResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): Unknown6Response;
    response_type: number;
    getResponseType(): number;
    setResponseType(value: any, noAssert?: boolean);
    unknown2: Unknown6Response.Unknown2;
    getUnknown2(): Unknown6Response.Unknown2;
    setUnknown2(value: any, noAssert?: boolean);
  }
  
  interface Unknown6ResponseData {
    response_type?: number;
    unknown2?: Unknown6Response.Unknown2;
  }

}
    

export namespace Networking.Envelopes.RequestEnvelope {
  
  export class AuthInfo extends ProtoBufMessage {
    constructor(data: AuthInfoData);
    static decode(buffer?: any, length?: number | string, enc?: string): AuthInfo;
    provider: string;
    getProvider(): string;
    setProvider(value: any, noAssert?: boolean);
    token: AuthInfo.JWT;
    getToken(): AuthInfo.JWT;
    setToken(value: any, noAssert?: boolean);
  }
  
  interface AuthInfoData {
    provider?: string;
    token?: AuthInfo.JWT;
  }

}
    

export namespace Networking.Envelopes.RequestEnvelope.AuthInfo {
  
  export class JWT extends ProtoBufMessage {
    constructor(data: JWTData);
    static decode(buffer?: any, length?: number | string, enc?: string): JWT;
    contents: string;
    getContents(): string;
    setContents(value: any, noAssert?: boolean);
    unknown2: number;
    getUnknown2(): number;
    setUnknown2(value: any, noAssert?: boolean);
  }
  
  interface JWTData {
    contents?: string;
    unknown2?: number;
  }

}
    

export namespace Networking.Envelopes.ResponseEnvelope {
  
  export class Unknown7 extends ProtoBufMessage {
    constructor(data: Unknown7Data);
    static decode(buffer?: any, length?: number | string, enc?: string): Unknown7;
    unknown71: ByteBuffer;
    getUnknown71(): ByteBuffer;
    setUnknown71(value: any, noAssert?: boolean);
    unknown72: number;
    getUnknown72(): number;
    setUnknown72(value: any, noAssert?: boolean);
    unknown73: ByteBuffer;
    getUnknown73(): ByteBuffer;
    setUnknown73(value: any, noAssert?: boolean);
  }
  
  interface Unknown7Data {
    unknown71?: ByteBuffer;
    unknown72?: number;
    unknown73?: ByteBuffer;
  }

}
    

export namespace Networking.Envelopes.Unknown6 {
  
  export class Unknown2 extends ProtoBufMessage {
    constructor(data: Unknown2Data);
    static decode(buffer?: any, length?: number | string, enc?: string): Unknown2;
    unknown1: ByteBuffer;
    getUnknown1(): ByteBuffer;
    setUnknown1(value: any, noAssert?: boolean);
  }
  
  interface Unknown2Data {
    unknown1?: ByteBuffer;
  }

}
    

export namespace Networking.Envelopes.Unknown6Response {
  
  export class Unknown2 extends ProtoBufMessage {
    constructor(data: Unknown2Data);
    static decode(buffer?: any, length?: number | string, enc?: string): Unknown2;
    unknown1: number;
    getUnknown1(): number;
    setUnknown1(value: any, noAssert?: boolean);
    items: Unknown2.StoreItem[];
    getItems(): Unknown2.StoreItem[];
    setItems(value: any, noAssert?: boolean);
    player_currencies: Data.Player.Currency[];
    getPlayerCurrencies(): Data.Player.Currency[];
    setPlayerCurrencies(value: any, noAssert?: boolean);
    unknown4: string;
    getUnknown4(): string;
    setUnknown4(value: any, noAssert?: boolean);
  }
  
  interface Unknown2Data {
    unknown1?: number;
    items: Unknown2.StoreItem[];
    player_currencies: Data.Player.Currency[];
    unknown4?: string;
  }

}
    

export namespace Networking.Envelopes.Unknown6Response.Unknown2 {
  
  export class StoreItem extends ProtoBufMessage {
    constructor(data: StoreItemData);
    static decode(buffer?: any, length?: number | string, enc?: string): StoreItem;
    item_id: string;
    getItemId(): string;
    setItemId(value: any, noAssert?: boolean);
    is_iap: boolean;
    getIsIap(): boolean;
    setIsIap(value: any, noAssert?: boolean);
    currency_to_buy: Data.Player.Currency;
    getCurrencyToBuy(): Data.Player.Currency;
    setCurrencyToBuy(value: any, noAssert?: boolean);
    yields_currency: Data.Player.Currency;
    getYieldsCurrency(): Data.Player.Currency;
    setYieldsCurrency(value: any, noAssert?: boolean);
    yields_item: Inventory.Item.ItemData;
    getYieldsItem(): Inventory.Item.ItemData;
    setYieldsItem(value: any, noAssert?: boolean);
    tags: StoreItem.Tag[];
    getTags(): StoreItem.Tag[];
    setTags(value: any, noAssert?: boolean);
    unknown7: number;
    getUnknown7(): number;
    setUnknown7(value: any, noAssert?: boolean);
  }
  
  interface StoreItemData {
    item_id?: string;
    is_iap?: boolean;
    currency_to_buy?: Data.Player.Currency;
    yields_currency?: Data.Player.Currency;
    yields_item?: Inventory.Item.ItemData;
    tags: StoreItem.Tag[];
    unknown7?: number;
  }

}
    

export namespace Networking.Envelopes.Unknown6Response.Unknown2.StoreItem {
  
  export class Tag extends ProtoBufMessage {
    constructor(data: TagData);
    static decode(buffer?: any, length?: number | string, enc?: string): Tag;
    key: string;
    getKey(): string;
    setKey(value: any, noAssert?: boolean);
    value: string;
    getValue(): string;
    setValue(value: any, noAssert?: boolean);
  }
  
  interface TagData {
    key?: string;
    value?: string;
  }

}
    

export namespace Networking.Responses {
  
  export class AttackGymResponse extends ProtoBufMessage {
    constructor(data: AttackGymResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): AttackGymResponse;
    result: AttackGymResponse.Result;
    getResult(): AttackGymResponse.Result;
    setResult(value: any, noAssert?: boolean);
    battle_log: Data.Battle.BattleLog;
    getBattleLog(): Data.Battle.BattleLog;
    setBattleLog(value: any, noAssert?: boolean);
    battle_id: string;
    getBattleId(): string;
    setBattleId(value: any, noAssert?: boolean);
    active_defender: Data.Battle.BattlePokemonInfo;
    getActiveDefender(): Data.Battle.BattlePokemonInfo;
    setActiveDefender(value: any, noAssert?: boolean);
    active_attacker: Data.Battle.BattlePokemonInfo;
    getActiveAttacker(): Data.Battle.BattlePokemonInfo;
    setActiveAttacker(value: any, noAssert?: boolean);
  }
  
  interface AttackGymResponseData {
    result?: AttackGymResponse.Result;
    battle_log?: Data.Battle.BattleLog;
    battle_id?: string;
    active_defender?: Data.Battle.BattlePokemonInfo;
    active_attacker?: Data.Battle.BattlePokemonInfo;
  }


  export class CatchPokemonResponse extends ProtoBufMessage {
    constructor(data: CatchPokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): CatchPokemonResponse;
    status: CatchPokemonResponse.CatchStatus;
    getStatus(): CatchPokemonResponse.CatchStatus;
    setStatus(value: any, noAssert?: boolean);
    miss_percent: number;
    getMissPercent(): number;
    setMissPercent(value: any, noAssert?: boolean);
    captured_pokemon_id: number;
    getCapturedPokemonId(): number;
    setCapturedPokemonId(value: any, noAssert?: boolean);
    capture_award: Data.Capture.CaptureAward;
    getCaptureAward(): Data.Capture.CaptureAward;
    setCaptureAward(value: any, noAssert?: boolean);
  }
  
  interface CatchPokemonResponseData {
    status?: CatchPokemonResponse.CatchStatus;
    miss_percent?: number;
    captured_pokemon_id?: number;
    capture_award?: Data.Capture.CaptureAward;
  }


  export class CheckAwardedBadgesResponse extends ProtoBufMessage {
    constructor(data: CheckAwardedBadgesResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): CheckAwardedBadgesResponse;
    success: boolean;
    getSuccess(): boolean;
    setSuccess(value: any, noAssert?: boolean);
    awarded_badges: Enums.BadgeType[];
    getAwardedBadges(): Enums.BadgeType[];
    setAwardedBadges(value: any, noAssert?: boolean);
    awarded_badge_levels: number[];
    getAwardedBadgeLevels(): number[];
    setAwardedBadgeLevels(value: any, noAssert?: boolean);
  }
  
  interface CheckAwardedBadgesResponseData {
    success?: boolean;
    awarded_badges: Enums.BadgeType[];
    awarded_badge_levels: number[];
  }


  export class CheckCodenameAvailableResponse extends ProtoBufMessage {
    constructor(data: CheckCodenameAvailableResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): CheckCodenameAvailableResponse;
    codename: string;
    getCodename(): string;
    setCodename(value: any, noAssert?: boolean);
    user_message: string;
    getUserMessage(): string;
    setUserMessage(value: any, noAssert?: boolean);
    is_assignable: boolean;
    getIsAssignable(): boolean;
    setIsAssignable(value: any, noAssert?: boolean);
    status: CheckCodenameAvailableResponse.Status;
    getStatus(): CheckCodenameAvailableResponse.Status;
    setStatus(value: any, noAssert?: boolean);
  }
  
  interface CheckCodenameAvailableResponseData {
    codename?: string;
    user_message?: string;
    is_assignable?: boolean;
    status?: CheckCodenameAvailableResponse.Status;
  }


  export class ClaimCodenameResponse extends ProtoBufMessage {
    constructor(data: ClaimCodenameResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): ClaimCodenameResponse;
    codename: string;
    getCodename(): string;
    setCodename(value: any, noAssert?: boolean);
    user_message: string;
    getUserMessage(): string;
    setUserMessage(value: any, noAssert?: boolean);
    is_assignable: boolean;
    getIsAssignable(): boolean;
    setIsAssignable(value: any, noAssert?: boolean);
    status: ClaimCodenameResponse.Status;
    getStatus(): ClaimCodenameResponse.Status;
    setStatus(value: any, noAssert?: boolean);
  }
  
  interface ClaimCodenameResponseData {
    codename?: string;
    user_message?: string;
    is_assignable?: boolean;
    status?: ClaimCodenameResponse.Status;
  }


  export class CollectDailyBonusResponse extends ProtoBufMessage {
    constructor(data: CollectDailyBonusResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): CollectDailyBonusResponse;
    result: CollectDailyBonusResponse.Result;
    getResult(): CollectDailyBonusResponse.Result;
    setResult(value: any, noAssert?: boolean);
  }
  
  interface CollectDailyBonusResponseData {
    result?: CollectDailyBonusResponse.Result;
  }


  export class CollectDailyDefenderBonusResponse extends ProtoBufMessage {
    constructor(data: CollectDailyDefenderBonusResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): CollectDailyDefenderBonusResponse;
    result: CollectDailyDefenderBonusResponse.Result;
    getResult(): CollectDailyDefenderBonusResponse.Result;
    setResult(value: any, noAssert?: boolean);
    currency_type: string[];
    getCurrencyType(): string[];
    setCurrencyType(value: any, noAssert?: boolean);
    currency_awarded: number[];
    getCurrencyAwarded(): number[];
    setCurrencyAwarded(value: any, noAssert?: boolean);
    defenders_count: number;
    getDefendersCount(): number;
    setDefendersCount(value: any, noAssert?: boolean);
  }
  
  interface CollectDailyDefenderBonusResponseData {
    result?: CollectDailyDefenderBonusResponse.Result;
    currency_type: string[];
    currency_awarded: number[];
    defenders_count?: number;
  }


  export class DiskEncounterResponse extends ProtoBufMessage {
    constructor(data: DiskEncounterResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): DiskEncounterResponse;
    result: DiskEncounterResponse.Result;
    getResult(): DiskEncounterResponse.Result;
    setResult(value: any, noAssert?: boolean);
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    capture_probability: Data.Capture.CaptureProbability;
    getCaptureProbability(): Data.Capture.CaptureProbability;
    setCaptureProbability(value: any, noAssert?: boolean);
  }
  
  interface DiskEncounterResponseData {
    result?: DiskEncounterResponse.Result;
    pokemon_data?: Data.PokemonData;
    capture_probability?: Data.Capture.CaptureProbability;
  }


  export class DownloadItemTemplatesResponse extends ProtoBufMessage {
    constructor(data: DownloadItemTemplatesResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): DownloadItemTemplatesResponse;
    success: boolean;
    getSuccess(): boolean;
    setSuccess(value: any, noAssert?: boolean);
    item_templates: DownloadItemTemplatesResponse.ItemTemplate[];
    getItemTemplates(): DownloadItemTemplatesResponse.ItemTemplate[];
    setItemTemplates(value: any, noAssert?: boolean);
    timestamp_ms: number;
    getTimestampMs(): number;
    setTimestampMs(value: any, noAssert?: boolean);
  }
  
  interface DownloadItemTemplatesResponseData {
    success?: boolean;
    item_templates: DownloadItemTemplatesResponse.ItemTemplate[];
    timestamp_ms?: number;
  }


  export class DownloadRemoteConfigVersionResponse extends ProtoBufMessage {
    constructor(data: DownloadRemoteConfigVersionResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): DownloadRemoteConfigVersionResponse;
    result: DownloadRemoteConfigVersionResponse.Result;
    getResult(): DownloadRemoteConfigVersionResponse.Result;
    setResult(value: any, noAssert?: boolean);
    item_templates_timestamp_ms: number;
    getItemTemplatesTimestampMs(): number;
    setItemTemplatesTimestampMs(value: any, noAssert?: boolean);
    asset_digest_timestamp_ms: number;
    getAssetDigestTimestampMs(): number;
    setAssetDigestTimestampMs(value: any, noAssert?: boolean);
  }
  
  interface DownloadRemoteConfigVersionResponseData {
    result?: DownloadRemoteConfigVersionResponse.Result;
    item_templates_timestamp_ms?: number;
    asset_digest_timestamp_ms?: number;
  }


  export class DownloadSettingsResponse extends ProtoBufMessage {
    constructor(data: DownloadSettingsResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): DownloadSettingsResponse;
    error: string;
    getError(): string;
    setError(value: any, noAssert?: boolean);
    hash: string;
    getHash(): string;
    setHash(value: any, noAssert?: boolean);
    settings: Settings.GlobalSettings;
    getSettings(): Settings.GlobalSettings;
    setSettings(value: any, noAssert?: boolean);
  }
  
  interface DownloadSettingsResponseData {
    error?: string;
    hash?: string;
    settings?: Settings.GlobalSettings;
  }


  export class EchoResponse extends ProtoBufMessage {
    constructor(data: EchoResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): EchoResponse;
    context: string;
    getContext(): string;
    setContext(value: any, noAssert?: boolean);
  }
  
  interface EchoResponseData {
    context?: string;
  }


  export class EncounterResponse extends ProtoBufMessage {
    constructor(data: EncounterResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): EncounterResponse;
    wild_pokemon: Map.Pokemon.WildPokemon;
    getWildPokemon(): Map.Pokemon.WildPokemon;
    setWildPokemon(value: any, noAssert?: boolean);
    background: EncounterResponse.Background;
    getBackground(): EncounterResponse.Background;
    setBackground(value: any, noAssert?: boolean);
    status: EncounterResponse.Status;
    getStatus(): EncounterResponse.Status;
    setStatus(value: any, noAssert?: boolean);
    capture_probability: Data.Capture.CaptureProbability;
    getCaptureProbability(): Data.Capture.CaptureProbability;
    setCaptureProbability(value: any, noAssert?: boolean);
  }
  
  interface EncounterResponseData {
    wild_pokemon?: Map.Pokemon.WildPokemon;
    background?: EncounterResponse.Background;
    status?: EncounterResponse.Status;
    capture_probability?: Data.Capture.CaptureProbability;
  }


  export class EncounterTutorialCompleteResponse extends ProtoBufMessage {
    constructor(data: EncounterTutorialCompleteResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): EncounterTutorialCompleteResponse;
    result: EncounterTutorialCompleteResponse.Result;
    getResult(): EncounterTutorialCompleteResponse.Result;
    setResult(value: any, noAssert?: boolean);
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    capture_award: Data.Capture.CaptureAward;
    getCaptureAward(): Data.Capture.CaptureAward;
    setCaptureAward(value: any, noAssert?: boolean);
  }
  
  interface EncounterTutorialCompleteResponseData {
    result?: EncounterTutorialCompleteResponse.Result;
    pokemon_data?: Data.PokemonData;
    capture_award?: Data.Capture.CaptureAward;
  }


  export class EquipBadgeResponse extends ProtoBufMessage {
    constructor(data: EquipBadgeResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): EquipBadgeResponse;
    result: EquipBadgeResponse.Result;
    getResult(): EquipBadgeResponse.Result;
    setResult(value: any, noAssert?: boolean);
    equipped: Data.Player.EquippedBadge;
    getEquipped(): Data.Player.EquippedBadge;
    setEquipped(value: any, noAssert?: boolean);
  }
  
  interface EquipBadgeResponseData {
    result?: EquipBadgeResponse.Result;
    equipped?: Data.Player.EquippedBadge;
  }


  export class EvolvePokemonResponse extends ProtoBufMessage {
    constructor(data: EvolvePokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): EvolvePokemonResponse;
    result: EvolvePokemonResponse.Result;
    getResult(): EvolvePokemonResponse.Result;
    setResult(value: any, noAssert?: boolean);
    evolved_pokemon_data: Data.PokemonData;
    getEvolvedPokemonData(): Data.PokemonData;
    setEvolvedPokemonData(value: any, noAssert?: boolean);
    experience_awarded: number;
    getExperienceAwarded(): number;
    setExperienceAwarded(value: any, noAssert?: boolean);
    candy_awarded: number;
    getCandyAwarded(): number;
    setCandyAwarded(value: any, noAssert?: boolean);
  }
  
  interface EvolvePokemonResponseData {
    result?: EvolvePokemonResponse.Result;
    evolved_pokemon_data?: Data.PokemonData;
    experience_awarded?: number;
    candy_awarded?: number;
  }


  export class FortDeployPokemonResponse extends ProtoBufMessage {
    constructor(data: FortDeployPokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortDeployPokemonResponse;
    result: FortDeployPokemonResponse.Result;
    getResult(): FortDeployPokemonResponse.Result;
    setResult(value: any, noAssert?: boolean);
    fort_details: Responses.FortDetailsResponse;
    getFortDetails(): Responses.FortDetailsResponse;
    setFortDetails(value: any, noAssert?: boolean);
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    gym_state: Data.Gym.GymState;
    getGymState(): Data.Gym.GymState;
    setGymState(value: any, noAssert?: boolean);
  }
  
  interface FortDeployPokemonResponseData {
    result?: FortDeployPokemonResponse.Result;
    fort_details?: Responses.FortDetailsResponse;
    pokemon_data?: Data.PokemonData;
    gym_state?: Data.Gym.GymState;
  }


  export class FortDetailsResponse extends ProtoBufMessage {
    constructor(data: FortDetailsResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortDetailsResponse;
    fort_id: string;
    getFortId(): string;
    setFortId(value: any, noAssert?: boolean);
    team_color: Enums.TeamColor;
    getTeamColor(): Enums.TeamColor;
    setTeamColor(value: any, noAssert?: boolean);
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    name: string;
    getName(): string;
    setName(value: any, noAssert?: boolean);
    image_urls: string[];
    getImageUrls(): string[];
    setImageUrls(value: any, noAssert?: boolean);
    fp: number;
    getFp(): number;
    setFp(value: any, noAssert?: boolean);
    stamina: number;
    getStamina(): number;
    setStamina(value: any, noAssert?: boolean);
    max_stamina: number;
    getMaxStamina(): number;
    setMaxStamina(value: any, noAssert?: boolean);
    type: Map.Fort.FortType;
    getType(): Map.Fort.FortType;
    setType(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
    description: string;
    getDescription(): string;
    setDescription(value: any, noAssert?: boolean);
    modifiers: Map.Fort.FortModifier[];
    getModifiers(): Map.Fort.FortModifier[];
    setModifiers(value: any, noAssert?: boolean);
  }
  
  interface FortDetailsResponseData {
    fort_id?: string;
    team_color?: Enums.TeamColor;
    pokemon_data?: Data.PokemonData;
    name?: string;
    image_urls: string[];
    fp?: number;
    stamina?: number;
    max_stamina?: number;
    type?: Map.Fort.FortType;
    latitude?: number;
    longitude?: number;
    description?: string;
    modifiers: Map.Fort.FortModifier[];
  }


  export class FortRecallPokemonResponse extends ProtoBufMessage {
    constructor(data: FortRecallPokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortRecallPokemonResponse;
    result: FortRecallPokemonResponse.Result;
    getResult(): FortRecallPokemonResponse.Result;
    setResult(value: any, noAssert?: boolean);
    fort_details: Responses.FortDetailsResponse;
    getFortDetails(): Responses.FortDetailsResponse;
    setFortDetails(value: any, noAssert?: boolean);
  }
  
  interface FortRecallPokemonResponseData {
    result?: FortRecallPokemonResponse.Result;
    fort_details?: Responses.FortDetailsResponse;
  }


  export class FortSearchResponse extends ProtoBufMessage {
    constructor(data: FortSearchResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortSearchResponse;
    result: FortSearchResponse.Result;
    getResult(): FortSearchResponse.Result;
    setResult(value: any, noAssert?: boolean);
    items_awarded: Inventory.Item.ItemAward[];
    getItemsAwarded(): Inventory.Item.ItemAward[];
    setItemsAwarded(value: any, noAssert?: boolean);
    gems_awarded: number;
    getGemsAwarded(): number;
    setGemsAwarded(value: any, noAssert?: boolean);
    pokemon_data_egg: Data.PokemonData;
    getPokemonDataEgg(): Data.PokemonData;
    setPokemonDataEgg(value: any, noAssert?: boolean);
    experience_awarded: number;
    getExperienceAwarded(): number;
    setExperienceAwarded(value: any, noAssert?: boolean);
    cooldown_complete_timestamp_ms: number;
    getCooldownCompleteTimestampMs(): number;
    setCooldownCompleteTimestampMs(value: any, noAssert?: boolean);
    chain_hack_sequence_number: number;
    getChainHackSequenceNumber(): number;
    setChainHackSequenceNumber(value: any, noAssert?: boolean);
  }
  
  interface FortSearchResponseData {
    result?: FortSearchResponse.Result;
    items_awarded: Inventory.Item.ItemAward[];
    gems_awarded?: number;
    pokemon_data_egg?: Data.PokemonData;
    experience_awarded?: number;
    cooldown_complete_timestamp_ms?: number;
    chain_hack_sequence_number?: number;
  }


  export class GetAssetDigestResponse extends ProtoBufMessage {
    constructor(data: GetAssetDigestResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetAssetDigestResponse;
    digest: Data.AssetDigestEntry[];
    getDigest(): Data.AssetDigestEntry[];
    setDigest(value: any, noAssert?: boolean);
    timestamp_ms: number;
    getTimestampMs(): number;
    setTimestampMs(value: any, noAssert?: boolean);
  }
  
  interface GetAssetDigestResponseData {
    digest: Data.AssetDigestEntry[];
    timestamp_ms?: number;
  }


  export class GetDownloadUrlsResponse extends ProtoBufMessage {
    constructor(data: GetDownloadUrlsResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetDownloadUrlsResponse;
    download_urls: Data.DownloadUrlEntry[];
    getDownloadUrls(): Data.DownloadUrlEntry[];
    setDownloadUrls(value: any, noAssert?: boolean);
  }
  
  interface GetDownloadUrlsResponseData {
    download_urls: Data.DownloadUrlEntry[];
  }


  export class GetGymDetailsResponse extends ProtoBufMessage {
    constructor(data: GetGymDetailsResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetGymDetailsResponse;
    gym_state: Data.Gym.GymState;
    getGymState(): Data.Gym.GymState;
    setGymState(value: any, noAssert?: boolean);
    name: string;
    getName(): string;
    setName(value: any, noAssert?: boolean);
    urls: string[];
    getUrls(): string[];
    setUrls(value: any, noAssert?: boolean);
    result: GetGymDetailsResponse.Result;
    getResult(): GetGymDetailsResponse.Result;
    setResult(value: any, noAssert?: boolean);
    description: string;
    getDescription(): string;
    setDescription(value: any, noAssert?: boolean);
  }
  
  interface GetGymDetailsResponseData {
    gym_state?: Data.Gym.GymState;
    name?: string;
    urls: string[];
    result?: GetGymDetailsResponse.Result;
    description?: string;
  }


  export class GetHatchedEggsResponse extends ProtoBufMessage {
    constructor(data: GetHatchedEggsResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetHatchedEggsResponse;
    success: boolean;
    getSuccess(): boolean;
    setSuccess(value: any, noAssert?: boolean);
    pokemon_id: number[];
    getPokemonId(): number[];
    setPokemonId(value: any, noAssert?: boolean);
    experience_awarded: number[];
    getExperienceAwarded(): number[];
    setExperienceAwarded(value: any, noAssert?: boolean);
    candy_awarded: number[];
    getCandyAwarded(): number[];
    setCandyAwarded(value: any, noAssert?: boolean);
    stardust_awarded: number[];
    getStardustAwarded(): number[];
    setStardustAwarded(value: any, noAssert?: boolean);
  }
  
  interface GetHatchedEggsResponseData {
    success?: boolean;
    pokemon_id: number[];
    experience_awarded: number[];
    candy_awarded: number[];
    stardust_awarded: number[];
  }


  export class GetIncensePokemonResponse extends ProtoBufMessage {
    constructor(data: GetIncensePokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetIncensePokemonResponse;
    result: GetIncensePokemonResponse.Result;
    getResult(): GetIncensePokemonResponse.Result;
    setResult(value: any, noAssert?: boolean);
    pokemon_id: Enums.PokemonId;
    getPokemonId(): Enums.PokemonId;
    setPokemonId(value: any, noAssert?: boolean);
    latitude: number;
    getLatitude(): number;
    setLatitude(value: any, noAssert?: boolean);
    longitude: number;
    getLongitude(): number;
    setLongitude(value: any, noAssert?: boolean);
    encounter_location: string;
    getEncounterLocation(): string;
    setEncounterLocation(value: any, noAssert?: boolean);
    encounter_id: number;
    getEncounterId(): number;
    setEncounterId(value: any, noAssert?: boolean);
    disappear_timestamp_ms: number;
    getDisappearTimestampMs(): number;
    setDisappearTimestampMs(value: any, noAssert?: boolean);
  }
  
  interface GetIncensePokemonResponseData {
    result?: GetIncensePokemonResponse.Result;
    pokemon_id?: Enums.PokemonId;
    latitude?: number;
    longitude?: number;
    encounter_location?: string;
    encounter_id?: number;
    disappear_timestamp_ms?: number;
  }


  export class GetInventoryResponse extends ProtoBufMessage {
    constructor(data: GetInventoryResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetInventoryResponse;
    success: boolean;
    getSuccess(): boolean;
    setSuccess(value: any, noAssert?: boolean);
    inventory_delta: Inventory.InventoryDelta;
    getInventoryDelta(): Inventory.InventoryDelta;
    setInventoryDelta(value: any, noAssert?: boolean);
  }
  
  interface GetInventoryResponseData {
    success?: boolean;
    inventory_delta?: Inventory.InventoryDelta;
  }


  export class GetMapObjectsResponse extends ProtoBufMessage {
    constructor(data: GetMapObjectsResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetMapObjectsResponse;
    map_cells: Map.MapCell[];
    getMapCells(): Map.MapCell[];
    setMapCells(value: any, noAssert?: boolean);
    status: Map.MapObjectsStatus;
    getStatus(): Map.MapObjectsStatus;
    setStatus(value: any, noAssert?: boolean);
  }
  
  interface GetMapObjectsResponseData {
    map_cells: Map.MapCell[];
    status?: Map.MapObjectsStatus;
  }


  export class GetPlayerProfileResponse extends ProtoBufMessage {
    constructor(data: GetPlayerProfileResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetPlayerProfileResponse;
    result: GetPlayerProfileResponse.Result;
    getResult(): GetPlayerProfileResponse.Result;
    setResult(value: any, noAssert?: boolean);
    start_time: number;
    getStartTime(): number;
    setStartTime(value: any, noAssert?: boolean);
    badges: Data.PlayerBadge[];
    getBadges(): Data.PlayerBadge[];
    setBadges(value: any, noAssert?: boolean);
  }
  
  interface GetPlayerProfileResponseData {
    result?: GetPlayerProfileResponse.Result;
    start_time?: number;
    badges: Data.PlayerBadge[];
  }


  export class GetPlayerResponse extends ProtoBufMessage {
    constructor(data: GetPlayerResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetPlayerResponse;
    success: boolean;
    getSuccess(): boolean;
    setSuccess(value: any, noAssert?: boolean);
    player_data: Data.PlayerData;
    getPlayerData(): Data.PlayerData;
    setPlayerData(value: any, noAssert?: boolean);
  }
  
  interface GetPlayerResponseData {
    success?: boolean;
    player_data?: Data.PlayerData;
  }


  export class GetSuggestedCodenamesResponse extends ProtoBufMessage {
    constructor(data: GetSuggestedCodenamesResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): GetSuggestedCodenamesResponse;
    codenames: string[];
    getCodenames(): string[];
    setCodenames(value: any, noAssert?: boolean);
    success: boolean;
    getSuccess(): boolean;
    setSuccess(value: any, noAssert?: boolean);
  }
  
  interface GetSuggestedCodenamesResponseData {
    codenames: string[];
    success?: boolean;
  }


  export class IncenseEncounterResponse extends ProtoBufMessage {
    constructor(data: IncenseEncounterResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): IncenseEncounterResponse;
    result: IncenseEncounterResponse.Result;
    getResult(): IncenseEncounterResponse.Result;
    setResult(value: any, noAssert?: boolean);
    pokemon_data: Data.PokemonData;
    getPokemonData(): Data.PokemonData;
    setPokemonData(value: any, noAssert?: boolean);
    capture_probability: Data.Capture.CaptureProbability;
    getCaptureProbability(): Data.Capture.CaptureProbability;
    setCaptureProbability(value: any, noAssert?: boolean);
  }
  
  interface IncenseEncounterResponseData {
    result?: IncenseEncounterResponse.Result;
    pokemon_data?: Data.PokemonData;
    capture_probability?: Data.Capture.CaptureProbability;
  }


  export class LevelUpRewardsResponse extends ProtoBufMessage {
    constructor(data: LevelUpRewardsResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): LevelUpRewardsResponse;
    result: LevelUpRewardsResponse.Result;
    getResult(): LevelUpRewardsResponse.Result;
    setResult(value: any, noAssert?: boolean);
    items_awarded: Inventory.Item.ItemAward[];
    getItemsAwarded(): Inventory.Item.ItemAward[];
    setItemsAwarded(value: any, noAssert?: boolean);
    items_unlocked: Inventory.Item.ItemId[];
    getItemsUnlocked(): Inventory.Item.ItemId[];
    setItemsUnlocked(value: any, noAssert?: boolean);
  }
  
  interface LevelUpRewardsResponseData {
    result?: LevelUpRewardsResponse.Result;
    items_awarded: Inventory.Item.ItemAward[];
    items_unlocked: Inventory.Item.ItemId[];
  }


  export class MarkTutorialCompleteResponse extends ProtoBufMessage {
    constructor(data: MarkTutorialCompleteResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): MarkTutorialCompleteResponse;
    success: boolean;
    getSuccess(): boolean;
    setSuccess(value: any, noAssert?: boolean);
    player_data: Data.PlayerData;
    getPlayerData(): Data.PlayerData;
    setPlayerData(value: any, noAssert?: boolean);
  }
  
  interface MarkTutorialCompleteResponseData {
    success?: boolean;
    player_data?: Data.PlayerData;
  }


  export class NicknamePokemonResponse extends ProtoBufMessage {
    constructor(data: NicknamePokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): NicknamePokemonResponse;
    result: NicknamePokemonResponse.Result;
    getResult(): NicknamePokemonResponse.Result;
    setResult(value: any, noAssert?: boolean);
  }
  
  interface NicknamePokemonResponseData {
    result?: NicknamePokemonResponse.Result;
  }


  export class PlayerUpdateResponse extends ProtoBufMessage {
    constructor(data: PlayerUpdateResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerUpdateResponse;
    wild_pokemons: Map.Pokemon.WildPokemon[];
    getWildPokemons(): Map.Pokemon.WildPokemon[];
    setWildPokemons(value: any, noAssert?: boolean);
    forts: Map.Fort.FortData[];
    getForts(): Map.Fort.FortData[];
    setForts(value: any, noAssert?: boolean);
    forts_nearby: number;
    getFortsNearby(): number;
    setFortsNearby(value: any, noAssert?: boolean);
  }
  
  interface PlayerUpdateResponseData {
    wild_pokemons: Map.Pokemon.WildPokemon[];
    forts: Map.Fort.FortData[];
    forts_nearby?: number;
  }


  export class RecycleInventoryItemResponse extends ProtoBufMessage {
    constructor(data: RecycleInventoryItemResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): RecycleInventoryItemResponse;
    result: RecycleInventoryItemResponse.Result;
    getResult(): RecycleInventoryItemResponse.Result;
    setResult(value: any, noAssert?: boolean);
    new_count: number;
    getNewCount(): number;
    setNewCount(value: any, noAssert?: boolean);
  }
  
  interface RecycleInventoryItemResponseData {
    result?: RecycleInventoryItemResponse.Result;
    new_count?: number;
  }


  export class ReleasePokemonResponse extends ProtoBufMessage {
    constructor(data: ReleasePokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): ReleasePokemonResponse;
    result: ReleasePokemonResponse.Result;
    getResult(): ReleasePokemonResponse.Result;
    setResult(value: any, noAssert?: boolean);
    candy_awarded: number;
    getCandyAwarded(): number;
    setCandyAwarded(value: any, noAssert?: boolean);
  }
  
  interface ReleasePokemonResponseData {
    result?: ReleasePokemonResponse.Result;
    candy_awarded?: number;
  }


  export class SetAvatarResponse extends ProtoBufMessage {
    constructor(data: SetAvatarResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): SetAvatarResponse;
    status: SetAvatarResponse.Status;
    getStatus(): SetAvatarResponse.Status;
    setStatus(value: any, noAssert?: boolean);
    player_data: Data.PlayerData;
    getPlayerData(): Data.PlayerData;
    setPlayerData(value: any, noAssert?: boolean);
  }
  
  interface SetAvatarResponseData {
    status?: SetAvatarResponse.Status;
    player_data?: Data.PlayerData;
  }


  export class SetContactSettingsResponse extends ProtoBufMessage {
    constructor(data: SetContactSettingsResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): SetContactSettingsResponse;
    status: SetContactSettingsResponse.Status;
    getStatus(): SetContactSettingsResponse.Status;
    setStatus(value: any, noAssert?: boolean);
    player_data: Data.PlayerData;
    getPlayerData(): Data.PlayerData;
    setPlayerData(value: any, noAssert?: boolean);
  }
  
  interface SetContactSettingsResponseData {
    status?: SetContactSettingsResponse.Status;
    player_data?: Data.PlayerData;
  }


  export class SetFavoritePokemonResponse extends ProtoBufMessage {
    constructor(data: SetFavoritePokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): SetFavoritePokemonResponse;
    result: SetFavoritePokemonResponse.Result;
    getResult(): SetFavoritePokemonResponse.Result;
    setResult(value: any, noAssert?: boolean);
  }
  
  interface SetFavoritePokemonResponseData {
    result?: SetFavoritePokemonResponse.Result;
  }


  export class SetPlayerTeamResponse extends ProtoBufMessage {
    constructor(data: SetPlayerTeamResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): SetPlayerTeamResponse;
    status: SetPlayerTeamResponse.Status;
    getStatus(): SetPlayerTeamResponse.Status;
    setStatus(value: any, noAssert?: boolean);
    player_data: Data.PlayerData;
    getPlayerData(): Data.PlayerData;
    setPlayerData(value: any, noAssert?: boolean);
  }
  
  interface SetPlayerTeamResponseData {
    status?: SetPlayerTeamResponse.Status;
    player_data?: Data.PlayerData;
  }


  export class SfidaActionLogResponse extends ProtoBufMessage {
    constructor(data: SfidaActionLogResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): SfidaActionLogResponse;
    result: SfidaActionLogResponse.Result;
    getResult(): SfidaActionLogResponse.Result;
    setResult(value: any, noAssert?: boolean);
    log_entries: Data.Logs.ActionLogEntry[];
    getLogEntries(): Data.Logs.ActionLogEntry[];
    setLogEntries(value: any, noAssert?: boolean);
  }
  
  interface SfidaActionLogResponseData {
    result?: SfidaActionLogResponse.Result;
    log_entries: Data.Logs.ActionLogEntry[];
  }


  export class StartGymBattleResponse extends ProtoBufMessage {
    constructor(data: StartGymBattleResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): StartGymBattleResponse;
    result: StartGymBattleResponse.Result;
    getResult(): StartGymBattleResponse.Result;
    setResult(value: any, noAssert?: boolean);
    battle_start_timestamp_ms: number;
    getBattleStartTimestampMs(): number;
    setBattleStartTimestampMs(value: any, noAssert?: boolean);
    battle_end_timestamp_ms: number;
    getBattleEndTimestampMs(): number;
    setBattleEndTimestampMs(value: any, noAssert?: boolean);
    battle_id: string;
    getBattleId(): string;
    setBattleId(value: any, noAssert?: boolean);
    defender: Data.Battle.BattleParticipant;
    getDefender(): Data.Battle.BattleParticipant;
    setDefender(value: any, noAssert?: boolean);
    battle_log: Data.Battle.BattleLog;
    getBattleLog(): Data.Battle.BattleLog;
    setBattleLog(value: any, noAssert?: boolean);
  }
  
  interface StartGymBattleResponseData {
    result?: StartGymBattleResponse.Result;
    battle_start_timestamp_ms?: number;
    battle_end_timestamp_ms?: number;
    battle_id?: string;
    defender?: Data.Battle.BattleParticipant;
    battle_log?: Data.Battle.BattleLog;
  }


  export class UpgradePokemonResponse extends ProtoBufMessage {
    constructor(data: UpgradePokemonResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): UpgradePokemonResponse;
    result: UpgradePokemonResponse.Result;
    getResult(): UpgradePokemonResponse.Result;
    setResult(value: any, noAssert?: boolean);
    upgraded_pokemon: Data.PokemonData;
    getUpgradedPokemon(): Data.PokemonData;
    setUpgradedPokemon(value: any, noAssert?: boolean);
  }
  
  interface UpgradePokemonResponseData {
    result?: UpgradePokemonResponse.Result;
    upgraded_pokemon?: Data.PokemonData;
  }


  export class UseIncenseResponse extends ProtoBufMessage {
    constructor(data: UseIncenseResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseIncenseResponse;
    result: UseIncenseResponse.Result;
    getResult(): UseIncenseResponse.Result;
    setResult(value: any, noAssert?: boolean);
    applied_incense: Inventory.AppliedItem;
    getAppliedIncense(): Inventory.AppliedItem;
    setAppliedIncense(value: any, noAssert?: boolean);
  }
  
  interface UseIncenseResponseData {
    result?: UseIncenseResponse.Result;
    applied_incense?: Inventory.AppliedItem;
  }


  export class UseItemCaptureResponse extends ProtoBufMessage {
    constructor(data: UseItemCaptureResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemCaptureResponse;
    success: boolean;
    getSuccess(): boolean;
    setSuccess(value: any, noAssert?: boolean);
    item_capture_mult: number;
    getItemCaptureMult(): number;
    setItemCaptureMult(value: any, noAssert?: boolean);
    item_flee_mult: number;
    getItemFleeMult(): number;
    setItemFleeMult(value: any, noAssert?: boolean);
    stop_movement: boolean;
    getStopMovement(): boolean;
    setStopMovement(value: any, noAssert?: boolean);
    stop_attack: boolean;
    getStopAttack(): boolean;
    setStopAttack(value: any, noAssert?: boolean);
    target_max: boolean;
    getTargetMax(): boolean;
    setTargetMax(value: any, noAssert?: boolean);
    target_slow: boolean;
    getTargetSlow(): boolean;
    setTargetSlow(value: any, noAssert?: boolean);
  }
  
  interface UseItemCaptureResponseData {
    success?: boolean;
    item_capture_mult?: number;
    item_flee_mult?: number;
    stop_movement?: boolean;
    stop_attack?: boolean;
    target_max?: boolean;
    target_slow?: boolean;
  }


  export class UseItemEggIncubatorResponse extends ProtoBufMessage {
    constructor(data: UseItemEggIncubatorResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemEggIncubatorResponse;
    result: UseItemEggIncubatorResponse.Result;
    getResult(): UseItemEggIncubatorResponse.Result;
    setResult(value: any, noAssert?: boolean);
    egg_incubator: Inventory.EggIncubator;
    getEggIncubator(): Inventory.EggIncubator;
    setEggIncubator(value: any, noAssert?: boolean);
  }
  
  interface UseItemEggIncubatorResponseData {
    result?: UseItemEggIncubatorResponse.Result;
    egg_incubator?: Inventory.EggIncubator;
  }


  export class UseItemGymResponse extends ProtoBufMessage {
    constructor(data: UseItemGymResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemGymResponse;
    result: UseItemGymResponse.Result;
    getResult(): UseItemGymResponse.Result;
    setResult(value: any, noAssert?: boolean);
    updated_gp: number;
    getUpdatedGp(): number;
    setUpdatedGp(value: any, noAssert?: boolean);
  }
  
  interface UseItemGymResponseData {
    result?: UseItemGymResponse.Result;
    updated_gp?: number;
  }


  export class UseItemPotionResponse extends ProtoBufMessage {
    constructor(data: UseItemPotionResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemPotionResponse;
    result: UseItemPotionResponse.Result;
    getResult(): UseItemPotionResponse.Result;
    setResult(value: any, noAssert?: boolean);
    stamina: number;
    getStamina(): number;
    setStamina(value: any, noAssert?: boolean);
  }
  
  interface UseItemPotionResponseData {
    result?: UseItemPotionResponse.Result;
    stamina?: number;
  }


  export class UseItemReviveResponse extends ProtoBufMessage {
    constructor(data: UseItemReviveResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemReviveResponse;
    result: UseItemReviveResponse.Result;
    getResult(): UseItemReviveResponse.Result;
    setResult(value: any, noAssert?: boolean);
    stamina: number;
    getStamina(): number;
    setStamina(value: any, noAssert?: boolean);
  }
  
  interface UseItemReviveResponseData {
    result?: UseItemReviveResponse.Result;
    stamina?: number;
  }


  export class UseItemXpBoostResponse extends ProtoBufMessage {
    constructor(data: UseItemXpBoostResponseData);
    static decode(buffer?: any, length?: number | string, enc?: string): UseItemXpBoostResponse;
    result: UseItemXpBoostResponse.Result;
    getResult(): UseItemXpBoostResponse.Result;
    setResult(value: any, noAssert?: boolean);
    applied_items: Inventory.AppliedItems;
    getAppliedItems(): Inventory.AppliedItems;
    setAppliedItems(value: any, noAssert?: boolean);
  }
  
  interface UseItemXpBoostResponseData {
    result?: UseItemXpBoostResponse.Result;
    applied_items?: Inventory.AppliedItems;
  }

}
    

export namespace Networking.Responses.DownloadItemTemplatesResponse {
  
  export class ItemTemplate extends ProtoBufMessage {
    constructor(data: ItemTemplateData);
    static decode(buffer?: any, length?: number | string, enc?: string): ItemTemplate;
    template_id: string;
    getTemplateId(): string;
    setTemplateId(value: any, noAssert?: boolean);
    pokemon_settings: Settings.Master.PokemonSettings;
    getPokemonSettings(): Settings.Master.PokemonSettings;
    setPokemonSettings(value: any, noAssert?: boolean);
    item_settings: Settings.Master.ItemSettings;
    getItemSettings(): Settings.Master.ItemSettings;
    setItemSettings(value: any, noAssert?: boolean);
    move_settings: Settings.Master.MoveSettings;
    getMoveSettings(): Settings.Master.MoveSettings;
    setMoveSettings(value: any, noAssert?: boolean);
    move_sequence_settings: Settings.Master.MoveSequenceSettings;
    getMoveSequenceSettings(): Settings.Master.MoveSequenceSettings;
    setMoveSequenceSettings(value: any, noAssert?: boolean);
    type_effective: Settings.Master.TypeEffectiveSettings;
    getTypeEffective(): Settings.Master.TypeEffectiveSettings;
    setTypeEffective(value: any, noAssert?: boolean);
    badge_settings: Settings.Master.BadgeSettings;
    getBadgeSettings(): Settings.Master.BadgeSettings;
    setBadgeSettings(value: any, noAssert?: boolean);
    camera: Settings.Master.CameraSettings;
    getCamera(): Settings.Master.CameraSettings;
    setCamera(value: any, noAssert?: boolean);
    player_level: Settings.Master.PlayerLevelSettings;
    getPlayerLevel(): Settings.Master.PlayerLevelSettings;
    setPlayerLevel(value: any, noAssert?: boolean);
    gym_level: Settings.Master.GymLevelSettings;
    getGymLevel(): Settings.Master.GymLevelSettings;
    setGymLevel(value: any, noAssert?: boolean);
    battle_settings: Settings.Master.GymBattleSettings;
    getBattleSettings(): Settings.Master.GymBattleSettings;
    setBattleSettings(value: any, noAssert?: boolean);
    encounter_settings: Settings.Master.EncounterSettings;
    getEncounterSettings(): Settings.Master.EncounterSettings;
    setEncounterSettings(value: any, noAssert?: boolean);
    iap_item_display: Settings.Master.IapItemDisplay;
    getIapItemDisplay(): Settings.Master.IapItemDisplay;
    setIapItemDisplay(value: any, noAssert?: boolean);
    iap_settings: Settings.Master.IapSettings;
    getIapSettings(): Settings.Master.IapSettings;
    setIapSettings(value: any, noAssert?: boolean);
    pokemon_upgrades: Settings.Master.PokemonUpgradeSettings;
    getPokemonUpgrades(): Settings.Master.PokemonUpgradeSettings;
    setPokemonUpgrades(value: any, noAssert?: boolean);
    equipped_badges: Settings.Master.EquippedBadgeSettings;
    getEquippedBadges(): Settings.Master.EquippedBadgeSettings;
    setEquippedBadges(value: any, noAssert?: boolean);
  }
  
  interface ItemTemplateData {
    template_id?: string;
    pokemon_settings?: Settings.Master.PokemonSettings;
    item_settings?: Settings.Master.ItemSettings;
    move_settings?: Settings.Master.MoveSettings;
    move_sequence_settings?: Settings.Master.MoveSequenceSettings;
    type_effective?: Settings.Master.TypeEffectiveSettings;
    badge_settings?: Settings.Master.BadgeSettings;
    camera?: Settings.Master.CameraSettings;
    player_level?: Settings.Master.PlayerLevelSettings;
    gym_level?: Settings.Master.GymLevelSettings;
    battle_settings?: Settings.Master.GymBattleSettings;
    encounter_settings?: Settings.Master.EncounterSettings;
    iap_item_display?: Settings.Master.IapItemDisplay;
    iap_settings?: Settings.Master.IapSettings;
    pokemon_upgrades?: Settings.Master.PokemonUpgradeSettings;
    equipped_badges?: Settings.Master.EquippedBadgeSettings;
  }

}
    

export namespace Settings {
  
  export class DownloadSettingsAction extends ProtoBufMessage {
    constructor(data: DownloadSettingsActionData);
    static decode(buffer?: any, length?: number | string, enc?: string): DownloadSettingsAction;
    hash: string;
    getHash(): string;
    setHash(value: any, noAssert?: boolean);
  }
  
  interface DownloadSettingsActionData {
    hash?: string;
  }


  export class FortSettings extends ProtoBufMessage {
    constructor(data: FortSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortSettings;
    interaction_range_meters: number;
    getInteractionRangeMeters(): number;
    setInteractionRangeMeters(value: any, noAssert?: boolean);
    max_total_deployed_pokemon: number;
    getMaxTotalDeployedPokemon(): number;
    setMaxTotalDeployedPokemon(value: any, noAssert?: boolean);
    max_player_deployed_pokemon: number;
    getMaxPlayerDeployedPokemon(): number;
    setMaxPlayerDeployedPokemon(value: any, noAssert?: boolean);
    deploy_stamina_multiplier: number;
    getDeployStaminaMultiplier(): number;
    setDeployStaminaMultiplier(value: any, noAssert?: boolean);
    deploy_attack_multiplier: number;
    getDeployAttackMultiplier(): number;
    setDeployAttackMultiplier(value: any, noAssert?: boolean);
    far_interaction_range_meters: number;
    getFarInteractionRangeMeters(): number;
    setFarInteractionRangeMeters(value: any, noAssert?: boolean);
  }
  
  interface FortSettingsData {
    interaction_range_meters?: number;
    max_total_deployed_pokemon?: number;
    max_player_deployed_pokemon?: number;
    deploy_stamina_multiplier?: number;
    deploy_attack_multiplier?: number;
    far_interaction_range_meters?: number;
  }


  export class GlobalSettings extends ProtoBufMessage {
    constructor(data: GlobalSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): GlobalSettings;
    fort_settings: Settings.FortSettings;
    getFortSettings(): Settings.FortSettings;
    setFortSettings(value: any, noAssert?: boolean);
    map_settings: Settings.MapSettings;
    getMapSettings(): Settings.MapSettings;
    setMapSettings(value: any, noAssert?: boolean);
    level_settings: Settings.LevelSettings;
    getLevelSettings(): Settings.LevelSettings;
    setLevelSettings(value: any, noAssert?: boolean);
    inventory_settings: Settings.InventorySettings;
    getInventorySettings(): Settings.InventorySettings;
    setInventorySettings(value: any, noAssert?: boolean);
    minimum_client_version: string;
    getMinimumClientVersion(): string;
    setMinimumClientVersion(value: any, noAssert?: boolean);
  }
  
  interface GlobalSettingsData {
    fort_settings?: Settings.FortSettings;
    map_settings?: Settings.MapSettings;
    level_settings?: Settings.LevelSettings;
    inventory_settings?: Settings.InventorySettings;
    minimum_client_version?: string;
  }


  export class InventorySettings extends ProtoBufMessage {
    constructor(data: InventorySettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): InventorySettings;
    max_pokemon: number;
    getMaxPokemon(): number;
    setMaxPokemon(value: any, noAssert?: boolean);
    max_bag_items: number;
    getMaxBagItems(): number;
    setMaxBagItems(value: any, noAssert?: boolean);
    base_pokemon: number;
    getBasePokemon(): number;
    setBasePokemon(value: any, noAssert?: boolean);
    base_bag_items: number;
    getBaseBagItems(): number;
    setBaseBagItems(value: any, noAssert?: boolean);
    base_eggs: number;
    getBaseEggs(): number;
    setBaseEggs(value: any, noAssert?: boolean);
  }
  
  interface InventorySettingsData {
    max_pokemon?: number;
    max_bag_items?: number;
    base_pokemon?: number;
    base_bag_items?: number;
    base_eggs?: number;
  }


  export class LevelSettings extends ProtoBufMessage {
    constructor(data: LevelSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): LevelSettings;
    trainer_cp_modifier: number;
    getTrainerCpModifier(): number;
    setTrainerCpModifier(value: any, noAssert?: boolean);
    trainer_difficulty_modifier: number;
    getTrainerDifficultyModifier(): number;
    setTrainerDifficultyModifier(value: any, noAssert?: boolean);
  }
  
  interface LevelSettingsData {
    trainer_cp_modifier?: number;
    trainer_difficulty_modifier?: number;
  }


  export class MapSettings extends ProtoBufMessage {
    constructor(data: MapSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): MapSettings;
    pokemon_visible_range: number;
    getPokemonVisibleRange(): number;
    setPokemonVisibleRange(value: any, noAssert?: boolean);
    poke_nav_range_meters: number;
    getPokeNavRangeMeters(): number;
    setPokeNavRangeMeters(value: any, noAssert?: boolean);
    encounter_range_meters: number;
    getEncounterRangeMeters(): number;
    setEncounterRangeMeters(value: any, noAssert?: boolean);
    get_map_objects_min_refresh_seconds: number;
    getGetMapObjectsMinRefreshSeconds(): number;
    setGetMapObjectsMinRefreshSeconds(value: any, noAssert?: boolean);
    get_map_objects_max_refresh_seconds: number;
    getGetMapObjectsMaxRefreshSeconds(): number;
    setGetMapObjectsMaxRefreshSeconds(value: any, noAssert?: boolean);
    get_map_objects_min_distance_meters: number;
    getGetMapObjectsMinDistanceMeters(): number;
    setGetMapObjectsMinDistanceMeters(value: any, noAssert?: boolean);
    google_maps_api_key: string;
    getGoogleMapsApiKey(): string;
    setGoogleMapsApiKey(value: any, noAssert?: boolean);
  }
  
  interface MapSettingsData {
    pokemon_visible_range?: number;
    poke_nav_range_meters?: number;
    encounter_range_meters?: number;
    get_map_objects_min_refresh_seconds?: number;
    get_map_objects_max_refresh_seconds?: number;
    get_map_objects_min_distance_meters?: number;
    google_maps_api_key?: string;
  }

}
    

export namespace Settings.Master {
  
  export class BadgeSettings extends ProtoBufMessage {
    constructor(data: BadgeSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): BadgeSettings;
    badge_type: Enums.BadgeType;
    getBadgeType(): Enums.BadgeType;
    setBadgeType(value: any, noAssert?: boolean);
    badge_rank: number;
    getBadgeRank(): number;
    setBadgeRank(value: any, noAssert?: boolean);
    targets: number[];
    getTargets(): number[];
    setTargets(value: any, noAssert?: boolean);
  }
  
  interface BadgeSettingsData {
    badge_type?: Enums.BadgeType;
    badge_rank?: number;
    targets: number[];
  }


  export class CameraSettings extends ProtoBufMessage {
    constructor(data: CameraSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): CameraSettings;
    next_camera: string;
    getNextCamera(): string;
    setNextCamera(value: any, noAssert?: boolean);
    interpolation: Enums.CameraInterpolation[];
    getInterpolation(): Enums.CameraInterpolation[];
    setInterpolation(value: any, noAssert?: boolean);
    target_type: Enums.CameraTarget[];
    getTargetType(): Enums.CameraTarget[];
    setTargetType(value: any, noAssert?: boolean);
    ease_in_speed: number[];
    getEaseInSpeed(): number[];
    setEaseInSpeed(value: any, noAssert?: boolean);
    east_out_speed: number[];
    getEastOutSpeed(): number[];
    setEastOutSpeed(value: any, noAssert?: boolean);
    duration_seconds: number[];
    getDurationSeconds(): number[];
    setDurationSeconds(value: any, noAssert?: boolean);
    wait_seconds: number[];
    getWaitSeconds(): number[];
    setWaitSeconds(value: any, noAssert?: boolean);
    transition_seconds: number[];
    getTransitionSeconds(): number[];
    setTransitionSeconds(value: any, noAssert?: boolean);
    angle_degree: number[];
    getAngleDegree(): number[];
    setAngleDegree(value: any, noAssert?: boolean);
    angle_offset_degree: number[];
    getAngleOffsetDegree(): number[];
    setAngleOffsetDegree(value: any, noAssert?: boolean);
    pitch_degree: number[];
    getPitchDegree(): number[];
    setPitchDegree(value: any, noAssert?: boolean);
    pitch_offset_degree: number[];
    getPitchOffsetDegree(): number[];
    setPitchOffsetDegree(value: any, noAssert?: boolean);
    roll_degree: number[];
    getRollDegree(): number[];
    setRollDegree(value: any, noAssert?: boolean);
    distance_meters: number[];
    getDistanceMeters(): number[];
    setDistanceMeters(value: any, noAssert?: boolean);
    height_percent: number[];
    getHeightPercent(): number[];
    setHeightPercent(value: any, noAssert?: boolean);
    vert_ctr_ratio: number[];
    getVertCtrRatio(): number[];
    setVertCtrRatio(value: any, noAssert?: boolean);
  }
  
  interface CameraSettingsData {
    next_camera?: string;
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


  export class EncounterSettings extends ProtoBufMessage {
    constructor(data: EncounterSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): EncounterSettings;
    spin_bonus_threshold: number;
    getSpinBonusThreshold(): number;
    setSpinBonusThreshold(value: any, noAssert?: boolean);
    excellent_throw_threshold: number;
    getExcellentThrowThreshold(): number;
    setExcellentThrowThreshold(value: any, noAssert?: boolean);
    great_throw_threshold: number;
    getGreatThrowThreshold(): number;
    setGreatThrowThreshold(value: any, noAssert?: boolean);
    nice_throw_threshold: number;
    getNiceThrowThreshold(): number;
    setNiceThrowThreshold(value: any, noAssert?: boolean);
    milestone_threshold: number;
    getMilestoneThreshold(): number;
    setMilestoneThreshold(value: any, noAssert?: boolean);
  }
  
  interface EncounterSettingsData {
    spin_bonus_threshold?: number;
    excellent_throw_threshold?: number;
    great_throw_threshold?: number;
    nice_throw_threshold?: number;
    milestone_threshold?: number;
  }


  export class EquippedBadgeSettings extends ProtoBufMessage {
    constructor(data: EquippedBadgeSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): EquippedBadgeSettings;
    equip_badge_cooldown_ms: number;
    getEquipBadgeCooldownMs(): number;
    setEquipBadgeCooldownMs(value: any, noAssert?: boolean);
    catch_probability_bonus: number[];
    getCatchProbabilityBonus(): number[];
    setCatchProbabilityBonus(value: any, noAssert?: boolean);
    flee_probability_bonus: number[];
    getFleeProbabilityBonus(): number[];
    setFleeProbabilityBonus(value: any, noAssert?: boolean);
  }
  
  interface EquippedBadgeSettingsData {
    equip_badge_cooldown_ms?: number;
    catch_probability_bonus: number[];
    flee_probability_bonus: number[];
  }


  export class GymBattleSettings extends ProtoBufMessage {
    constructor(data: GymBattleSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): GymBattleSettings;
    energy_per_sec: number;
    getEnergyPerSec(): number;
    setEnergyPerSec(value: any, noAssert?: boolean);
    dodge_energy_cost: number;
    getDodgeEnergyCost(): number;
    setDodgeEnergyCost(value: any, noAssert?: boolean);
    retarget_seconds: number;
    getRetargetSeconds(): number;
    setRetargetSeconds(value: any, noAssert?: boolean);
    enemy_attack_interval: number;
    getEnemyAttackInterval(): number;
    setEnemyAttackInterval(value: any, noAssert?: boolean);
    attack_server_interval: number;
    getAttackServerInterval(): number;
    setAttackServerInterval(value: any, noAssert?: boolean);
    round_duration_seconds: number;
    getRoundDurationSeconds(): number;
    setRoundDurationSeconds(value: any, noAssert?: boolean);
    bonus_time_per_ally_seconds: number;
    getBonusTimePerAllySeconds(): number;
    setBonusTimePerAllySeconds(value: any, noAssert?: boolean);
    maximum_attackers_per_battle: number;
    getMaximumAttackersPerBattle(): number;
    setMaximumAttackersPerBattle(value: any, noAssert?: boolean);
    same_type_attack_bonus_multiplier: number;
    getSameTypeAttackBonusMultiplier(): number;
    setSameTypeAttackBonusMultiplier(value: any, noAssert?: boolean);
    maximum_energy: number;
    getMaximumEnergy(): number;
    setMaximumEnergy(value: any, noAssert?: boolean);
    energy_delta_per_health_lost: number;
    getEnergyDeltaPerHealthLost(): number;
    setEnergyDeltaPerHealthLost(value: any, noAssert?: boolean);
    dodge_duration_ms: number;
    getDodgeDurationMs(): number;
    setDodgeDurationMs(value: any, noAssert?: boolean);
    minimum_player_level: number;
    getMinimumPlayerLevel(): number;
    setMinimumPlayerLevel(value: any, noAssert?: boolean);
    swap_duration_ms: number;
    getSwapDurationMs(): number;
    setSwapDurationMs(value: any, noAssert?: boolean);
  }
  
  interface GymBattleSettingsData {
    energy_per_sec?: number;
    dodge_energy_cost?: number;
    retarget_seconds?: number;
    enemy_attack_interval?: number;
    attack_server_interval?: number;
    round_duration_seconds?: number;
    bonus_time_per_ally_seconds?: number;
    maximum_attackers_per_battle?: number;
    same_type_attack_bonus_multiplier?: number;
    maximum_energy?: number;
    energy_delta_per_health_lost?: number;
    dodge_duration_ms?: number;
    minimum_player_level?: number;
    swap_duration_ms?: number;
  }


  export class GymLevelSettings extends ProtoBufMessage {
    constructor(data: GymLevelSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): GymLevelSettings;
    required_experience: number[];
    getRequiredExperience(): number[];
    setRequiredExperience(value: any, noAssert?: boolean);
    leader_slots: number[];
    getLeaderSlots(): number[];
    setLeaderSlots(value: any, noAssert?: boolean);
    trainer_slots: number[];
    getTrainerSlots(): number[];
    setTrainerSlots(value: any, noAssert?: boolean);
    search_roll_bonus: number[];
    getSearchRollBonus(): number[];
    setSearchRollBonus(value: any, noAssert?: boolean);
  }
  
  interface GymLevelSettingsData {
    required_experience: number[];
    leader_slots: number[];
    trainer_slots: number[];
    search_roll_bonus: number[];
  }


  export class IapItemDisplay extends ProtoBufMessage {
    constructor(data: IapItemDisplayData);
    static decode(buffer?: any, length?: number | string, enc?: string): IapItemDisplay;
    sku: string;
    getSku(): string;
    setSku(value: any, noAssert?: boolean);
    category: Enums.HoloIapItemCategory;
    getCategory(): Enums.HoloIapItemCategory;
    setCategory(value: any, noAssert?: boolean);
    sort_order: number;
    getSortOrder(): number;
    setSortOrder(value: any, noAssert?: boolean);
    item_ids: Inventory.Item.ItemId[];
    getItemIds(): Inventory.Item.ItemId[];
    setItemIds(value: any, noAssert?: boolean);
    counts: number[];
    getCounts(): number[];
    setCounts(value: any, noAssert?: boolean);
  }
  
  interface IapItemDisplayData {
    sku?: string;
    category?: Enums.HoloIapItemCategory;
    sort_order?: number;
    item_ids: Inventory.Item.ItemId[];
    counts: number[];
  }


  export class IapSettings extends ProtoBufMessage {
    constructor(data: IapSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): IapSettings;
    daily_bonus_coins: number;
    getDailyBonusCoins(): number;
    setDailyBonusCoins(value: any, noAssert?: boolean);
    daily_defender_bonus_per_pokemon: number[];
    getDailyDefenderBonusPerPokemon(): number[];
    setDailyDefenderBonusPerPokemon(value: any, noAssert?: boolean);
    daily_defender_bonus_max_defenders: number;
    getDailyDefenderBonusMaxDefenders(): number;
    setDailyDefenderBonusMaxDefenders(value: any, noAssert?: boolean);
    daily_defender_bonus_currency: string[];
    getDailyDefenderBonusCurrency(): string[];
    setDailyDefenderBonusCurrency(value: any, noAssert?: boolean);
    min_time_between_claims_ms: number;
    getMinTimeBetweenClaimsMs(): number;
    setMinTimeBetweenClaimsMs(value: any, noAssert?: boolean);
    daily_bonus_enabled: boolean;
    getDailyBonusEnabled(): boolean;
    setDailyBonusEnabled(value: any, noAssert?: boolean);
    daily_defender_bonus_enabled: boolean;
    getDailyDefenderBonusEnabled(): boolean;
    setDailyDefenderBonusEnabled(value: any, noAssert?: boolean);
  }
  
  interface IapSettingsData {
    daily_bonus_coins?: number;
    daily_defender_bonus_per_pokemon: number[];
    daily_defender_bonus_max_defenders?: number;
    daily_defender_bonus_currency: string[];
    min_time_between_claims_ms?: number;
    daily_bonus_enabled?: boolean;
    daily_defender_bonus_enabled?: boolean;
  }


  export class ItemSettings extends ProtoBufMessage {
    constructor(data: ItemSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): ItemSettings;
    item_id: Inventory.Item.ItemId;
    getItemId(): Inventory.Item.ItemId;
    setItemId(value: any, noAssert?: boolean);
    item_type: Inventory.Item.ItemType;
    getItemType(): Inventory.Item.ItemType;
    setItemType(value: any, noAssert?: boolean);
    category: Enums.ItemCategory;
    getCategory(): Enums.ItemCategory;
    setCategory(value: any, noAssert?: boolean);
    drop_freq: number;
    getDropFreq(): number;
    setDropFreq(value: any, noAssert?: boolean);
    drop_trainer_level: number;
    getDropTrainerLevel(): number;
    setDropTrainerLevel(value: any, noAssert?: boolean);
    pokeball: Item.PokeballAttributes;
    getPokeball(): Item.PokeballAttributes;
    setPokeball(value: any, noAssert?: boolean);
    potion: Item.PotionAttributes;
    getPotion(): Item.PotionAttributes;
    setPotion(value: any, noAssert?: boolean);
    revive: Item.ReviveAttributes;
    getRevive(): Item.ReviveAttributes;
    setRevive(value: any, noAssert?: boolean);
    battle: Item.BattleAttributes;
    getBattle(): Item.BattleAttributes;
    setBattle(value: any, noAssert?: boolean);
    food: Item.FoodAttributes;
    getFood(): Item.FoodAttributes;
    setFood(value: any, noAssert?: boolean);
    inventory_upgrade: Item.InventoryUpgradeAttributes;
    getInventoryUpgrade(): Item.InventoryUpgradeAttributes;
    setInventoryUpgrade(value: any, noAssert?: boolean);
    xp_boost: Item.ExperienceBoostAttributes;
    getXpBoost(): Item.ExperienceBoostAttributes;
    setXpBoost(value: any, noAssert?: boolean);
    incense: Item.IncenseAttributes;
    getIncense(): Item.IncenseAttributes;
    setIncense(value: any, noAssert?: boolean);
    egg_incubator: Item.EggIncubatorAttributes;
    getEggIncubator(): Item.EggIncubatorAttributes;
    setEggIncubator(value: any, noAssert?: boolean);
    fort_modifier: Item.FortModifierAttributes;
    getFortModifier(): Item.FortModifierAttributes;
    setFortModifier(value: any, noAssert?: boolean);
  }
  
  interface ItemSettingsData {
    item_id?: Inventory.Item.ItemId;
    item_type?: Inventory.Item.ItemType;
    category?: Enums.ItemCategory;
    drop_freq?: number;
    drop_trainer_level?: number;
    pokeball?: Item.PokeballAttributes;
    potion?: Item.PotionAttributes;
    revive?: Item.ReviveAttributes;
    battle?: Item.BattleAttributes;
    food?: Item.FoodAttributes;
    inventory_upgrade?: Item.InventoryUpgradeAttributes;
    xp_boost?: Item.ExperienceBoostAttributes;
    incense?: Item.IncenseAttributes;
    egg_incubator?: Item.EggIncubatorAttributes;
    fort_modifier?: Item.FortModifierAttributes;
  }


  export class MoveSequenceSettings extends ProtoBufMessage {
    constructor(data: MoveSequenceSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): MoveSequenceSettings;
    sequence: string[];
    getSequence(): string[];
    setSequence(value: any, noAssert?: boolean);
  }
  
  interface MoveSequenceSettingsData {
    sequence: string[];
  }


  export class MoveSettings extends ProtoBufMessage {
    constructor(data: MoveSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): MoveSettings;
    movement_id: Enums.PokemonMove;
    getMovementId(): Enums.PokemonMove;
    setMovementId(value: any, noAssert?: boolean);
    animation_id: number;
    getAnimationId(): number;
    setAnimationId(value: any, noAssert?: boolean);
    pokemon_type: Enums.PokemonType;
    getPokemonType(): Enums.PokemonType;
    setPokemonType(value: any, noAssert?: boolean);
    power: number;
    getPower(): number;
    setPower(value: any, noAssert?: boolean);
    accuracy_chance: number;
    getAccuracyChance(): number;
    setAccuracyChance(value: any, noAssert?: boolean);
    critical_chance: number;
    getCriticalChance(): number;
    setCriticalChance(value: any, noAssert?: boolean);
    heal_scalar: number;
    getHealScalar(): number;
    setHealScalar(value: any, noAssert?: boolean);
    stamina_loss_scalar: number;
    getStaminaLossScalar(): number;
    setStaminaLossScalar(value: any, noAssert?: boolean);
    trainer_level_min: number;
    getTrainerLevelMin(): number;
    setTrainerLevelMin(value: any, noAssert?: boolean);
    trainer_level_max: number;
    getTrainerLevelMax(): number;
    setTrainerLevelMax(value: any, noAssert?: boolean);
    vfx_name: string;
    getVfxName(): string;
    setVfxName(value: any, noAssert?: boolean);
    duration_ms: number;
    getDurationMs(): number;
    setDurationMs(value: any, noAssert?: boolean);
    damage_window_start_ms: number;
    getDamageWindowStartMs(): number;
    setDamageWindowStartMs(value: any, noAssert?: boolean);
    damage_window_end_ms: number;
    getDamageWindowEndMs(): number;
    setDamageWindowEndMs(value: any, noAssert?: boolean);
    energy_delta: number;
    getEnergyDelta(): number;
    setEnergyDelta(value: any, noAssert?: boolean);
  }
  
  interface MoveSettingsData {
    movement_id?: Enums.PokemonMove;
    animation_id?: number;
    pokemon_type?: Enums.PokemonType;
    power?: number;
    accuracy_chance?: number;
    critical_chance?: number;
    heal_scalar?: number;
    stamina_loss_scalar?: number;
    trainer_level_min?: number;
    trainer_level_max?: number;
    vfx_name?: string;
    duration_ms?: number;
    damage_window_start_ms?: number;
    damage_window_end_ms?: number;
    energy_delta?: number;
  }


  export class PlayerLevelSettings extends ProtoBufMessage {
    constructor(data: PlayerLevelSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): PlayerLevelSettings;
    rank_num: number[];
    getRankNum(): number[];
    setRankNum(value: any, noAssert?: boolean);
    required_experience: number[];
    getRequiredExperience(): number[];
    setRequiredExperience(value: any, noAssert?: boolean);
    cp_multiplier: number[];
    getCpMultiplier(): number[];
    setCpMultiplier(value: any, noAssert?: boolean);
    max_egg_player_level: number;
    getMaxEggPlayerLevel(): number;
    setMaxEggPlayerLevel(value: any, noAssert?: boolean);
    max_encounter_player_level: number;
    getMaxEncounterPlayerLevel(): number;
    setMaxEncounterPlayerLevel(value: any, noAssert?: boolean);
  }
  
  interface PlayerLevelSettingsData {
    rank_num: number[];
    required_experience: number[];
    cp_multiplier: number[];
    max_egg_player_level?: number;
    max_encounter_player_level?: number;
  }


  export class PokemonSettings extends ProtoBufMessage {
    constructor(data: PokemonSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): PokemonSettings;
    pokemon_id: Enums.PokemonId;
    getPokemonId(): Enums.PokemonId;
    setPokemonId(value: any, noAssert?: boolean);
    model_scale: number;
    getModelScale(): number;
    setModelScale(value: any, noAssert?: boolean);
    type: Enums.PokemonType;
    getType(): Enums.PokemonType;
    setType(value: any, noAssert?: boolean);
    type_2: Enums.PokemonType;
    getType_2(): Enums.PokemonType;
    setType_2(value: any, noAssert?: boolean);
    camera: Pokemon.CameraAttributes;
    getCamera(): Pokemon.CameraAttributes;
    setCamera(value: any, noAssert?: boolean);
    encounter: Pokemon.EncounterAttributes;
    getEncounter(): Pokemon.EncounterAttributes;
    setEncounter(value: any, noAssert?: boolean);
    stats: Pokemon.StatsAttributes;
    getStats(): Pokemon.StatsAttributes;
    setStats(value: any, noAssert?: boolean);
    quick_moves: Enums.PokemonMove[];
    getQuickMoves(): Enums.PokemonMove[];
    setQuickMoves(value: any, noAssert?: boolean);
    cinematic_moves: Enums.PokemonMove[];
    getCinematicMoves(): Enums.PokemonMove[];
    setCinematicMoves(value: any, noAssert?: boolean);
    animation_time: number[];
    getAnimationTime(): number[];
    setAnimationTime(value: any, noAssert?: boolean);
    evolution_ids: Enums.PokemonId[];
    getEvolutionIds(): Enums.PokemonId[];
    setEvolutionIds(value: any, noAssert?: boolean);
    evolution_pips: number;
    getEvolutionPips(): number;
    setEvolutionPips(value: any, noAssert?: boolean);
    rarity: Enums.PokemonRarity;
    getRarity(): Enums.PokemonRarity;
    setRarity(value: any, noAssert?: boolean);
    pokedex_height_m: number;
    getPokedexHeightM(): number;
    setPokedexHeightM(value: any, noAssert?: boolean);
    pokedex_weight_kg: number;
    getPokedexWeightKg(): number;
    setPokedexWeightKg(value: any, noAssert?: boolean);
    parent_pokemon_id: Enums.PokemonId;
    getParentPokemonId(): Enums.PokemonId;
    setParentPokemonId(value: any, noAssert?: boolean);
    height_std_dev: number;
    getHeightStdDev(): number;
    setHeightStdDev(value: any, noAssert?: boolean);
    weight_std_dev: number;
    getWeightStdDev(): number;
    setWeightStdDev(value: any, noAssert?: boolean);
    km_distance_to_hatch: number;
    getKmDistanceToHatch(): number;
    setKmDistanceToHatch(value: any, noAssert?: boolean);
    family_id: Enums.PokemonFamilyId;
    getFamilyId(): Enums.PokemonFamilyId;
    setFamilyId(value: any, noAssert?: boolean);
    candy_to_evolve: number;
    getCandyToEvolve(): number;
    setCandyToEvolve(value: any, noAssert?: boolean);
  }
  
  interface PokemonSettingsData {
    pokemon_id?: Enums.PokemonId;
    model_scale?: number;
    type?: Enums.PokemonType;
    type_2?: Enums.PokemonType;
    camera?: Pokemon.CameraAttributes;
    encounter?: Pokemon.EncounterAttributes;
    stats?: Pokemon.StatsAttributes;
    quick_moves: Enums.PokemonMove[];
    cinematic_moves: Enums.PokemonMove[];
    animation_time: number[];
    evolution_ids: Enums.PokemonId[];
    evolution_pips?: number;
    rarity?: Enums.PokemonRarity;
    pokedex_height_m?: number;
    pokedex_weight_kg?: number;
    parent_pokemon_id?: Enums.PokemonId;
    height_std_dev?: number;
    weight_std_dev?: number;
    km_distance_to_hatch?: number;
    family_id?: Enums.PokemonFamilyId;
    candy_to_evolve?: number;
  }


  export class PokemonUpgradeSettings extends ProtoBufMessage {
    constructor(data: PokemonUpgradeSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): PokemonUpgradeSettings;
    upgrades_per_level: number;
    getUpgradesPerLevel(): number;
    setUpgradesPerLevel(value: any, noAssert?: boolean);
    allowed_levels_above_player: number;
    getAllowedLevelsAbovePlayer(): number;
    setAllowedLevelsAbovePlayer(value: any, noAssert?: boolean);
    candy_cost: number[];
    getCandyCost(): number[];
    setCandyCost(value: any, noAssert?: boolean);
    stardust_cost: number[];
    getStardustCost(): number[];
    setStardustCost(value: any, noAssert?: boolean);
  }
  
  interface PokemonUpgradeSettingsData {
    upgrades_per_level?: number;
    allowed_levels_above_player?: number;
    candy_cost: number[];
    stardust_cost: number[];
  }


  export class TypeEffectiveSettings extends ProtoBufMessage {
    constructor(data: TypeEffectiveSettingsData);
    static decode(buffer?: any, length?: number | string, enc?: string): TypeEffectiveSettings;
    attack_scalar: number[];
    getAttackScalar(): number[];
    setAttackScalar(value: any, noAssert?: boolean);
    attack_type: Enums.PokemonType;
    getAttackType(): Enums.PokemonType;
    setAttackType(value: any, noAssert?: boolean);
  }
  
  interface TypeEffectiveSettingsData {
    attack_scalar: number[];
    attack_type?: Enums.PokemonType;
  }

}
    

export namespace Settings.Master.Item {
  
  export class BattleAttributes extends ProtoBufMessage {
    constructor(data: BattleAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): BattleAttributes;
    sta_percent: number;
    getStaPercent(): number;
    setStaPercent(value: any, noAssert?: boolean);
  }
  
  interface BattleAttributesData {
    sta_percent?: number;
  }


  export class EggIncubatorAttributes extends ProtoBufMessage {
    constructor(data: EggIncubatorAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): EggIncubatorAttributes;
    incubator_type: Inventory.EggIncubatorType;
    getIncubatorType(): Inventory.EggIncubatorType;
    setIncubatorType(value: any, noAssert?: boolean);
    uses: number;
    getUses(): number;
    setUses(value: any, noAssert?: boolean);
    distance_multiplier: number;
    getDistanceMultiplier(): number;
    setDistanceMultiplier(value: any, noAssert?: boolean);
  }
  
  interface EggIncubatorAttributesData {
    incubator_type?: Inventory.EggIncubatorType;
    uses?: number;
    distance_multiplier?: number;
  }


  export class ExperienceBoostAttributes extends ProtoBufMessage {
    constructor(data: ExperienceBoostAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): ExperienceBoostAttributes;
    xp_multiplier: number;
    getXpMultiplier(): number;
    setXpMultiplier(value: any, noAssert?: boolean);
    boost_duration_ms: number;
    getBoostDurationMs(): number;
    setBoostDurationMs(value: any, noAssert?: boolean);
  }
  
  interface ExperienceBoostAttributesData {
    xp_multiplier?: number;
    boost_duration_ms?: number;
  }


  export class FoodAttributes extends ProtoBufMessage {
    constructor(data: FoodAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): FoodAttributes;
    item_effect: Enums.ItemEffect[];
    getItemEffect(): Enums.ItemEffect[];
    setItemEffect(value: any, noAssert?: boolean);
    item_effect_percent: number[];
    getItemEffectPercent(): number[];
    setItemEffectPercent(value: any, noAssert?: boolean);
    growth_percent: number;
    getGrowthPercent(): number;
    setGrowthPercent(value: any, noAssert?: boolean);
  }
  
  interface FoodAttributesData {
    item_effect: Enums.ItemEffect[];
    item_effect_percent: number[];
    growth_percent?: number;
  }


  export class FortModifierAttributes extends ProtoBufMessage {
    constructor(data: FortModifierAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): FortModifierAttributes;
    modifier_lifetime_seconds: number;
    getModifierLifetimeSeconds(): number;
    setModifierLifetimeSeconds(value: any, noAssert?: boolean);
    troy_disk_num_pokemon_spawned: number;
    getTroyDiskNumPokemonSpawned(): number;
    setTroyDiskNumPokemonSpawned(value: any, noAssert?: boolean);
  }
  
  interface FortModifierAttributesData {
    modifier_lifetime_seconds?: number;
    troy_disk_num_pokemon_spawned?: number;
  }


  export class IncenseAttributes extends ProtoBufMessage {
    constructor(data: IncenseAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): IncenseAttributes;
    incense_lifetime_seconds: number;
    getIncenseLifetimeSeconds(): number;
    setIncenseLifetimeSeconds(value: any, noAssert?: boolean);
    pokemon_type: Enums.PokemonType[];
    getPokemonType(): Enums.PokemonType[];
    setPokemonType(value: any, noAssert?: boolean);
    pokemon_incense_type_probability: number;
    getPokemonIncenseTypeProbability(): number;
    setPokemonIncenseTypeProbability(value: any, noAssert?: boolean);
    standing_time_between_encounters_seconds: number;
    getStandingTimeBetweenEncountersSeconds(): number;
    setStandingTimeBetweenEncountersSeconds(value: any, noAssert?: boolean);
    moving_time_between_encounter_seconds: number;
    getMovingTimeBetweenEncounterSeconds(): number;
    setMovingTimeBetweenEncounterSeconds(value: any, noAssert?: boolean);
    distance_required_for_shorter_interval_meters: number;
    getDistanceRequiredForShorterIntervalMeters(): number;
    setDistanceRequiredForShorterIntervalMeters(value: any, noAssert?: boolean);
    pokemon_attracted_length_sec: number;
    getPokemonAttractedLengthSec(): number;
    setPokemonAttractedLengthSec(value: any, noAssert?: boolean);
  }
  
  interface IncenseAttributesData {
    incense_lifetime_seconds?: number;
    pokemon_type: Enums.PokemonType[];
    pokemon_incense_type_probability?: number;
    standing_time_between_encounters_seconds?: number;
    moving_time_between_encounter_seconds?: number;
    distance_required_for_shorter_interval_meters?: number;
    pokemon_attracted_length_sec?: number;
  }


  export class InventoryUpgradeAttributes extends ProtoBufMessage {
    constructor(data: InventoryUpgradeAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): InventoryUpgradeAttributes;
    additional_storage: number;
    getAdditionalStorage(): number;
    setAdditionalStorage(value: any, noAssert?: boolean);
    upgrade_type: Inventory.InventoryUpgradeType;
    getUpgradeType(): Inventory.InventoryUpgradeType;
    setUpgradeType(value: any, noAssert?: boolean);
  }
  
  interface InventoryUpgradeAttributesData {
    additional_storage?: number;
    upgrade_type?: Inventory.InventoryUpgradeType;
  }


  export class PokeballAttributes extends ProtoBufMessage {
    constructor(data: PokeballAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): PokeballAttributes;
    item_effect: Enums.ItemEffect;
    getItemEffect(): Enums.ItemEffect;
    setItemEffect(value: any, noAssert?: boolean);
    capture_multi: number;
    getCaptureMulti(): number;
    setCaptureMulti(value: any, noAssert?: boolean);
    capture_multi_effect: number;
    getCaptureMultiEffect(): number;
    setCaptureMultiEffect(value: any, noAssert?: boolean);
    item_effect_mod: number;
    getItemEffectMod(): number;
    setItemEffectMod(value: any, noAssert?: boolean);
  }
  
  interface PokeballAttributesData {
    item_effect?: Enums.ItemEffect;
    capture_multi?: number;
    capture_multi_effect?: number;
    item_effect_mod?: number;
  }


  export class PotionAttributes extends ProtoBufMessage {
    constructor(data: PotionAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): PotionAttributes;
    sta_percent: number;
    getStaPercent(): number;
    setStaPercent(value: any, noAssert?: boolean);
    sta_amount: number;
    getStaAmount(): number;
    setStaAmount(value: any, noAssert?: boolean);
  }
  
  interface PotionAttributesData {
    sta_percent?: number;
    sta_amount?: number;
  }


  export class ReviveAttributes extends ProtoBufMessage {
    constructor(data: ReviveAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): ReviveAttributes;
    sta_percent: number;
    getStaPercent(): number;
    setStaPercent(value: any, noAssert?: boolean);
  }
  
  interface ReviveAttributesData {
    sta_percent?: number;
  }

}
    

export namespace Settings.Master.Pokemon {
  
  export class CameraAttributes extends ProtoBufMessage {
    constructor(data: CameraAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): CameraAttributes;
    disk_radius_m: number;
    getDiskRadiusM(): number;
    setDiskRadiusM(value: any, noAssert?: boolean);
    cylinder_radius_m: number;
    getCylinderRadiusM(): number;
    setCylinderRadiusM(value: any, noAssert?: boolean);
    cylinder_height_m: number;
    getCylinderHeightM(): number;
    setCylinderHeightM(value: any, noAssert?: boolean);
    cylinder_ground_m: number;
    getCylinderGroundM(): number;
    setCylinderGroundM(value: any, noAssert?: boolean);
    shoulder_mode_scale: number;
    getShoulderModeScale(): number;
    setShoulderModeScale(value: any, noAssert?: boolean);
  }
  
  interface CameraAttributesData {
    disk_radius_m?: number;
    cylinder_radius_m?: number;
    cylinder_height_m?: number;
    cylinder_ground_m?: number;
    shoulder_mode_scale?: number;
  }


  export class EncounterAttributes extends ProtoBufMessage {
    constructor(data: EncounterAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): EncounterAttributes;
    base_capture_rate: number;
    getBaseCaptureRate(): number;
    setBaseCaptureRate(value: any, noAssert?: boolean);
    base_flee_rate: number;
    getBaseFleeRate(): number;
    setBaseFleeRate(value: any, noAssert?: boolean);
    collision_radius_m: number;
    getCollisionRadiusM(): number;
    setCollisionRadiusM(value: any, noAssert?: boolean);
    collision_height_m: number;
    getCollisionHeightM(): number;
    setCollisionHeightM(value: any, noAssert?: boolean);
    collision_head_radius_m: number;
    getCollisionHeadRadiusM(): number;
    setCollisionHeadRadiusM(value: any, noAssert?: boolean);
    movement_type: Enums.PokemonMovementType;
    getMovementType(): Enums.PokemonMovementType;
    setMovementType(value: any, noAssert?: boolean);
    movement_timer_s: number;
    getMovementTimerS(): number;
    setMovementTimerS(value: any, noAssert?: boolean);
    jump_time_s: number;
    getJumpTimeS(): number;
    setJumpTimeS(value: any, noAssert?: boolean);
    attack_timer_s: number;
    getAttackTimerS(): number;
    setAttackTimerS(value: any, noAssert?: boolean);
  }
  
  interface EncounterAttributesData {
    base_capture_rate?: number;
    base_flee_rate?: number;
    collision_radius_m?: number;
    collision_height_m?: number;
    collision_head_radius_m?: number;
    movement_type?: Enums.PokemonMovementType;
    movement_timer_s?: number;
    jump_time_s?: number;
    attack_timer_s?: number;
  }


  export class StatsAttributes extends ProtoBufMessage {
    constructor(data: StatsAttributesData);
    static decode(buffer?: any, length?: number | string, enc?: string): StatsAttributes;
    base_stamina: number;
    getBaseStamina(): number;
    setBaseStamina(value: any, noAssert?: boolean);
    base_attack: number;
    getBaseAttack(): number;
    setBaseAttack(value: any, noAssert?: boolean);
    base_defense: number;
    getBaseDefense(): number;
    setBaseDefense(value: any, noAssert?: boolean);
    dodge_energy_delta: number;
    getDodgeEnergyDelta(): number;
    setDodgeEnergyDelta(value: any, noAssert?: boolean);
  }
  
  interface StatsAttributesData {
    base_stamina?: number;
    base_attack?: number;
    base_defense?: number;
    dodge_energy_delta?: number;
  }

}
    

export namespace Enums {
  
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
    

  export const enum CameraInterpolation {
    CAM_INTERP_CUT = 0,
    CAM_INTERP_LINEAR = 1,
    CAM_INTERP_SMOOTH = 2,
    CAM_INTERP_SMOOTH_ROT_LINEAR_MOVE = 3,
    CAM_INTERP_DEPENDS = 4,
  }
    

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
    

  export const enum Gender {
    MALE = 0,
    FEMALE = 1,
  }
    

  export const enum HoloIapItemCategory {
    IAP_CATEGORY_NONE = 0,
    IAP_CATEGORY_BUNDLE = 1,
    IAP_CATEGORY_ITEMS = 2,
    IAP_CATEGORY_UPGRADES = 3,
    IAP_CATEGORY_POKECOINS = 4,
  }
    

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
    

  export const enum Platform {
    UNSET = 0,
    IOS = 1,
    ANDROID = 2,
    OSX = 3,
    WINDOWS = 4,
  }
    

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
    

  export const enum PokemonMovementType {
    MOVEMENT_STATIC = 0,
    MOVEMENT_JUMP = 1,
    MOVEMENT_VERTICAL = 2,
    MOVEMENT_PSYCHIC = 3,
    MOVEMENT_ELECTRIC = 4,
    MOVEMENT_FLYING = 5,
    MOVEMENT_HOVERING = 6,
  }
    

  export const enum PokemonRarity {
    NORMAL = 0,
    LEGENDARY = 1,
    MYTHIC = 2,
  }
    

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
    

  export const enum TeamColor {
    NEUTRAL = 0,
    BLUE = 1,
    RED = 2,
    YELLOW = 3,
  }
    

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
    

export namespace Data.Logs.CatchPokemonLogEntry {
  
  export const enum Result {
    UNSET = 0,
    POKEMON_CAPTURED = 1,
    POKEMON_FLED = 2,
  }
    
}
    

export namespace Data.Logs.FortSearchLogEntry {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
  }
    
}
    

export namespace Networking.Responses.AttackGymResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_INVALID_ATTACK_ACTIONS = 2,
    ERROR_NOT_IN_RANGE = 3,
  }
    
}
    

export namespace Networking.Responses.CatchPokemonResponse {
  
  export const enum CatchStatus {
    CATCH_ERROR = 0,
    CATCH_SUCCESS = 1,
    CATCH_ESCAPE = 2,
    CATCH_FLEE = 3,
    CATCH_MISSED = 4,
  }
    
}
    

export namespace Networking.Responses.CheckCodenameAvailableResponse {
  
  export const enum Status {
    UNSET = 0,
    SUCCESS = 1,
    CODENAME_NOT_AVAILABLE = 2,
    CODENAME_NOT_VALID = 3,
    CURRENT_OWNER = 4,
    CODENAME_CHANGE_NOT_ALLOWED = 5,
  }
    
}
    

export namespace Networking.Responses.ClaimCodenameResponse {
  
  export const enum Status {
    UNSET = 0,
    SUCCESS = 1,
    CODENAME_NOT_AVAILABLE = 2,
    CODENAME_NOT_VALID = 3,
    CURRENT_OWNER = 4,
    CODENAME_CHANGE_NOT_ALLOWED = 5,
  }
    
}
    

export namespace Networking.Responses.CollectDailyBonusResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    FAILURE = 2,
    TOO_SOON = 3,
  }
    
}
    

export namespace Networking.Responses.CollectDailyDefenderBonusResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    FAILURE = 2,
    TOO_SOON = 3,
    NO_DEFENDERS = 4,
  }
    
}
    

export namespace Networking.Responses.DiskEncounterResponse {
  
  export const enum Result {
    UNKNOWN = 0,
    SUCCESS = 1,
    NOT_AVAILABLE = 2,
    NOT_IN_RANGE = 3,
    ENCOUNTER_ALREADY_FINISHED = 4,
    POKEMON_INVENTORY_FULL = 5,
  }
    
}
    

export namespace Networking.Responses.DownloadRemoteConfigVersionResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
  }
    
}
    

export namespace Networking.Responses.EncounterResponse {
  
  export const enum Background {
    PARK = 0,
    DESERT = 1,
  }
    

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
    

export namespace Networking.Responses.EncounterTutorialCompleteResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_INVALID_POKEMON = 2,
  }
    
}
    

export namespace Networking.Responses.EquipBadgeResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    COOLDOWN_ACTIVE = 2,
    NOT_QUALIFIED = 3,
  }
    
}
    

export namespace Networking.Responses.EvolvePokemonResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    FAILED_POKEMON_MISSING = 2,
    FAILED_INSUFFICIENT_RESOURCES = 3,
    FAILED_POKEMON_CANNOT_EVOLVE = 4,
    FAILED_POKEMON_IS_DEPLOYED = 5,
  }
    
}
    

export namespace Networking.Responses.FortDeployPokemonResponse {
  
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
    

export namespace Networking.Responses.FortRecallPokemonResponse {
  
  export const enum Result {
    NO_RESULT_SET = 0,
    SUCCESS = 1,
    ERROR_NOT_IN_RANGE = 2,
    ERROR_POKEMON_NOT_ON_FORT = 3,
    ERROR_NO_PLAYER = 4,
  }
    
}
    

export namespace Networking.Responses.FortSearchResponse {
  
  export const enum Result {
    NO_RESULT_SET = 0,
    SUCCESS = 1,
    OUT_OF_RANGE = 2,
    IN_COOLDOWN_PERIOD = 3,
    INVENTORY_FULL = 4,
  }
    
}
    

export namespace Networking.Responses.GetGymDetailsResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_NOT_IN_RANGE = 2,
  }
    
}
    

export namespace Networking.Responses.GetIncensePokemonResponse {
  
  export const enum Result {
    INCENSE_ENCOUNTER_UNKNOWN = 0,
    INCENSE_ENCOUNTER_AVAILABLE = 1,
    INCENSE_ENCOUNTER_NOT_AVAILABLE = 2,
  }
    
}
    

export namespace Networking.Responses.GetPlayerProfileResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
  }
    
}
    

export namespace Networking.Responses.IncenseEncounterResponse {
  
  export const enum Result {
    INCENSE_ENCOUNTER_UNKNOWN = 0,
    INCENSE_ENCOUNTER_SUCCESS = 1,
    INCENSE_ENCOUNTER_NOT_AVAILABLE = 2,
    POKEMON_INVENTORY_FULL = 3,
  }
    
}
    

export namespace Networking.Responses.LevelUpRewardsResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    AWARDED_ALREADY = 2,
  }
    
}
    

export namespace Networking.Responses.NicknamePokemonResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_INVALID_NICKNAME = 2,
    ERROR_POKEMON_NOT_FOUND = 3,
    ERROR_POKEMON_IS_EGG = 4,
  }
    
}
    

export namespace Networking.Responses.RecycleInventoryItemResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_NOT_ENOUGH_COPIES = 2,
    ERROR_CANNOT_RECYCLE_INCUBATORS = 3,
  }
    
}
    

export namespace Networking.Responses.ReleasePokemonResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    POKEMON_DEPLOYED = 2,
    FAILED = 3,
    ERROR_POKEMON_IS_EGG = 4,
  }
    
}
    

export namespace Networking.Responses.SetAvatarResponse {
  
  export const enum Status {
    UNSET = 0,
    SUCCESS = 1,
    AVATAR_ALREADY_SET = 2,
    FAILURE = 3,
  }
    
}
    

export namespace Networking.Responses.SetContactSettingsResponse {
  
  export const enum Status {
    UNSET = 0,
    SUCCESS = 1,
    FAILURE = 2,
  }
    
}
    

export namespace Networking.Responses.SetFavoritePokemonResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_POKEMON_NOT_FOUND = 2,
    ERROR_POKEMON_IS_EGG = 3,
  }
    
}
    

export namespace Networking.Responses.SetPlayerTeamResponse {
  
  export const enum Status {
    UNSET = 0,
    SUCCESS = 1,
    TEAM_ALREADY_SET = 2,
    FAILURE = 3,
  }
    
}
    

export namespace Networking.Responses.SfidaActionLogResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
  }
    
}
    

export namespace Networking.Responses.StartGymBattleResponse {
  
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
    

export namespace Networking.Responses.UpgradePokemonResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_POKEMON_NOT_FOUND = 2,
    ERROR_INSUFFICIENT_RESOURCES = 3,
    ERROR_UPGRADE_NOT_AVAILABLE = 4,
    ERROR_POKEMON_IS_DEPLOYED = 5,
  }
    
}
    

export namespace Networking.Responses.UseIncenseResponse {
  
  export const enum Result {
    UNKNOWN = 0,
    SUCCESS = 1,
    INCENSE_ALREADY_ACTIVE = 2,
    NONE_IN_INVENTORY = 3,
    LOCATION_UNSET = 4,
  }
    
}
    

export namespace Networking.Responses.UseItemEggIncubatorResponse {
  
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
    

export namespace Networking.Responses.UseItemGymResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_CANNOT_USE = 2,
    ERROR_NOT_IN_RANGE = 3,
  }
    
}
    

export namespace Networking.Responses.UseItemPotionResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_NO_POKEMON = 2,
    ERROR_CANNOT_USE = 3,
    ERROR_DEPLOYED_TO_FORT = 4,
  }
    
}
    

export namespace Networking.Responses.UseItemReviveResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_NO_POKEMON = 2,
    ERROR_CANNOT_USE = 3,
    ERROR_DEPLOYED_TO_FORT = 4,
  }
    
}
    

export namespace Networking.Responses.UseItemXpBoostResponse {
  
  export const enum Result {
    UNSET = 0,
    SUCCESS = 1,
    ERROR_INVALID_ITEM_TYPE = 2,
    ERROR_XP_BOOST_ALREADY_ACTIVE = 3,
    ERROR_NO_ITEMS_REMAINING = 4,
    ERROR_LOCATION_UNSET = 5,
  }
    
}
    