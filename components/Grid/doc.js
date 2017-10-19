'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4', 'flex'];
var edgeSizes = ['small', 'medium', 'large', 'none'];

exports.default = function (Grid) {
  var DocumentedGrid = (0, _reactDesc.describe)(Grid).description('A grid system for laying out content. To use, define the\n    rows and columns, create area names for adjacent cells, and then\n    place Box components inside those areas using the Box.gridArea property.\n    See https://css-tricks.com/snippets/css/complete-guide-grid/.').usage('import { Grid } from \'grommet\';\n    <Grid/>');

  DocumentedGrid.propTypes = {
    align: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description('How to align the individual items inside the grid when there is extra\n      space in the column axis.').defaultProp('stretch'),
    alignContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents along the column axis.'),
    areas: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      name: _reactDesc.PropTypes.string,
      start: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number),
      end: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)
    })).description('Area names and column,row coordinates.'),
    columns: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOf(sizes)).description('Column sizes.'),
    gap: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(edgeSizes), _reactDesc.PropTypes.shape({
      horizontal: _reactDesc.PropTypes.oneOf(edgeSizes),
      vertical: _reactDesc.PropTypes.oneOf(edgeSizes)
    })]).description('Gap sizes between rows and/or columns.'),
    justify: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description('How to align the individual items inside the grid when there is extra\n      space in the row axis.').defaultProp('stretch'),
    justifyContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents along the row axis.'),
    rows: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOf(sizes)).description('Row sizes.'),
    tag: _reactDesc.PropTypes.string.description('The DOM tag to use for the element.').defaultProp('div')
  };

  return DocumentedGrid;
};