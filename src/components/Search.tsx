import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Search as SearchIcon, Clock, TrendingUp, X, Play, Star } from 'lucide-react';
import { useState } from 'react';

interface SearchProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
}

export function Search({ onBack, onMovieClick }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [searchHistory, setSearchHistory] = useState([
    '肖申克的救赎',
    '星际穿越',
    '盗梦空间',
    '泰坦尼克号'
  ]);

  const hotSearches = [
    { id: 1, keyword: '流浪地球2', trend: 'up', count: '120万' },
    { id: 2, keyword: '满江红', trend: 'up', count: '98万' },
    { id: 3, keyword: '阿凡达2', trend: 'hot', count: '85万' },
    { id: 4, keyword: '无名', trend: 'up', count: '76万' },
    { id: 5, keyword: '深海', trend: 'new', count: '65万' },
    { id: 6, keyword: '三体', trend: 'up', count: '54万' },
    { id: 7, keyword: '熊出没', trend: 'up', count: '43万' },
    { id: 8, keyword: '交换人生', trend: 'new', count: '32万' }
  ];

  // 所有电影数据
  const allMovies = [
    {
      id: '1',
      title: '肖申克的救赎',
      year: '1994',
      rating: 9.7,
      category: '剧情',
      director: '弗兰克·德拉邦特',
      actors: ['蒂姆·罗宾斯', '摩根·弗里曼'],
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '2',
      title: '星际穿越',
      year: '2014',
      rating: 9.3,
      category: '科幻',
      director: '克里斯托弗·诺兰',
      actors: ['马修·麦康纳', '安妮·海瑟薇'],
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '3',
      title: '盗梦空间',
      year: '2010',
      rating: 9.4,
      category: '科幻/悬疑',
      director: '克里斯托弗·诺兰',
      actors: ['莱昂纳多·迪卡普里奥', '玛丽昂·歌迪亚'],
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '4',
      title: '泰坦尼克号',
      year: '1997',
      rating: 9.5,
      category: '爱情/剧情',
      director: '詹姆斯·卡梅隆',
      actors: ['莱昂纳多·迪卡普里奥', '凯特·温斯莱特'],
      poster: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwc2NlbmV8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '5',
      title: '流浪地球2',
      year: '2023',
      rating: 8.3,
      category: '科幻',
      director: '郭帆',
      actors: ['吴京', '刘德华'],
      poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG1vdmllJTIwc2NlbmV8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '6',
      title: '满江红',
      year: '2023',
      rating: 7.8,
      category: '剧情/悬疑',
      director: '张艺谋',
      actors: ['沈腾', '易烊千玺'],
      poster: 'https://images.unsplash.com/photo-1574267432644-f610b8e40759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbW92aWV8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '7',
      title: '阿凡达2',
      year: '2022',
      rating: 8.9,
      category: '科幻/冒险',
      director: '詹姆斯·卡梅隆',
      actors: ['萨姆·沃辛顿', '佐伊·索尔达娜'],
      poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbW92aWV8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '8',
      title: '三体',
      year: '2023',
      rating: 8.1,
      category: '科幻',
      director: '杨磊',
      actors: ['张鲁一', '于和伟'],
      poster: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBkcmFtYXxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '9',
      title: '深海',
      year: '2023',
      rating: 7.6,
      category: '动画/奇幻',
      director: '田晓鹏',
      actors: ['苏鑫', '王亭文'],
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBtb3ZpZXxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '10',
      title: '无名',
      year: '2023',
      rating: 7.9,
      category: '剧情/犯罪',
      director: '程耳',
      actors: ['梁朝伟', '王一博'],
      poster: 'https://images.unsplash.com/photo-1574267432644-f610b8e40759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbW92aWV8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  // 所有影人数据
  const allActors = [
    {
      id: 1,
      name: '克里斯托弗·诺兰',
      role: '导演',
      works: '星际穿越、盗梦空间',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 2,
      name: '马修·麦康纳',
      role: '演员',
      works: '星际穿越、真探',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 3,
      name: '莱昂纳多·迪卡普里奥',
      role: '演员',
      works: '盗梦空间、泰坦尼克号',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 4,
      name: '詹姆斯·卡梅隆',
      role: '导演',
      works: '阿凡达2、泰坦尼克号',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNlcmlvdXN8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 5,
      name: '张艺谋',
      role: '导演',
      works: '满江红、英雄',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGFzaWFufGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 6,
      name: '吴京',
      role: '演员',
      works: '流浪地球2、战狼',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxlfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 7,
      name: '刘德华',
      role: '演员',
      works: '流浪地球2、无间道',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 8,
      name: '沈腾',
      role: '演员',
      works: '满江红、独行月球',
      avatar: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGZ1bm55fGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  // 根据搜索词过滤结果
  const getSearchResults = () => {
    const query = searchQuery.toLowerCase().trim();
    
    // 过滤电影
    const filteredMovies = allMovies.filter(movie => 
      movie.title.toLowerCase().includes(query) ||
      movie.category.toLowerCase().includes(query) ||
      movie.director.toLowerCase().includes(query) ||
      movie.actors.some(actor => actor.toLowerCase().includes(query))
    );

    // 过滤影人
    const filteredActors = allActors.filter(actor =>
      actor.name.toLowerCase().includes(query) ||
      actor.works.toLowerCase().includes(query)
    );

    return {
      movies: filteredMovies,
      actors: filteredActors
    };
  };

  const searchResults = getSearchResults();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setSearchQuery(query);
      setHasSearched(true);
      // Add to search history
      if (!searchHistory.includes(query)) {
        setSearchHistory([query, ...searchHistory.slice(0, 9)]);
      }
    }
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  const handleDeleteHistoryItem = (item: string) => {
    setSearchHistory(searchHistory.filter(h => h !== item));
  };

  const handleHotSearchClick = (keyword: string) => {
    setSearchQuery(keyword);
    setHasSearched(true);
    if (!searchHistory.includes(keyword)) {
      setSearchHistory([keyword, ...searchHistory.slice(0, 9)]);
    }
  };

  const isSearching = searchQuery.trim().length > 0;

  // 输入时的关联联想：从搜索历史、热门搜索、大家都在搜、影视标题中匹配
  const everyoneTags = ['科幻电影', '悬疑推理', '经典老片', '动作片', '爱情片', '喜剧片'];
  const getSuggestions = (): string[] => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const seen = new Set<string>();
    const add = (s: string) => {
      if (s.toLowerCase().includes(q) && !seen.has(s)) {
        seen.add(s);
        return true;
      }
      return false;
    };
    const out: string[] = [];
    searchHistory.forEach(h => add(h) && out.push(h));
    hotSearches.forEach(h => add(h.keyword) && out.push(h.keyword));
    everyoneTags.forEach(t => add(t) && out.push(t));
    allMovies.forEach(m => add(m.title) && out.push(m.title));
    allActors.forEach(a => add(a.name) && out.push(a.name));
    return out.slice(0, 10);
  };
  const suggestions = getSuggestions();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Search */}
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 relative">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5">
              <SearchIcon className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索热门影视"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                className="flex-1 bg-transparent outline-none text-sm"
                autoFocus
              />
              {searchQuery && (
                <button onClick={() => {
                  setSearchQuery('');
                  setHasSearched(false);
                }} className="p-1">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
            {/* 输入联想下拉：输入时展示，执行搜索后隐藏 */}
            {suggestions.length > 0 && !hasSearched && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-2 max-h-64 overflow-y-auto z-20">
                {suggestions.map((word, i) => (
                  <button
                    key={`${word}-${i}`}
                    onClick={() => handleSearch(word)}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                  >
                    <SearchIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{word}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {isSearching && (
            <button
              onClick={() => handleSearch(searchQuery)}
              className="text-red-500 text-sm font-medium px-2"
            >
              搜索
            </button>
          )}
        </div>
      </div>

      <div className="pb-20">
        {!isSearching || !hasSearched ? (
          <>
            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="px-4 py-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <h2 className="font-medium">搜索历史</h2>
                  </div>
                  <button
                    onClick={handleClearHistory}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    清空
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm"
                    >
                      <span
                        onClick={() => handleHotSearchClick(item)}
                        className="cursor-pointer"
                      >
                        {item}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteHistoryItem(item);
                        }}
                        className="hover:bg-gray-200 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3 text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hot Searches */}
            <div className="px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-red-500" />
                <h2 className="font-medium">热门搜索</h2>
              </div>
              <div className="space-y-3">
                {hotSearches.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleHotSearchClick(item.keyword)}
                    className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2"
                  >
                    <span
                      className={`text-lg font-bold w-6 text-center ${
                        index < 3 ? 'text-red-500' : 'text-gray-400'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.keyword}</span>
                        {item.trend === 'hot' && (
                          <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded">
                            热
                          </span>
                        )}
                        {item.trend === 'new' && (
                          <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded">
                            新
                          </span>
                        )}
                        {item.trend === 'up' && (
                          <TrendingUp className="w-3 h-3 text-red-500" />
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Search Suggestions */}
            <div className="px-4 py-4 bg-gray-50">
              <h3 className="text-sm text-gray-500 mb-3">大家都在搜</h3>
              <div className="flex flex-wrap gap-2">
                {['科幻电影', '悬疑推理', '经典老片', '动作片', '爱情片', '喜剧片'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleHotSearchClick(tag)}
                    className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-red-500 hover:text-red-500"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Search Results */}
            <div className="px-4 py-4">
              {/* Movies Section */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">影视作品</h3>
                <div className="space-y-3">
                  {searchResults.movies.map((movie) => (
                    <div
                      key={movie.id}
                      onClick={() => onMovieClick(movie.id)}
                      className="flex gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 -mx-2"
                    >
                      <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={movie.poster}
                          alt={movie.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium mb-1 truncate">{movie.title}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-medium">{movie.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">{movie.year}</span>
                        </div>
                        <p className="text-sm text-gray-600">{movie.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actors/Directors Section */}
              <div>
                <h3 className="font-medium mb-3">影人</h3>
                <div className="space-y-3">
                  {searchResults.actors.map((actor) => (
                    <div
                      key={actor.id}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 -mx-2"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={actor.avatar}
                          alt={actor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{actor.name}</h4>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                            {actor.role}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">代表作：{actor.works}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* No Results */}
              {searchResults.movies.length === 0 && searchResults.actors.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-2">
                    <SearchIcon className="w-16 h-16 mx-auto" />
                  </div>
                  <p className="text-gray-500">未找到相关结果</p>
                  <p className="text-sm text-gray-400 mt-1">试试其他关键词吧</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}