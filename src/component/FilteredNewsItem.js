import NewsItem from './NewsItem';
import { withAuthorFilter, withImageFilter } from './Filters';

// Chain the HOCs to apply both filters
const FilteredNewsItem = withAuthorFilter(withImageFilter(NewsItem));

export default FilteredNewsItem;
