import json


wordFile = open("wordlist1.txt", 'r')
wordsList = [line.split(",") for line in wordFile.readlines()]

print wordsList
newWords = []
for words in wordsList:
    newWords.append(words[0])


print newWords
print json.dumps(newWords[0])



words = ["snowman", "trip", "tablet", "birdge", "needle", "pyramid", "scuba diver", "spring", "star", "smuggler", "witch", "poison", "pupil", "whale", "seal", "undertaker", "lion", "london", "fall", "boot", "dice", "eye", "board", "switch", "air", "plastic", "sub", "web", "ruler", "ice cream", "hawk", "phoenix", "platypus", "bank", "shark", "key", "hospital", "arm", "train", "force", "spot", "slug", "casino", "death", "vam", "draft", "skyscraper", "amublance", "agent", "antartica", "chocolate", "knight", "spy", "fire", "racket", "trunk", "lemon", "engine", "litter", "state", "genius", "limousine", "temple", "dance", "berry", "pass", "stadium", "foot", "carrot", "america", "mammoth", "germany", "fighter", "mouth", "disease", "figure", "berlin", "lap", "charge", "horn", "iron", "hook", "night", "cat", "dog", "marble", "heart", "buffalo", "grace", "china", "chest", "square", "mass.\n", "horse", "amazon", "toyko", "jam", "fish", "whip", "block", "helicopter", "crane", "slip", "robin", "shop", "opera", "africa", "court", "pool", "england", "ketchup", "tower", "plot", "diamond", "cross", "mail", "police", "rock", "scale", "ghost", "ship", "mexico", "cloak", "straw", "calf", "dwarf", "pound", "fan", "bomb", "rabbit", "battery", "drop", "stick", "boom", "jupiter", "alien", "saturn", "bermuda", "field", "track", "piano", "compound", "pilot", "stock", "vet", "ham", "laser", "dress", "buck", "suit", "thumb", "pie", "unicorn", "band", "band", "beijing", "snow", "bell", "shakespeare", "head", "torch", "eagle", "australia", "orange", "link", "soldier", "green", "dragon", "new york", "flute", "ivory", "comic", "fork", "wake", "life", "beach", "card", "match", "space", "spring", "shot", "staff", "conductor", "hood", "deck", "olive", "bolt", "yard", "greece", "bat", "pirate", "luck", "model", "park", "organ", "octupus", "cotton", "france", "face", "tap", "port", "march", "cricket", "glass", "part", "glove", "alps", "file", "pit", "fair", "root", "tooth", "back", "line", "telescope", "nurse", "hand", "mine", "wall", "princess", "cook", "bed", "thief", "apple", "cast", "check", "crash", "round", "paper", "himalayas", "chick", "spell", "nut", "ground", "water", "horseshoe", "paste", "watch", "ninja", "cell", "pistol", "satellite", "knife", "rome", "post", "triangle", "film", "scientist", "mouse", "loch ness", "bug", "copper", "car", "jet", "soul", "washington", "ring", "pan", "ice", "forest", "canada", "well", "moon", "king", "table", "superhero", "doctor", "aztec", "pipe", "capital", "shadow", "wind", "strike", "degree", "concert", "millionaire", "point", "palm", "mount", "tick", "rose", "hole", "school", "giant", "game", "teacher", "theater", "spine", "kiwi", "embassy", "dinosaur", "spider", "vacuum", "date", "light", "sink", "mole", "hotel", "mercury", "lab", "brush", "contract", "cold", "bear", "bugle", "stream", "worm", "bar", "fly", "screen", "play", "leprechaun", "circle", "plate", "pole", "penguin", "swing", "time", "revolution", "turkey", "cycle", "spike", "button", "bark", "gas", "pants", "queen", "tail", "wave", "honey", "row", "grass", "sound", "czech", "crown", "chair", "note", "lead", "sock", "cover", "church", "missile", "center", "olympus", "lawyer", "india", "cap", "microscope", "maple", "jack", "europe", "mint", "ray", "plane", "novel", "log", "war", "centaur", "net", "tag", "fence", "bond", "pin", "duck", "scorpion", "bottle", "oil", "tie", "ball", "hollywood", "pitch", "box", "moscow", "washer", "gold", "nail", "pumpkin", "server", "change", "day", "beat", "mug", "bow", "kangaroo", "kid", "tube", "code", "angel", "robot", "shoe", "atlantis", "parachute", "bill", "club", "press", "theater", "cliff", "roulette", "drill", "belt", "lock"]
print len(words)

print len(set(words))

finalwords = []
for word in set(words):
    finalwords.append(word)

print len(finalwords)

finalList = open("gameWords.txt", 'w')
finalList.write(json.dumps(finalwords))
