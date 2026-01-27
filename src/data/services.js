import ChatIcon from "@mui/icons-material/Chat";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";

export const services = [
  {
    id: "chatbots",
    name: "LLM-Based Chatbots",
    description: "Intelligent conversational AI for customer support, engagement, and automation",
    icon: ChatIcon,
    fullDescription: `Our LLM-based chatbot solutions leverage the latest language models to provide natural, context-aware conversations. Perfect for customer support, lead qualification, and 24/7 engagement.
    
    Features:
    - Multi-language support
    - Sentiment analysis
    - Seamless escalation to human agents
    - Integration with your existing systems
    - Real-time learning and improvement`,
    benefits: [
      "Reduce support costs by 60%",
      "Improve customer satisfaction scores",
      "24/7 availability",
      "Handle multiple conversations simultaneously"
    ]
  },
  {
    id: "rag",
    name: "Retrieval-Augmented Generation",
    description: "Context-aware responses from your data",
    icon: StorageIcon,
    fullDescription: `RAG systems combine the power of large language models with your proprietary data to provide accurate, contextual responses. Never worry about outdated information again.
    
    Key Capabilities:
    - Indexes your document repositories
    - Real-time data retrieval
    - Fact-checked responses
    - Transparent source citations
    - Continuous knowledge updates`,
    benefits: [
      "100% accurate responses",
      "Uses your proprietary data",
      "Explainable AI with citations",
      "Reduces hallucination risk"
    ]
  },
  {
    id: "mcp",
    name: "MCP Tools",
    description: "Model Context Protocol for seamless AI integration",
    icon: BuildIcon,
    fullDescription: `Implement Model Context Protocol tools to extend your AI capabilities with custom integrations. Connect to any API, database, or service.
    
    Supported Integrations:
    - REST APIs
    - GraphQL endpoints
    - Database queries
    - Third-party services
    - Custom business logic`,
    benefits: [
      "Extend AI capabilities",
      "Custom integrations",
      "Standardized protocol",
      "Easy maintenance"
    ]
  },
  {
    id: "agents",
    name: "AI Agents",
    description: "Autonomous systems that take action and learn",
    icon: SmartToyIcon,
    fullDescription: `Build autonomous AI agents that can make decisions, take actions, and improve over time. From workflow automation to complex business processes.
    
    Agent Capabilities:
    - Decision-making frameworks
    - Multi-step workflows
    - Error recovery
    - Performance optimization
    - Audit trails and logging`,
    benefits: [
      "Automate complex workflows",
      "Reduce manual intervention",
      "Improve process efficiency",
      "Scale operations"
    ]
  },
  {
    id: "fine-tuning",
    name: "AI Model Fine-tuning",
    description: "Optimize models for your specific use case",
    icon: TuneIcon,
    fullDescription: `Fine-tune foundation models to excel at your specific tasks. Improve accuracy, reduce costs, and achieve superior performance tailored to your domain.

    Fine-tuning Services:
    - Domain-specific model training
    - Custom dataset preparation
    - Performance benchmarking
    - Model optimization and compression
    - Continuous retraining pipelines`,
    benefits: [
      "Higher accuracy for your use case",
      "Reduced inference costs",
      "Better domain understanding",
      "Competitive advantage"
    ]
  },
  {
    id: "custom",
    name: "Custom AI Solutions",
    description: "Tailored implementations for complex problems",
    icon: SettingsIcon,
    fullDescription: `We don't believe in one-size-fits-all. Our expert team designs custom AI solutions tailored to your specific business challenges.

    Our Process:
    1. Deep discovery of your needs
    2. Architecture design and planning
    3. Proof of concept development
    4. Full implementation
    5. Ongoing optimization`,
    benefits: [
      "Purpose-built for your needs",
      "Expert guidance throughout",
      "Scalable architecture",
      "Long-term partnership"
    ]
  }
];

export const serviceDetails = {
  chatbots: {
    name: "LLM-Based Chatbots",
    description: "Enterprise-grade conversational AI",
    useCases: [
      { title: "Customer Support", desc: "Reduce ticket volume by 70% with AI-powered support agents" },
      { title: "Sales Qualification", desc: "Automatically qualify and route leads to sales teams" },
      { title: "Product Onboarding", desc: "Guide users through product features interactively" },
      { title: "FAQ Automation", desc: "Answer common questions instantly and accurately" }
    ]
  },
  rag: {
    name: "Retrieval-Augmented Generation",
    description: "Knowledge-grounded AI responses",
    useCases: [
      { title: "Company Knowledge Base", desc: "Instant access to all company policies and procedures" },
      { title: "Document Q&A", desc: "Ask questions about massive document collections" },
      { title: "Legal & Compliance", desc: "Retrieve relevant regulations and compliance information" },
      { title: "Research Assistant", desc: "Synthesize information from multiple research papers" }
    ]
  },
  mcp: {
    name: "MCP Tools",
    description: "Extensible AI integrations",
    useCases: [
      { title: "API Integration", desc: "Connect AI to your existing APIs and services" },
      { title: "Data Access", desc: "Grant AI agents access to real-time databases" },
      { title: "Business Logic", desc: "Embed complex business rules in AI workflows" },
      { title: "Third-party Services", desc: "Integrate SaaS platforms seamlessly" }
    ]
  },
  agents: {
    name: "AI Agents",
    description: "Autonomous workflow automation",
    useCases: [
      { title: "Process Automation", desc: "Automate end-to-end business processes" },
      { title: "Data Pipeline", desc: "Orchestrate complex data workflows" },
      { title: "Incident Response", desc: "Automated detection and response workflows" },
      { title: "Optimization", desc: "Continuous process optimization and improvement" }
    ]
  },
  "fine-tuning": {
    name: "AI Model Fine-tuning",
    description: "Specialized models for superior performance",
    useCases: [
      { title: "Domain Adaptation", desc: "Fine-tune models for healthcare, legal, finance, or other specialized domains" },
      { title: "Task Optimization", desc: "Achieve state-of-the-art results on specific classification or generation tasks" },
      { title: "Multilingual Support", desc: "Enhance model performance for non-English languages" },
      { title: "Cost Reduction", desc: "Use smaller fine-tuned models instead of expensive large models" }
    ]
  },
  custom: {
    name: "Custom AI Solutions",
    description: "Purpose-built for your business",
    useCases: [
      { title: "Strategic Consulting", desc: "Expert guidance on AI strategy and adoption" },
      { title: "MVP Development", desc: "Rapid prototyping of AI solutions" },
      { title: "Enterprise Implementation", desc: "Large-scale AI deployment and integration" },
      { title: "Optimization", desc: "Performance tuning and cost optimization" }
    ]
  }
};
