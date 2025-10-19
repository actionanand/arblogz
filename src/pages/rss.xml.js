import rss from '@astrojs/rss';
import {site} from "../consts";
import getUrl from "../utils/getUrl.js";
import {getCollection} from "astro:content";
import {getCollectionByName} from "@/utils/getCollectionByName";
import {sortPostsByDate} from "@/utils/sortPostsByDate";

export async function GET(context) {
  const blogs = await getCollectionByName('blog')
  let sortPosts = await sortPostsByDate(blogs);
  let blog = sortPosts.splice(0, 20);

  // Check if user wants the raw XML feed
  const url = new URL(context.request.url);
  const format = url.searchParams.get('format');
  const accept = context.request.headers.get('accept') || '';
  
  // Return XML for feed readers or if explicitly requested
  const wantsXml = format === 'xml' || accept.includes('application/rss+xml') || accept.includes('application/xml') || accept.includes('text/xml');
  
  if (wantsXml) {
    return rss({
      title: site.title,
      description: site.description,
      site: site.url,
      items: blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description ? post.data.description : post.body.substring(0, 140).replace(/#/gi, "") + "...",
        link: `${getUrl("/blog/")}${post.slug}/`,
      })),
    });
  }

  // Return HTML for browsers
  const feedUrl = `${url.origin}${url.pathname}?format=xml`;
  
  const avatarImg = site.avatar ? `<img src="${site.avatar}" alt="${site.author}" class="w-16 h-16 rounded-full object-cover border-2 border-green-500" />` : '';
  const authorText = site.author ? `<p class="text-sm text-gray-600">by ${site.author}</p>` : '';
  
  const recentPosts = blog.slice(0, 5).map(post => {
    const dateStr = new Date(post.data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return `
          <li class="border-b border-gray-100 pb-3 last:border-0">
            <a href="${getUrl("/blog/")}${post.slug}/" class="text-blue-600 hover:text-blue-800 font-medium">
              ${post.data.title}
            </a>
            <div class="text-sm text-gray-500 mt-1">
              ${dateStr}
            </div>
          </li>`;
  }).join('');

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RSS Feed - ${site.title}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; }
  <\/style>
</head>
<body class="bg-gray-50 min-h-screen">
  <div class="max-w-3xl mx-auto px-4 py-8">
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-3">
        <svg class="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
        <\/svg>
        <h1 class="text-3xl font-bold text-gray-800">RSS Feed<\/h1>
      <\/div>
      <a href="${site.url}" class="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        <\/svg>
        Back to home
      <\/a>
    <\/div>

    <div class="bg-white rounded-lg shadow-md p-8 mb-6">
      <div class="flex items-center gap-4 mb-4">
        ${avatarImg}
        <div>
          <div class="flex items-center gap-3 mb-1">
            <h2 class="text-2xl font-semibold text-gray-800">Subscribe to<\/h2>
            <span class="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">${site.title}<\/span>
          <\/div>
          ${authorText}
        <\/div>
      <\/div>
      <p class="text-gray-600 mb-6">${site.description}<\/p>
      
      <div class="bg-gray-100 rounded-lg p-4 mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">RSS Feed URL:<\/label>
        <div class="flex gap-2">
          <input 
            type="text" 
            value="${feedUrl}" 
            readonly 
            class="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm font-mono"
            id="feedUrl"
          />
          <button 
            onclick="copyFeedUrl()"
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Copy
          <\/button>
        <\/div>
      <\/div>

      <div class="border-t border-gray-200 pt-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">📰 What is an RSS feed?<\/h3>
        <p class="text-gray-600 mb-4">
          An RSS feed is a web feed that allows you to access updates to websites in a standardized format. 
          You can use a feed reader to check many sites at once, rather than visiting them individually.
        <\/p>
      <\/div>

      <div class="border-t border-gray-200 pt-6 mt-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">🚀 How to subscribe<\/h3>
        <ol class="space-y-3 text-gray-600">
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1<\/span>
            <span>Choose a feed reader application (see recommendations below)<\/span>
          <\/li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2<\/span>
            <span>Copy the RSS feed URL above<\/span>
          <\/li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3<\/span>
            <span>Add it to your feed reader by pasting the URL<\/span>
          <\/li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4<\/span>
            <span>Enjoy automatic updates whenever new content is published!<\/span>
          <\/li>
        <\/ol>
      <\/div>

      <div class="border-t border-gray-200 pt-6 mt-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">📱 Popular Feed Readers<\/h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a href="https://feedly.com" target="_blank" class="p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
            <div class="font-medium text-gray-800">Feedly<\/div>
            <div class="text-sm text-gray-500">Web, iOS, Android<\/div>
          <\/a>
          <a href="https://www.inoreader.com" target="_blank" class="p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
            <div class="font-medium text-gray-800">Inoreader<\/div>
            <div class="text-sm text-gray-500">Web, iOS, Android<\/div>
          <\/a>
          <a href="https://netnewswire.com" target="_blank" class="p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
            <div class="font-medium text-gray-800">NetNewsWire<\/div>
            <div class="text-sm text-gray-500">Mac, iOS (Free)<\/div>
          <\/a>
          <a href="https://reederapp.com" target="_blank" class="p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
            <div class="font-medium text-gray-800">Reeder<\/div>
            <div class="text-sm text-gray-500">Mac, iOS<\/div>
          <\/a>
        <\/div>
      <\/div>

      <div class="border-t border-gray-200 pt-6 mt-6 text-center">
        <a 
          href="https://aboutfeeds.com" 
          target="_blank" 
          class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          Learn more about RSS feeds
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          <\/svg>
        <\/a>
      <\/div>
    <\/div>

    <div class="bg-white rounded-lg shadow-md p-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">📝 Recent Posts (${blog.length})<\/h3>
      <ul class="space-y-3">
        ${recentPosts}
      <\/ul>
    <\/div>

    <div class="text-center mt-8 text-gray-500 text-sm">
      <p>This is a web-friendly preview of your RSS feed.<\/p>
      <p class="mt-1">Feed readers will receive the actual XML feed automatically.<\/p>
    <\/div>
  <\/div>

  <script>
    function copyFeedUrl() {
      var input = document.getElementById('feedUrl');
      input.select();
      document.execCommand('copy');
      
      var button = event.target;
      var originalText = button.textContent;
      button.textContent = 'Copied!';
      button.classList.remove('bg-green-600', 'hover:bg-green-700');
      button.classList.add('bg-green-700');
      
      setTimeout(function() {
        button.textContent = originalText;
        button.classList.add('bg-green-600', 'hover:bg-green-700');
        button.classList.remove('bg-green-700');
      }, 2000);
    }
  <\/script>
<\/body>
<\/html>`;

  return new Response(htmlContent, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}