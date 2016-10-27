const testData = ['EX1_169', 'EX1_169', 'CS2_008', 'CS2_008', 'AT_037', 'AT_037', 'LOE_115', 'LOE_115', 'CS2_013', 'CS2_013', 'EX1_154', 'EX1_154', 'OG_047', 'AT_044', 'OG_044', 'OG_202', 'OG_202', 'CS2_012', 'CS2_012', 'EX1_284', 'EX1_284', 'EX1_558', 'EX1_164', 'EX1_164', 'BRM_028', 'EX1_298', 'EX1_563', 'OG_134', 'KAR_711', 'KAR_711']

function makeDeckList(deckData) {
  document.getElementById('deckinfo').innerHTML = deckData.map(function (id) {
    return '<img src="https://art.hearthstonejson.com/v1/tiles/' + id + '.png" class="cardBanner" /><br/>'
  }).join('');
}