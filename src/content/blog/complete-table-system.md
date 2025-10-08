---
title: "Complete Table Theme Showcase"
description: "Comprehensive testing of all table themes with their grid variants, center alignment, and responsive behavior"
date: 2025-10-08
tags: ["tables", "themes", "grid", "responsive", "complete", "system"]
---


It shows all about available table theme show. **Default theme** will be applied when no special css classes are added. To change the table theme, you can wrap the markdown table with `div` and particular css class like below

```html
<div class="table-green">

  | Project | Team Lead | Progress | Deadline | Status |
  |---------|-----------|----------|----------|--------|
  | E-commerce Platform | Sarah Chen | 92% | Oct 15 | On Track |
  | Mobile App Redesign | David Kim | 78% | Oct 22 | Good Progress |
  | API Migration | Maria Lopez | 85% | Oct 18 | Ahead of Schedule |

</div>
```

You can add multiple css classes also like this `<div class="table-green table-green-border"> ... </div>`

---

## 🎨 **Theme Showcase**

### 1. **Default Theme vs Default Grid**

#### Regular Default (.markdown-body table)
| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| User Auth | Completed | High | Ready for deployment |
| Dashboard | In Progress | Critical | 85% complete |
| API Integration | Planning | Medium | Next sprint |


### Default with lengthy data

| OrderDate | Region  | Rep     | Item   | Units | UnitCost | Total  | Delivery date | Name    |
|-----------|---------|---------|--------|-------|----------|--------|---------------|---------|
| 1/6/2024  | East    | Jones   | Pencil | 95    | 1.99     | 189.05 | 1/9/2024      | Aravind |
| 1/23/2024 | Central | Kivell  | Binder | 50    | 19.99    | 999.50 | 1/27/2024     | Reshma  |
| 2/9/2024  | Central | Jardine | Pencil | 36    | 4.99     | 179.64 | 2/13/2024     | Guru    |
| 2/26/2024 | Central | Gill    | Pen    | 27    | 19.99    | 539.73 | 2/28/2024     | Mani    |
| 3/15/2024 | West    | Sorvino | Pencil | 56    | 2.99     | 167.44 | 3/24/2024     | Rosy    |


#### Default Grid (.table-default-grid)
<div class="table-default-grid">

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| User Auth | Completed | High | Ready for deployment |
| Dashboard | In Progress | Critical | 85% complete |
| API Integration | Planning | Medium | Next sprint |

</div>

---

### 2. **Green Theme vs Green Grid**

#### Regular Green (.table-green)
<div class="table-green">

| Project | Team Lead | Progress | Deadline | Status |
|---------|-----------|----------|----------|--------|
| E-commerce Platform | Sarah Chen | 92% | Oct 15 | On Track |
| Mobile App Redesign | David Kim | 78% | Oct 22 | Good Progress |
| API Migration | Maria Lopez | 85% | Oct 18 | Ahead of Schedule |

</div>

#### Regular Green with border(.table-green, .table-green-border)
<div class="table-green table-green-border">

| Project | Team Lead | Progress | Deadline | Status |
|---------|-----------|----------|----------|--------|
| E-commerce Platform | Sarah Chen | 92% | Oct 15 | On Track |
| Mobile App Redesign | David Kim | 78% | Oct 22 | Good Progress |
| API Migration | Maria Lopez | 85% | Oct 18 | Ahead of Schedule |

</div>

#### Green Grid with gray grid (.table-green, .table-default-grid)
<div class="table-green table-default-grid">

| Project | Team Lead | Progress | Deadline | Status |
|---------|-----------|----------|----------|--------|
| E-commerce Platform | Sarah Chen | 92% | Oct 15 | On Track |
| Mobile App Redesign | David Kim | 78% | Oct 22 | Good Progress |
| API Migration | Maria Lopez | 85% | Oct 18 | Ahead of Schedule |

</div>

#### Green Grid (.table-green-grid)
<div class="table-green-grid">

| Project | Team Lead | Progress | Deadline | Status |
|---------|-----------|----------|----------|--------|
| E-commerce Platform | Sarah Chen | 92% | Oct 15 | On Track |
| Mobile App Redesign | David Kim | 78% | Oct 22 | Good Progress |
| API Migration | Maria Lopez | 85% | Oct 18 | Ahead of Schedule |

</div>

---

### 3. **Cyber Theme vs Cyber Grid**

#### Regular Cyber (.table-cyber)
<div class="table-cyber">

| System | Status | CPU Usage | Memory | Uptime |
|--------|--------|-----------|--------|--------|
| Main Server | ONLINE | 34% | 67% | 99.9% |
| Database | ACTIVE | 45% | 82% | 99.8% |
| Cache | RUNNING | 23% | 34% | 100% |

</div>

#### Regular Cyber with border (.table-cyber, .table-cyber-border)
<div class="table-cyber table-cyber-border">

| System | Status | CPU Usage | Memory | Uptime |
|--------|--------|-----------|--------|--------|
| Main Server | ONLINE | 34% | 67% | 99.9% |
| Database | ACTIVE | 45% | 82% | 99.8% |
| Cache | RUNNING | 23% | 34% | 100% |

</div>

#### Regular Cyber with gray grid (.table-cyber, .table-default-grid)
<div class="table-cyber table-default-grid">

| System | Status | CPU Usage | Memory | Uptime |
|--------|--------|-----------|--------|--------|
| Main Server | ONLINE | 34% | 67% | 99.9% |
| Database | ACTIVE | 45% | 82% | 99.8% |
| Cache | RUNNING | 23% | 34% | 100% |

</div>

#### Cyber Grid (.table-cyber-grid)
<div class="table-cyber-grid">

| System | Status | CPU Usage | Memory | Uptime |
|--------|--------|-----------|--------|--------|
| Main Server | ONLINE | 34% | 67% | 99.9% |
| Database | ACTIVE | 45% | 82% | 99.8% |
| Cache | RUNNING | 23% | 34% | 100% |

</div>

---

### 4. **Luxury Theme vs Luxury Grid**

#### Regular Luxury (.table-luxury)
<div class="table-luxury">

| Investment | Value | Return | Risk Level | Rating |
|------------|-------|--------|------------|--------|
| Gold ETF | $125,000 | +8.5% | Low | ⭐⭐⭐⭐⭐ |
| Tech Stocks | $85,000 | +15.2% | High | ⭐⭐⭐⭐ |
| Bonds | $200,000 | +4.1% | Very Low | ⭐⭐⭐⭐⭐ |

</div>

#### Regular Luxury with border (.table-luxury, .table-luxury-border)
<div class="table-luxury table-luxury-border">

| Investment | Value | Return | Risk Level | Rating |
|------------|-------|--------|------------|--------|
| Gold ETF | $125,000 | +8.5% | Low | ⭐⭐⭐⭐⭐ |
| Tech Stocks | $85,000 | +15.2% | High | ⭐⭐⭐⭐ |
| Bonds | $200,000 | +4.1% | Very Low | ⭐⭐⭐⭐⭐ |

</div>

#### Regular Luxury with gray grid (.table-luxury, .table-default-grid)
<div class="table-luxury table-default-grid">

| Investment | Value | Return | Risk Level | Rating |
|------------|-------|--------|------------|--------|
| Gold ETF | $125,000 | +8.5% | Low | ⭐⭐⭐⭐⭐ |
| Tech Stocks | $85,000 | +15.2% | High | ⭐⭐⭐⭐ |
| Bonds | $200,000 | +4.1% | Very Low | ⭐⭐⭐⭐⭐ |

</div>

#### Luxury Grid (.table-luxury-grid)
<div class="table-luxury-grid">

| Investment | Value | Return | Risk Level | Rating |
|------------|-------|--------|------------|--------|
| Gold ETF | $125,000 | +8.5% | Low | ⭐⭐⭐⭐⭐ |
| Tech Stocks | $85,000 | +15.2% | High | ⭐⭐⭐⭐ |
| Bonds | $200,000 | +4.1% | Very Low | ⭐⭐⭐⭐⭐ |

</div>

---

### 5. **Ocean Theme vs Ocean Grid**

#### Regular Ocean (.table-ocean)
<div class="table-ocean">

| Department | Manager | Team Size | Budget | Performance |
|------------|---------|-----------|--------|-------------|
| Engineering | Alex Johnson | 45 | $2.1M | Excellent |
| Marketing | Sarah Davis | 12 | $850K | Good |
| Sales | Mike Chen | 28 | $1.2M | Outstanding |

</div>

#### Regular Ocean with border (.table-ocean, .table-ocean-border)
<div class="table-ocean table-ocean-border">

| Department | Manager | Team Size | Budget | Performance |
|------------|---------|-----------|--------|-------------|
| Engineering | Alex Johnson | 45 | $2.1M | Excellent |
| Marketing | Sarah Davis | 12 | $850K | Good |
| Sales | Mike Chen | 28 | $1.2M | Outstanding |

</div>

#### Regular Ocean gray grid (.table-ocean, .table-default-grid)
<div class="table-ocean table-default-grid">

| Department | Manager | Team Size | Budget | Performance |
|------------|---------|-----------|--------|-------------|
| Engineering | Alex Johnson | 45 | $2.1M | Excellent |
| Marketing | Sarah Davis | 12 | $850K | Good |
| Sales | Mike Chen | 28 | $1.2M | Outstanding |

</div>

#### Ocean Grid (.table-ocean-grid)
<div class="table-ocean-grid">

| Department | Manager | Team Size | Budget | Performance |
|------------|---------|-----------|--------|-------------|
| Engineering | Alex Johnson | 45 | $2.1M | Excellent |
| Marketing | Sarah Davis | 12 | $850K | Good |
| Sales | Mike Chen | 28 | $1.2M | Outstanding |

</div>

---

### 6. **Sunset Theme vs Sunset Grid**

#### Regular Sunset (.table-sunset)
<div class="table-sunset">

| Course | Instructor | Duration | Students | Rating |
|--------|------------|----------|----------|--------|
| React Advanced | Dr. Kim | 12 weeks | 145 | 4.9/5 |
| UI/UX Design | Prof. Chen | 8 weeks | 89 | 4.8/5 |
| Data Science | Dr. Wang | 16 weeks | 203 | 4.7/5 |

</div>

#### Regular Sunset with border (.table-sunset, .table-sunset-border)
<div class="table-sunset table-sunset-border">

| Course | Instructor | Duration | Students | Rating |
|--------|------------|----------|----------|--------|
| React Advanced | Dr. Kim | 12 weeks | 145 | 4.9/5 |
| UI/UX Design | Prof. Chen | 8 weeks | 89 | 4.8/5 |
| Data Science | Dr. Wang | 16 weeks | 203 | 4.7/5 |

</div>

#### Regular Sunset with gray grid (.table-sunset, .table-default-grid)
<div class="table-sunset table-default-grid">

| Course | Instructor | Duration | Students | Rating |
|--------|------------|----------|----------|--------|
| React Advanced | Dr. Kim | 12 weeks | 145 | 4.9/5 |
| UI/UX Design | Prof. Chen | 8 weeks | 89 | 4.8/5 |
| Data Science | Dr. Wang | 16 weeks | 203 | 4.7/5 |

</div>

#### Sunset Grid (.table-sunset-grid)
<div class="table-sunset-grid">

| Course | Instructor | Duration | Students | Rating |
|--------|------------|----------|----------|--------|
| React Advanced | Dr. Kim | 12 weeks | 145 | 4.9/5 |
| UI/UX Design | Prof. Chen | 8 weeks | 89 | 4.8/5 |
| Data Science | Dr. Wang | 16 weeks | 203 | 4.7/5 |

</div>

---

### 7. **Royal Theme vs Royal Grid**

#### Regular Royal (.table-royal)
<div class="table-royal">

| Product | Category | Price | Stock | Sales |
|---------|----------|-------|-------|-------|
| Premium Watch | Luxury | $2,499 | 23 | 156 |
| Diamond Ring | Jewelry | $5,999 | 8 | 89 |
| Gold Necklace | Accessories | $1,299 | 45 | 234 |

</div>

#### Regular Royal with border (.table-royal,.table-royal-border)
<div class="table-royal table-royal-border">

| Product | Category | Price | Stock | Sales |
|---------|----------|-------|-------|-------|
| Premium Watch | Luxury | $2,499 | 23 | 156 |
| Diamond Ring | Jewelry | $5,999 | 8 | 89 |
| Gold Necklace | Accessories | $1,299 | 45 | 234 |

</div>

#### Regular Royal with gray grid (.table-royal, .table-default-grid)
<div class="table-royal table-default-grid">

| Product | Category | Price | Stock | Sales |
|---------|----------|-------|-------|-------|
| Premium Watch | Luxury | $2,499 | 23 | 156 |
| Diamond Ring | Jewelry | $5,999 | 8 | 89 |
| Gold Necklace | Accessories | $1,299 | 45 | 234 |

</div>

#### Royal Grid (.table-royal-grid)
<div class="table-royal-grid">

| Product | Category | Price | Stock | Sales |
|---------|----------|-------|-------|-------|
| Premium Watch | Luxury | $2,499 | 23 | 156 |
| Diamond Ring | Jewelry | $5,999 | 8 | 89 |
| Gold Necklace | Accessories | $1,299 | 45 | 234 |

</div>

---

## 📊 **Existing Grid Systems**

### Professional Grid (.table-grid)
<div class="table-grid">

| Quarter | Revenue | Expenses | Profit | Growth | Forecast |
|---------|---------|----------|--------|--------|----------|
| Q1 2024 | $2.5M | $1.8M | $700K | +12% | $2.8M |
| Q2 2024 | $2.8M | $1.9M | $900K | +12% | $3.1M |
| Q3 2024 | $3.1M | $2.1M | $1.0M | +11% | $3.4M |

</div>

### Excel Style (.table-excel)
<div class="table-excel">

| ID | Product | Price | Qty | Total | Tax | Final |
|----|---------|-------|-----|-------|-----|-------|
| 001 | Laptop | $999 | 2 | $1,998 | $199.80 | $2,197.80 |
| 002 | Mouse | $29 | 5 | $145 | $14.50 | $159.50 |
| 003 | Keyboard | $79 | 3 | $237 | $23.70 | $260.70 |

</div>

---

## 🧪 **Responsive Behavior Tests**

### Wide Table Test (Auto-scroll when needed)
<div class="table-green">

| Very Long Column Header Name | Another Super Long Header | Data Column | Status | Progress Percentage | Completion Date | Notes and Comments | Priority Level | Team Assignment | Budget Allocation |
|------------------------------|---------------------------|-------------|--------|-------------------|-----------------|-------------------|---------------|-----------------|------------------|
| This is some very long content that should wrap properly in the cell when space is limited | More long content here | Data | Active | 85% | Oct 15, 2024 | This is a note that might be quite long | High | Team Alpha | $50,000 |
| Another row with even longer content that tests the text wrapping and table responsiveness features we implemented | Additional test content | Info | Pending | 67% | Oct 22, 2024 | Another lengthy note for testing | Medium | Team Beta | $75,000 |

</div>

### Grid Variant with Wide Content
<div class="table-luxury-grid">

| Investment Portfolio Name | Current Market Value | Expected Annual Return | Risk Assessment | Portfolio Manager | Last Review Date | Recommendation |
|---------------------------|---------------------|------------------------|-----------------|------------------|------------------|----------------|
| Conservative Growth Fund | $1,250,000 | 8.5% annually | Low to Medium Risk | Sarah Johnson, CFA | September 15, 2024 | Hold and monitor |
| Aggressive Tech Portfolio | $850,000 | 15.2% annually | High Risk with volatility | Michael Chen, Portfolio Manager | October 1, 2024 | Consider rebalancing |

</div>

---

## 🎯 **Usage Guide**

```html
<!-- Regular Themes -->
<div class="table-green">        <!-- Green theme -->
<div class="table-cyber">        <!-- Cyber theme -->
<div class="table-luxury">       <!-- Luxury theme -->
<div class="table-ocean">        <!-- Ocean theme -->
<div class="table-sunset">       <!-- Sunset theme -->
<div class="table-royal">        <!-- Royal theme -->

<!-- Grid Variants (with vertical lines) -->
<div class="table-green-grid">   <!-- Green with grid -->
<div class="table-cyber-grid">   <!-- Cyber with grid -->
<div class="table-luxury-grid">  <!-- Luxury with grid -->
<div class="table-ocean-grid">   <!-- Ocean with grid -->
<div class="table-sunset-grid">  <!-- Sunset with grid -->
<div class="table-royal-grid">   <!-- Royal with grid -->

<!-- Professional Grid Systems -->
<div class="table-grid">         <!-- Default grid -->
<div class="table-excel">        <!-- Excel-style -->
<div class="table-default-grid"> <!-- Default with lines -->

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data     | Data     | Data     |

</div>
```

---

## 🚀 **System Complete!**

The table styling system now provides:

🎨 **7 Beautiful Themes** with distinct visual identities  
🔲 **Grid Variants** for every theme with vertical lines  
📱 **Perfect Responsiveness** with auto-adjustment and text wrapping  
🎯 **Center Alignment** for optimal visual presentation  
⚡ **Professional Performance** with smooth animations and effects  

Choose the perfect table style for any content type, from project management to financial reports to technical documentation. Every table now looks professional and works perfectly across all devices!

**The complete table styling system is ready for production use! 🎉**