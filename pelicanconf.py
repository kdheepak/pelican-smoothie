#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Dheepak Krishnamurthy'
SITENAME = u'pelican-smoothie'

PATH = 'content'

TIMEZONE = 'America/Denver'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

STATIC_PATHS = ['images', 'extra/CNAME']
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'},}

LOAD_CONTENT_CACHE = False
CACHE_CONTENT = False


# Defaults
DEFAULT_CATEGORY = 'Miscellaneous'
USE_FOLDER_AS_CATEGORY = False

# put articles (posts) in blog/
ARTICLE_URL = 'blog/{slug}.html'
ARTICLE_SAVE_AS = 'blog/{slug}.html'

PAGE_URL = '{category}/{slug}.html'
PAGE_SAVE_AS = '{category}/{slug}.html'


############################################################################

# Pelican-Smoothie customization

THEME = '.'

# Disqus

DISQUS_SITENAME = "kdheepak89"

# COVER_IMG = "images/covers/red.png"
AVATAR_IMG = "images/avatar.jpeg"
SITE_TITLE_LABEL = "pelican-smoothie"
SITE_SUBTITLE_LABEL = "Insert subtitle here!"
SUMMARY_MAX_LENGTH = 5

STATIC_PATHS = ['images', 'extra/CNAME']
DIRECT_TEMPLATES = (('index', 'archives', 'blog'))
TAG_SAVE_AS = ''
AUTHOR_SAVE_AS = ''
CATEGORY_SAVE_AS = ''

BLOG_URL = 'blog/index.html'
BLOG_SAVE_AS = 'blog/index.html'

# Legal
SITE_LICENSE = u'<div>pelican-smoothie is under The MIT License (MIT)</div>'

# SEO
SITE_DESCRIPTION = u"Best pelican theme I've made so far!"

LANDING_PAGE_ABOUT = {
'details': """Landing page description! You can find information about me <a href="http://kdheepak.com">here</a>."""}

# Social
SOCIAL = { 'Twitter': '',
        'Github': '',
        'Email': 'mailto:me@kdheepak.com',
        'GooglePlus': ''}

# Google and Mixpanel Analytics

GOOGLE_ANALYTICS = 'UA-47173621-1'
MIXPANEL_ANALYTICS = "64f6d91c05c2a88162416f819cd362c3"

CONTACT_ME_DESCRIPTION = ""
