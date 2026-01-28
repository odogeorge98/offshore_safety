import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, ArrowLeft, Share2, Bookmark, 
  ChevronRight, Filter, Search, Tag, User,
  ChevronDown, ChevronUp, MessageCircle, Facebook, Twitter,
  Linkedin, Eye, Heart, Printer,
  Mail, X, CheckCircle,
  CalendarDays, Pin,
  Newspaper, Sparkles, ArrowRight
} from 'lucide-react';
import './NewsAndEvents.css';

const newsData = [
  {
    id: 1,
    title: "New Offshore Safety Regulations 2024",
    excerpt: "The International Maritime Organization has announced new offshore safety regulations that will impact all operators.",
    content: `
      <h2>New Offshore Safety Regulations 2024</h2>
      <p>The International Maritime Organization (IMO) has announced significant updates to offshore safety regulations that will come into effect from January 1, 2024. These changes represent the most comprehensive safety overhaul in the past decade.</p>
      <h3>Key Changes Include:</h3>
      <ul>
        <li>Enhanced emergency response requirements for offshore installations</li>
        <li>New certification requirements for safety officers</li>
        <li>Updated fire prevention and control measures</li>
        <li>Improved environmental protection standards</li>
      </ul>
    `,
    category: "Regulatory Updates",
    date: "2024-03-15",
    readTime: "5 min read",
    author: "John Smith",
    authorRole: "Safety Compliance Director",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200&h=600&fit=crop",
    tags: ["Safety", "Regulations", "Compliance", "Offshore"],
    featured: true,
    type: "news"
  },
  {
    id: 2,
    title: "Annual Safety Conference 2024: Register Now",
    excerpt: "Join industry leaders at our Annual Safety Conference featuring workshops, networking, and latest innovations.",
    content: `
      <h2>Annual Safety Conference 2024</h2>
      <p>Join us for the most anticipated safety event of the year! Our Annual Safety Conference brings together industry leaders, safety professionals, and innovators from around the world.</p>
      <h3>Event Details</h3>
      <p><strong>Date:</strong> June 15-17, 2024</p>
      <p><strong>Location:</strong> International Convention Center, Lagos</p>
    `,
    category: "Conference",
    date: "2024-03-10",
    readTime: "4 min read",
    author: "Emma Wilson",
    authorRole: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    tags: ["Conference", "Networking", "Training", "Innovation"],
    featured: true,
    type: "event",
    eventDate: "2024-06-15",
    location: "Lagos, Nigeria"
  },
  {
    id: 3,
    title: "New Training Facility Opening in Port Harcourt",
    excerpt: "State-of-the-art training facility equipped with latest simulation technology now open for corporate training.",
    content: `
      <h2>New Training Facility Opening in Port Harcourt</h2>
      <p>We are excited to announce the opening of our new state-of-the-art training facility in Port Harcourt. This 50,000 square foot facility represents our commitment to providing world-class safety training.</p>
    `,
    category: "Facility Update",
    date: "2024-03-05",
    readTime: "6 min read",
    author: "David Chen",
    authorRole: "Facility Director",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop",
    tags: ["Facility", "Training", "Technology", "Safety"],
    featured: false,
    type: "news"
  },
  {
    id: 4,
    title: "Partnership with Global Safety Council Announced",
    excerpt: "We're proud to announce our new strategic partnership with the Global Safety Council to enhance training standards.",
    content: `
      <h2>Partnership with Global Safety Council</h2>
      <p>We are delighted to announce a new strategic partnership with the Global Safety Council (GSC), a leading international organization dedicated to advancing safety standards worldwide.</p>
    `,
    category: "Partnership",
    date: "2024-02-28",
    readTime: "3 min read",
    author: "Robert Johnson",
    authorRole: "Partnership Director",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
    tags: ["Partnership", "Global", "Standards", "Certification"],
    featured: false,
    type: "news"
  },
  {
    id: 5,
    title: "Workshop: Advanced Risk Assessment Techniques",
    excerpt: "Join our expert-led workshop on advanced risk assessment methodologies for complex operations.",
    content: `
      <h2>Workshop: Advanced Risk Assessment Techniques</h2>
      <p>We are hosting a specialized workshop on advanced risk assessment techniques designed for safety professionals working in complex operational environments.</p>
    `,
    category: "Workshop",
    date: "2024-02-25",
    readTime: "4 min read",
    author: "Dr. Sarah Johnson",
    authorRole: "Risk Assessment Expert",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=600&fit=crop",
    tags: ["Workshop", "Risk Assessment", "Training", "Professional"],
    featured: false,
    type: "event",
    eventDate: "2024-04-10",
    location: "Lagos, Nigeria"
  },
  {
    id: 6,
    title: "Safety Innovation Awards 2024 Winners Announced",
    excerpt: "Celebrating groundbreaking safety innovations and recognizing industry leaders in safety excellence.",
    content: `
      <h2>Safety Innovation Awards 2024 Winners Announced</h2>
      <p>We are proud to announce the winners of the 2024 Safety Innovation Awards, recognizing groundbreaking contributions to workplace safety and innovative approaches to risk management.</p>
    `,
    category: "Awards",
    date: "2024-02-20",
    readTime: "5 min read",
    author: "Thomas Wilson",
    authorRole: "Awards Committee Chair",
    image: "https://images.unsplash.com/photo-1560073744-7643b964ca61?w=1200&h=600&fit=crop",
    tags: ["Awards", "Innovation", "Recognition", "Achievement"],
    featured: true,
    type: "news"
  }
];

const relatedArticles = [
  {
    id: 7,
    title: "Digital Transformation in Safety Training",
    excerpt: "How digital tools are revolutionizing safety education and certification processes.",
    category: "Technology",
    date: "2024-02-15",
    readTime: "4 min read"
  },
  {
    id: 8,
    title: "Mental Health and Safety in High-Risk Industries",
    excerpt: "Understanding the importance of mental wellbeing in maintaining workplace safety.",
    category: "Wellbeing",
    date: "2024-02-10",
    readTime: "6 min read"
  },
  {
    id: 9,
    title: "Sustainable Safety Practices Workshop",
    excerpt: "Join our workshop on integrating sustainability with safety management systems.",
    category: "Workshop",
    date: "2024-02-05",
    readTime: "3 min read"
  }
];

const NewsEventsPage: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showShareMenu, setShowShareMenu] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [liked, setLiked] = useState<number[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['all']);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const categories = ['all', 'news', 'event', 'workshop', 'conference', 'award', 'partnership'];

  const filteredNews = newsData.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'news') return item.type === 'news';
    if (filter === 'event') return item.type === 'event';
    return item.category.toLowerCase() === filter.toLowerCase();
  }).filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredNews = newsData.filter(item => item.featured);

  const handleNewsClick = (newsItem: any) => {
    setSelectedNews(newsItem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedNews(null);
  };

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  const handleBookmark = (id: number) => {
    setBookmarked(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleLike = (id: number) => {
    setLiked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCategoryToggle = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getReadableCategory = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="ne-page">
      {/* Background Elements */}
      <div className="ne-background">
        <div className="ne-shape shape-1"></div>
        <div className="ne-shape shape-2"></div>
        <div className="ne-grid-pattern"></div>
      </div>

      {selectedNews ? (
        /* Detailed News View */
        <div className="ne-detail-view">
          <div className="ne-container">
            {/* Back Button */}
            <button className="ne-back-button" onClick={handleBackToList}>
              <ArrowLeft className="ne-icon" size={20} />
              <span>Back to News</span>
            </button>

            {/* News Header */}
            <div className="ne-header">
              <div className="ne-category-tag">
                <Tag className="ne-icon" size={16} />
                <span>{selectedNews.category}</span>
              </div>
              
              <h1 className="ne-title">{selectedNews.title}</h1>
              
              <div className="ne-meta">
                <div className="ne-meta-item">
                  <Calendar className="ne-icon" size={18} />
                  <span>{formatDate(selectedNews.date)}</span>
                </div>
                <div className="ne-meta-item">
                  <Clock className="ne-icon" size={18} />
                  <span>{selectedNews.readTime}</span>
                </div>
                <div className="ne-meta-item">
                  <User className="ne-icon" size={18} />
                  <span>{selectedNews.author}</span>
                </div>
                {selectedNews.type === 'event' && selectedNews.location && (
                  <div className="ne-meta-item">
                    <MapPin className="ne-icon" size={18} />
                    <span>{selectedNews.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="ne-content-wrapper">
              <div className="ne-main-content">
                {/* Featured Image */}
                <div className="ne-featured-image">
                  <img 
                    src={selectedNews.image} 
                    alt={selectedNews.title}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop';
                    }}
                  />
                  <div className="ne-image-overlay"></div>
                </div>

                {/* Content */}
                <div className="ne-content" dangerouslySetInnerHTML={{ __html: selectedNews.content }} />

                {/* Tags */}
                <div className="ne-tags">
                  {selectedNews.tags.map((tag: string, index: number) => (
                    <span key={index} className="ne-tag">{tag}</span>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="ne-actions">
                  <button 
                    className={`ne-action-btn ${liked.includes(selectedNews.id) ? 'liked' : ''}`}
                    onClick={() => handleLike(selectedNews.id)}
                  >
                    <Heart className="ne-icon" size={20} />
                    <span>Like</span>
                  </button>
                  
                  <div className="ne-share-container">
                    <button className="ne-action-btn" onClick={handleShare}>
                      <Share2 className="ne-icon" size={20} />
                      <span>Share</span>
                    </button>
                    
                    {showShareMenu && (
                      <div className="ne-share-menu">
                        <button className="ne-share-option">
                          <Facebook className="ne-icon" size={18} />
                          <span>Facebook</span>
                        </button>
                        <button className="ne-share-option">
                          <Twitter className="ne-icon" size={18} />
                          <span>Twitter</span>
                        </button>
                        <button className="ne-share-option">
                          <Linkedin className="ne-icon" size={18} />
                          <span>LinkedIn</span>
                        </button>
                        <button className="ne-share-option">
                          <Mail className="ne-icon" size={18} />
                          <span>Email</span>
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <button className="ne-action-btn" onClick={() => handleBookmark(selectedNews.id)}>
                    <Bookmark className={`ne-icon ${bookmarked.includes(selectedNews.id) ? 'filled' : ''}`} size={20} />
                    <span>{bookmarked.includes(selectedNews.id) ? 'Saved' : 'Save'}</span>
                  </button>
                  
                  <button className="ne-action-btn" onClick={handlePrint}>
                    <Printer className="ne-icon" size={20} />
                    <span>Print</span>
                  </button>
                </div>

                {/* Author Card */}
                <div className="ne-author-card">
                  <div className="ne-author-avatar">
                    <User className="ne-icon" size={32} />
                  </div>
                  <div className="ne-author-info">
                    <h4>{selectedNews.author}</h4>
                    <p>{selectedNews.authorRole}</p>
                    <div className="ne-author-stats">
                      <span className="ne-stat">
                        <Eye className="ne-icon" size={16} />
                        <span>1.2k views</span>
                      </span>
                      <span className="ne-stat">
                        <MessageCircle className="ne-icon" size={16} />
                        <span>24 comments</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="ne-sidebar">
                {/* Related Articles */}
                <div className="ne-sidebar-section">
                  <h3>
                    <Sparkles className="ne-icon" size={20} />
                    <span>Related Articles</span>
                  </h3>
                  <div className="ne-related-articles">
                    {relatedArticles.map(article => (
                      <div key={article.id} className="ne-related-article">
                        <h4>{article.title}</h4>
                        <div className="ne-article-meta">
                          <span className="ne-category">{article.category}</span>
                          <span className="ne-date">{formatDate(article.date)}</span>
                        </div>
                        <p>{article.excerpt}</p>
                        <button className="ne-read-more">
                          <span>Read More</span>
                          <ChevronRight className="ne-icon" size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="ne-sidebar-section">
                  <h3>
                    <Calendar className="ne-icon" size={20} />
                    <span>Upcoming Events</span>
                  </h3>
                  <div className="ne-upcoming-events">
                    {newsData.filter(item => item.type === 'event').slice(0, 2).map(event => (
                      <div key={event.id} className="ne-event-card">
                        <div className="ne-event-date">
                          <div className="ne-date-day">{new Date(event.date).getDate()}</div>
                          <div className="ne-date-month">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </div>
                        <div className="ne-event-info">
                          <h4>{event.title}</h4>
                          <div className="ne-event-meta">
                            <span className="ne-location">
                              <MapPin className="ne-icon" size={14} />
                              {event.location || 'Online'}
                            </span>
                          </div>
                          <button className="ne-register-btn">
                            <span>Register</span>
                            <ArrowRight className="ne-icon" size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="ne-sidebar-section ne-newsletter">
                  <h3>
                    <Mail className="ne-icon" size={20} />
                    <span>Stay Updated</span>
                  </h3>
                  <p>Subscribe to our newsletter for the latest news and events.</p>
                  <div className="ne-newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button className="ne-subscribe-btn">
                      <span>Subscribe</span>
                      <CheckCircle className="ne-icon" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* News List View */
        <div className="ne-list-view">
          {/* Hero Section */}
          <section className="ne-hero">
            <div className="ne-container">
              <div className="ne-hero-content">
                <div className="ne-hero-badge">
                  <Newspaper className="ne-icon" size={18} />
                  <span>NEWS & EVENTS</span>
                </div>
                <h1>Latest Updates & Industry Insights</h1>
                <p className="ne-hero-subtitle">
                  Stay informed with the latest safety regulations, upcoming events, 
                  training opportunities, and industry developments.
                </p>
                
                {/* Search Bar */}
                <div className="ne-search-container">
                  <div className="ne-search-input">
                    <Search className="ne-search-icon" size={20} />
                    <input
                      type="text"
                      placeholder="Search news, events, or topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button className="ne-clear-search" onClick={() => setSearchQuery('')}>
                        <X className="ne-icon" size={18} />
                      </button>
                    )}
                  </div>
                  <button className="ne-search-btn">
                    <Search className="ne-icon" size={18} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="ne-main-content">
            <div className="ne-container">
              {/* Mobile Filter Toggle */}
              <div className="ne-mobile-filter-toggle">
                <button 
                  className="ne-filter-toggle-btn"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <Filter className="ne-icon" size={20} />
                  <span>Filters</span>
                  <ChevronDown className={`ne-icon ${showMobileFilters ? 'rotate' : ''}`} size={20} />
                </button>
              </div>

              <div className="ne-content-wrapper">
                {/* Filters Sidebar */}
                <div className={`ne-filters-sidebar ${showMobileFilters ? 'mobile-visible' : ''}`}>
                  <div className="ne-filters-header">
                    <Filter className="ne-icon" size={20} />
                    <h3>Filters</h3>
                    <button 
                      className="ne-close-filters"
                      onClick={() => setShowMobileFilters(false)}
                    >
                      <X className="ne-icon" size={20} />
                    </button>
                  </div>

                  {/* Category Filter */}
                  <div className="ne-filter-group">
                    <div 
                      className="ne-filter-header"
                      onClick={() => handleCategoryToggle('categories')}
                    >
                      <span>Category</span>
                      {expandedCategories.includes('categories') ? (
                        <ChevronUp className="ne-icon" size={20} />
                      ) : (
                        <ChevronDown className="ne-icon" size={20} />
                      )}
                    </div>
                    
                    {expandedCategories.includes('categories') && (
                      <div className="ne-filter-options">
                        {categories.map(category => (
                          <button
                            key={category}
                            className={`ne-filter-option ${filter === category ? 'active' : ''}`}
                            onClick={() => {
                              setFilter(category);
                              setShowMobileFilters(false);
                            }}
                          >
                            <div className="ne-option-check">
                              {filter === category && <CheckCircle className="ne-icon" size={16} />}
                            </div>
                            <span>{getReadableCategory(category)}</span>
                            <span className="ne-option-count">
                              {category === 'all' ? newsData.length :
                               category === 'news' ? newsData.filter(n => n.type === 'news').length :
                               category === 'event' ? newsData.filter(n => n.type === 'event').length :
                               newsData.filter(n => n.category.toLowerCase() === category.toLowerCase()).length}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* View Toggle */}
                  <div className="ne-filter-group">
                    <div className="ne-filter-header">
                      <span>View Mode</span>
                    </div>
                    <div className="ne-view-toggle">
                      <button 
                        className={`ne-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                      >
                        <div className="ne-grid-icon"></div>
                        <span>Grid</span>
                      </button>
                      <button 
                        className={`ne-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={() => setViewMode('list')}
                      >
                        <div className="ne-list-icon"></div>
                        <span>List</span>
                      </button>
                    </div>
                  </div>

                  {/* Featured */}
                  <div className="ne-featured-section">
                    <h4>
                      <Sparkles className="ne-icon" size={18} />
                      <span>Featured</span>
                    </h4>
                    <div className="ne-featured-items">
                      {featuredNews.map(item => (
                        <div 
                          key={item.id} 
                          className="ne-featured-item"
                          onClick={() => {
                            handleNewsClick(item);
                            setShowMobileFilters(false);
                          }}
                        >
                          <div className="ne-featured-category">{item.category}</div>
                          <h5>{item.title}</h5>
                          <div className="ne-featured-meta">
                            <span>{formatDate(item.date)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* News Grid */}
                <div className="ne-grid-section">
                  <div className="ne-section-header">
                    <div className="ne-header-left">
                      <h2>
                        {filter === 'all' ? 'All Updates' : getReadableCategory(filter)}
                        <span className="ne-result-count"> ({filteredNews.length})</span>
                      </h2>
                      <p>Showing latest updates based on your selection</p>
                    </div>
                    <div className="ne-header-right">
                      <select className="ne-sort-select">
                        <option>Latest First</option>
                        <option>Oldest First</option>
                        <option>Most Popular</option>
                      </select>
                    </div>
                  </div>

                  {/* News Grid/List */}
                  <div className={`ne-news-container ${viewMode}`}>
                    {filteredNews.map(item => (
                      <div 
                        key={item.id} 
                        className={`ne-news-card ${item.featured ? 'featured' : ''}`}
                        onClick={() => handleNewsClick(item)}
                      >
                        <div className="ne-card-image">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&h=400&fit=crop';
                            }}
                          />
                          <div className="ne-image-overlay">
                            <div className="ne-overlay-content">
                              {item.featured && (
                                <div className="ne-featured-badge">
                                  <Sparkles className="ne-icon" size={14} />
                                  <span>Featured</span>
                                </div>
                              )}
                              <div className="ne-card-category">
                                {item.type === 'event' ? (
                                  <>
                                    <CalendarDays className="ne-icon" size={14} />
                                    <span>Event</span>
                                  </>
                                ) : (
                                  <>
                                    <Newspaper className="ne-icon" size={14} />
                                    <span>News</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ne-card-content">
                          <div className="ne-card-header">
                            <div className="ne-category-tag">
                              <Tag className="ne-icon" size={14} />
                              <span>{item.category}</span>
                            </div>
                            <button 
                              className={`ne-bookmark-btn ${bookmarked.includes(item.id) ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBookmark(item.id);
                              }}
                            >
                              <Bookmark className="ne-icon" size={18} />
                            </button>
                          </div>
                          
                          <h3 className="ne-card-title">{item.title}</h3>
                          <p className="ne-card-excerpt">{item.excerpt}</p>
                          
                          <div className="ne-card-footer">
                            <div className="ne-card-meta">
                              <div className="ne-meta-item">
                                <Calendar className="ne-icon" size={14} />
                                <span>{formatDate(item.date)}</span>
                              </div>
                              <div className="ne-meta-item">
                                <Clock className="ne-icon" size={14} />
                                <span>{item.readTime}</span>
                              </div>
                              {item.type === 'event' && item.location && (
                                <div className="ne-meta-item">
                                  <MapPin className="ne-icon" size={14} />
                                  <span>{item.location}</span>
                                </div>
                              )}
                            </div>
                            
                            <div className="ne-card-actions">
                              <button 
                                className={`ne-like-btn ${liked.includes(item.id) ? 'active' : ''}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLike(item.id);
                                }}
                              >
                                <Heart className="ne-icon" size={16} />
                                <span>{liked.includes(item.id) ? 'Liked' : 'Like'}</span>
                              </button>
                              <button className="ne-read-btn">
                                <span>Read More</span>
                                <ArrowRight className="ne-icon" size={16} />
                              </button>
                            </div>
                          </div>
                          
                          <div className="ne-card-tags">
                            {item.tags.slice(0, 3).map((tag: string, index: number) => (
                              <span key={index} className="ne-tag">{tag}</span>
                            ))}
                          </div>
                        </div>
                        
                        {item.featured && (
                          <div className="ne-featured-glow"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Empty State */}
                  {filteredNews.length === 0 && (
                    <div className="ne-empty-state">
                      <Newspaper className="ne-icon" size={48} />
                      <h3>No articles found</h3>
                      <p>Try adjusting your filters or search term</p>
                      <button 
                        className="ne-reset-btn"
                        onClick={() => {
                          setFilter('all');
                          setSearchQuery('');
                        }}
                      >
                        <span>Reset Filters</span>
                        <X className="ne-icon" size={18} />
                      </button>
                    </div>
                  )}

                  {/* Newsletter CTA */}
                  <div className="ne-newsletter-cta">
                    <div className="ne-cta-content">
                      <div className="ne-cta-icon">
                        <Mail className="ne-icon" size={24} />
                      </div>
                      <div className="ne-cta-text">
                        <h3>Never Miss an Update</h3>
                        <p>Subscribe to our newsletter for the latest news, events, and safety insights.</p>
                      </div>
                    </div>
                    <div className="ne-cta-form">
                      <input type="email" placeholder="Enter your email" />
                      <button className="ne-subscribe-cta-btn">
                        <span>Subscribe</span>
                        <ArrowRight className="ne-icon" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default NewsEventsPage;