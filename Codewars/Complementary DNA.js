// Instructions:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// DNAStrand ("ATTGC") # return "TAACG"
// DNAStrand ("GTAT") # return "CATA"
//
// Sample Tests:
// Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
// Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
// Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");
//
// Best Practices
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }
//
// Another Best Practices
// var pairs = {'A':'T','T':'A','C':'G','G':'C'};
//
// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

function DNAStrand(dna){
  //your code here
  var dnaSym = new Array(4);
  dnaSym['A'] = 'T';
  dnaSym['T'] = 'A';
  dnaSym['C'] = 'G';
  dnaSym['G'] = 'C';

  var dnaArr = dna.split('');
  var len = dnaArr.length;
  var dnaStr = '',
      i;

  for(i = 0; i < len; i++){
    dnaStr += dnaSym[dnaArr[i]];
  }

  return dnaStr;
}