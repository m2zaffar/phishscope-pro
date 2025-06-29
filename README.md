# PhishScope Pro - Advanced Cybersecurity Platform

**Author:** Muzaffar Mikayilov

PhishScope Pro is a comprehensive cybersecurity SaaS platform designed for SOC teams, MSSPs, and security analysts. It provides AI-powered phishing email analysis, email authentication validation, OSINT enrichment, and threat attribution capabilities.

## 🚀 Features

### Core Functionality
- **Email Upload and Parsing**: Support for .eml, .msg, and raw email data
- **Email Authentication Analysis**: SPF, DKIM, and DMARC validation with natural language explanations
- **OSINT Enrichment**: Integration with AbuseIPDB, urlscan.io, VirusTotal, and WHOISXML APIs
- **AI Threat Attribution**: GPT-4 powered threat assessment and MITRE ATT&CK mapping
- **Campaign Correlation**: Cluster related incidents based on shared IOCs
- **Report Generation**: Export PDF, JSON, and Markdown reports

### User Experience
- **Localized Interface**: Default Azerbaijani with English fallback
- **Multi-tier Authentication**: Free, Pro, Team, and Enterprise plans
- **Responsive Design**: Optimized for all devices
- **Dark Mode Support**: Professional cybersecurity theme

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, TypeScript, Tailwind CSS, shadcn/ui
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **AI**: OpenAI GPT-4 API
- **OSINT APIs**: AbuseIPDB, urlscan.io, VirusTotal, WHOISXML
- **Deployment**: Vercel (Frontend), Railway/Render (Backend)

## 🏗️ Architecture

```
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   ├── analyze/           # Email analysis workflow
│   ├── reports/           # Report management
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── layout/           # Navigation and layout
│   ├── ui/               # shadcn/ui components
│   └── analysis/         # Analysis-specific components
├── lib/                  # Utility libraries
│   ├── supabase.ts       # Supabase client
│   └── localization.ts   # i18n utilities
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- OpenAI API key
- OSINT API keys (AbuseIPDB, urlscan.io, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/soon/phishscope-pro.git
   cd phishscope-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys and configuration.

4. **Set up Supabase**
   - Create a new Supabase project
   - Run the database migrations (see Database Schema section)
   - Update your `.env.local` with Supabase credentials

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main tables:

- `users` - User accounts and subscription tiers
- `email_analyses` - Email analysis records
- `campaigns` - Threat campaign correlation
- `iocs` - Indicators of Compromise
- `reports` - Generated reports

## 🔐 Authentication & Authorization

- **Free Tier**: 5 analyses/month, basic reports
- **Pro Tier**: Unlimited analyses, PDF exports, API access
- **Team Tier**: Multi-user, shared dashboard, SSO
- **Enterprise**: Custom features, SIEM integration

## 🌍 Localization

The application supports:
- **Azerbaijani (az)**: Default for users from Azerbaijan
- **English (en)**: Default for all other users
- Manual language switching available

## 📊 OSINT Integration

### Supported APIs
- **AbuseIPDB**: IP reputation and abuse reports
- **urlscan.io**: URL analysis and screenshots
- **VirusTotal**: File and URL scanning
- **WHOISXML**: Domain registration data
- **HaveIBeenPwned**: Email breach data (optional)

### Rate Limiting
- Free tier: Limited API calls per month
- Pro/Team tiers: Higher rate limits
- Enterprise: Custom rate limits

## 🤖 AI Analysis

The AI analysis engine provides:
- **Threat Scoring**: 0-100 risk assessment
- **MITRE ATT&CK Mapping**: Technique and tactic identification
- **Campaign Attribution**: Threat actor and campaign correlation
- **Natural Language Reports**: Localized threat summaries

## 📈 Monitoring & Analytics

- Real-time threat score distribution
- Campaign trend analysis
- IOC frequency tracking
- User activity metrics

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel
```

### Backend (Railway/Render)
The FastAPI backend should be deployed separately with:
- Email parsing capabilities
- OSINT API integrations
- AI analysis pipeline
- Report generation

## 🔒 Security Considerations

- All API keys stored securely in environment variables
- Rate limiting on all endpoints
- Input validation and sanitization
- Secure file upload handling
- HTTPS enforcement

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- Documentation: [docs.phishscope.pro](https://docs.phishscope.pro)
- Support Email: support@phishscope.pro
- Status Page: [status.phishscope.pro](https://status.phishscope.pro)

## 🏢 Enterprise

For enterprise features including:
- Custom SIEM integrations
- On-premise deployment
- Advanced threat hunting
- Dedicated support

Contact: enterprise@phishscope.pro

---
soon