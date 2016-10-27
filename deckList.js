function makeDeckList(data) {
  var cardList = d3.nest()
    .key(function (d) { return d })
    .rollup(function (v) { return v.length })
    .entries(eval(data.card_list))

  var idList = d3.nest()
    .key(function (d) { return d })
    .rollup(function (v) { return v.length })
    .entries(eval(data.card_ids))

  var formattedData = cardList.map(function (d, i) {
    return {
      name: d.key,
      count: d.value,
      id: idList[i].key
    }
  })

  var cards = d3.select('.deckinfo')
    .select('.deckContents')
    .selectAll('.card')
    .data(formattedData)

  cards.enter()
    .append('div')
    .classed('card', true)
    .attr('width', '100%')
    .html(function (d) { return d.name + ' - ' + d.count })
    .style('background-image', function (d) { return 'url(https://art.hearthstonejson.com/v1/tiles/' + d.id + '.png)' })

  cards.exit()
    .remove()

  cards
    .html(function (d) { return d.name + ' - ' + d.count })
    .style('background-image', function (d) { return 'url(https://art.hearthstonejson.com/v1/tiles/' + d.id + '.png)' })
}