const basicEnglish = {
  // terminal
  Nn: [
    "cat",
    "dog",
    "cloud",
    "cup",
    "Mt. Si",
    "Lake Agnes",
    "Charlie",
    "Monte Fitz Roy",
  ], // noun
  Dn: ["this", "that"], //demonstrative
  Vi: ["stays", "sits", "runs", "climbs", "looks", "writes", "drinks", "reads"], // instransitive verb
  Vt: ["stayed", "sat", "ran", "jumped", "flew", "surfed"], // transitive verb
  Aj: ["non-stop", "clear", "blue", "wonderful", "gloomy", "glassy", "chummy"],
  In: ["with", "on", "along", "among", "down", "upon", "off", "to"], //preposition
  Ar: ["the", "a"], // article

  // non terminal
  NP: ["#Ar# #Nn#", "#Ar# #Aj# #Nn#", "#Nn#", "#Dn# #Nn#"],
  VP: ["#Vi#", "#Vt# #NP#", "#Vi# #PP#"],
  PP: ["#In# #NP#"],

  // origin
  S: ["#NP# #VP#."],
}

export default basicEnglish

/** GRAMMAR 101
 * ADJECTIVE: describes qualities or states of nouns. silly, yellow, fast, enourmous, many, few, furry
 * PREDICATE ADJECTIVE: describes a verb
 * ADVERB: also describes a verb? usuallt ending in -ly
 * ARTICLES: describes noun as specific or unspecific. the, a
 * CONJUNCTION: link words, phrases, or clauses together. and, yet ,or, either, also, is
 * INTERJECTION: sudden feeling. yikes, ouch, wow
 * PROPER NOUN: specific person place or thing
 * COMMON NOUN: generic
 * PERPOSITION: where things are. of, in , to, for, with, under
 * PRONOUN: replacement for a noun. they, I, you, who, she, we
 * VERB: action
 * DEMONSTRATIVE: determines near or far. this that these those
 */
/** GRAMMAR SYNTAX 101
 * ADJECTIVE NOUN
 * ARTICLE NOUN
 * ANYTHING CONJUNCTION ANYTHING ?
 * INTERJECTION"mark" anything
 * VERB PREPOSITION
 * DEMONSTRATIVE NOUN
 * NOUN CONJUGATION
 */
