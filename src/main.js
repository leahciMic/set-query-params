import _ from 'lodash/fp';
import nodeUrl from 'url';

function parseUrl(url) {
  return _.omit(['search', 'hash'], nodeUrl.parse(url, true));
}

export default function setParams(url, params) {
  const parsedUrl = parseUrl(url);
  return nodeUrl.format(_.set('query', _.assign(parsedUrl.query, params), parsedUrl));
}
