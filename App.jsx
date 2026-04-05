import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Shield, 
  Users, 
  Target, 
  AlertTriangle, 
  Bug, 
  FileText, 
  BookOpen, 
  Award, 
  ExternalLink,
  ChevronDown,
  Play,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'
import './App.css'

// استيراد الصور
import heroImage from './assets/hero-cybersecurity.webp'
import securityShield from './assets/security-shield.jpg'
import redBlueTeams from './assets/red-blue-teams.png'
import ethicalHacking from './assets/ethical-hacking.png'
import incidentResponse from './assets/incident-response.png'
import malwareAnalysis from './assets/malware-analysis.png'
import learningRoadmap from './assets/learning-roadmap.png'

function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null)
  const [quizAnswers, setQuizAnswers] = useState({})

  // بيانات التخصصات
  const specialties = [
    {
      id: 'red-team',
      title: 'فريق الهجوم (Red Team)',
      description: 'محاكاة الهجمات السيبرانية لاختبار دفاعات المؤسسة',
      icon: Target,
      image: redBlueTeams,
      color: 'bg-red-500',
      skills: ['اختبار الاختراق', 'الهندسة الاجتماعية', 'استغلال الثغرات', 'تطوير الأدوات'],
      roadmap: [
        { title: 'أساسيات الشبكات', duration: '2-3 أشهر', completed: false },
        { title: 'أنظمة التشغيل (Linux/Windows)', duration: '2-3 أشهر', completed: false },
        { title: 'لغات البرمجة (Python, Bash)', duration: '3-4 أشهر', completed: false },
        { title: 'أدوات اختبار الاختراق', duration: '4-6 أشهر', completed: false },
        { title: 'شهادة CEH أو OSCP', duration: '6-12 شهر', completed: false }
      ],
      resources: [
        { name: 'TryHackMe', url: 'https://tryhackme.com', type: 'منصة تدريب' },
        { name: 'Hack The Box', url: 'https://hackthebox.com', type: 'مختبرات' },
        { name: 'Cybrary - Ethical Hacking', url: 'https://cybrary.it', type: 'دورات مجانية' },
        { name: 'أكاديمية طويق - الأمن السيبراني', url: 'https://tuwaiq.edu.sa', type: 'دورات عربية' }
      ]
    },
    {
      id: 'blue-team',
      title: 'فريق الدفاع (Blue Team)',
      description: 'مراقبة وحماية الأنظمة من التهديدات السيبرانية',
      icon: Shield,
      image: redBlueTeams,
      color: 'bg-blue-500',
      skills: ['مراقبة الأمان', 'تحليل السجلات', 'الاستجابة للحوادث', 'إدارة SIEM'],
      roadmap: [
        { title: 'أساسيات الأمن السيبراني', duration: '2-3 أشهر', completed: false },
        { title: 'مراقبة الشبكات', duration: '3-4 أشهر', completed: false },
        { title: 'أدوات SIEM (Splunk, ELK)', duration: '4-6 أشهر', completed: false },
        { title: 'تحليل البرمجيات الخبيثة', duration: '3-4 أشهر', completed: false },
        { title: 'شهادة Security+ أو CySA+', duration: '6-8 أشهر', completed: false }
      ],
      resources: [
        { name: 'Security Blue Team', url: 'https://securityblue.team', type: 'تدريب متخصص' },
        { name: 'SANS Blue Team', url: 'https://sans.org', type: 'دورات متقدمة' },
        { name: 'Splunk Fundamentals', url: 'https://splunk.com', type: 'تدريب مجاني' },
        { name: 'أكاديمية سطر - SOC', url: 'https://satr.codes', type: 'دورات عربية' }
      ]
    },
    {
      id: 'ethical-hacking',
      title: 'الاختراق الأخلاقي',
      description: 'اختبار أمان الأنظمة بطرق قانونية ومصرح بها',
      icon: Bug,
      image: ethicalHacking,
      color: 'bg-green-500',
      skills: ['اختبار الويب', 'اختبار الشبكات', 'اختبار التطبيقات', 'كتابة التقارير'],
      roadmap: [
        { title: 'أساسيات الشبكات والبروتوكولات', duration: '2-3 أشهر', completed: false },
        { title: 'أنظمة التشغيل وأوامر Linux', duration: '2-3 أشهر', completed: false },
        { title: 'أدوات Kali Linux', duration: '3-4 أشهر', completed: false },
        { title: 'اختبار تطبيقات الويب', duration: '4-5 أشهر', completed: false },
        { title: 'شهادة CEH أو OSCP', duration: '8-12 شهر', completed: false }
      ],
      resources: [
        { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', type: 'تدريب مجاني' },
        { name: 'OWASP Testing Guide', url: 'https://owasp.org', type: 'دليل شامل' },
        { name: 'VulnHub', url: 'https://vulnhub.com', type: 'مختبرات' },
        { name: 'أكاديمية حسوب - الأمن السيبراني', url: 'https://academy.hsoub.com', type: 'دورات عربية' }
      ]
    },
    {
      id: 'incident-response',
      title: 'الاستجابة للحوادث',
      description: 'التعامل مع الحوادث الأمنية وإدارة الأزمات',
      icon: AlertTriangle,
      image: incidentResponse,
      color: 'bg-orange-500',
      skills: ['تحليل الحوادث', 'الطب الشرعي الرقمي', 'إدارة الأزمات', 'التوثيق'],
      roadmap: [
        { title: 'أساسيات الأمن السيبراني', duration: '2-3 أشهر', completed: false },
        { title: 'الطب الشرعي الرقمي', duration: '4-6 أشهر', completed: false },
        { title: 'تحليل البرمجيات الخبيثة', duration: '3-4 أشهر', completed: false },
        { title: 'إدارة الحوادث والأزمات', duration: '2-3 أشهر', completed: false },
        { title: 'شهادة GCIH أو GCFA', duration: '8-10 أشهر', completed: false }
      ],
      resources: [
        { name: 'SANS Incident Response', url: 'https://sans.org', type: 'دورات متقدمة' },
        { name: 'NIST Incident Response Guide', url: 'https://nist.gov', type: 'دليل رسمي' },
        { name: 'Volatility Framework', url: 'https://volatilityfoundation.org', type: 'أداة تحليل' },
        { name: 'Coursera - Digital Forensics', url: 'https://coursera.org', type: 'دورات أكاديمية' }
      ]
    },
    {
      id: 'malware-analysis',
      title: 'تحليل البرمجيات الخبيثة',
      description: 'دراسة وتحليل البرمجيات الضارة لفهم سلوكها',
      icon: Bug,
      image: malwareAnalysis,
      color: 'bg-purple-500',
      skills: ['التحليل الثابت', 'التحليل الديناميكي', 'الهندسة العكسية', 'البرمجة'],
      roadmap: [
        { title: 'أساسيات البرمجة (C, Python, Assembly)', duration: '4-6 أشهر', completed: false },
        { title: 'أنظمة التشغيل والذاكرة', duration: '3-4 أشهر', completed: false },
        { title: 'أدوات التحليل الثابت', duration: '3-4 أشهر', completed: false },
        { title: 'أدوات التحليل الديناميكي', duration: '4-5 أشهر', completed: false },
        { title: 'شهادة GREM أو GCMA', duration: '10-12 شهر', completed: false }
      ],
      resources: [
        { name: 'Malware Analysis Bootcamp', url: 'https://malwareunicorn.org', type: 'دورة مجانية' },
        { name: 'SANS Malware Analysis', url: 'https://sans.org', type: 'دورات متقدمة' },
        { name: 'Practical Malware Analysis Book', url: 'https://practicalmalwareanalysis.com', type: 'كتاب' },
        { name: 'Any.run', url: 'https://any.run', type: 'منصة تحليل' }
      ]
    },
    {
      id: 'grc',
      title: 'الحوكمة والمطابقة (GRC)',
      description: 'إدارة المخاطر والامتثال للمعايير الأمنية',
      icon: FileText,
      image: securityShield,
      color: 'bg-indigo-500',
      skills: ['تقييم المخاطر', 'السياسات الأمنية', 'الامتثال', 'الإدارة'],
      roadmap: [
        { title: 'أساسيات الأمن السيبراني', duration: '2-3 أشهر', completed: false },
        { title: 'إدارة المخاطر', duration: '3-4 أشهر', completed: false },
        { title: 'المعايير والأطر (ISO 27001, NIST)', duration: '4-6 أشهر', completed: false },
        { title: 'القوانين والامتثال', duration: '3-4 أشهر', completed: false },
        { title: 'شهادة CISSP أو CISA', duration: '8-12 شهر', completed: false }
      ],
      resources: [
        { name: 'ISACA Training', url: 'https://isaca.org', type: 'دورات معتمدة' },
        { name: 'NIST Cybersecurity Framework', url: 'https://nist.gov', type: 'إطار عمل' },
        { name: 'ISO 27001 Foundation', url: 'https://iso.org', type: 'معيار دولي' },
        { name: 'Coursera - Risk Management', url: 'https://coursera.org', type: 'دورات أكاديمية' }
      ]
    }
  ]

  // أسئلة التقييم الذاتي
  const quizQuestions = [
    {
      id: 'interest',
      question: 'ما الذي يثير اهتمامك أكثر؟',
      options: [
        { value: 'attack', label: 'اكتشاف الثغرات والهجوم الأخلاقي', points: { 'red-team': 3, 'ethical-hacking': 3 } },
        { value: 'defense', label: 'حماية الأنظمة ومراقبة التهديدات', points: { 'blue-team': 3, 'incident-response': 2 } },
        { value: 'analysis', label: 'تحليل البيانات والبرمجيات الخبيثة', points: { 'malware-analysis': 3, 'blue-team': 2 } },
        { value: 'management', label: 'إدارة المخاطر والسياسات', points: { 'grc': 3, 'incident-response': 1 } }
      ]
    },
    {
      id: 'skills',
      question: 'ما هي نقاط قوتك؟',
      options: [
        { value: 'technical', label: 'المهارات التقنية والبرمجة', points: { 'red-team': 2, 'malware-analysis': 3, 'ethical-hacking': 2 } },
        { value: 'analytical', label: 'التحليل وحل المشكلات', points: { 'blue-team': 3, 'incident-response': 3, 'malware-analysis': 2 } },
        { value: 'communication', label: 'التواصل والإدارة', points: { 'grc': 3, 'incident-response': 2 } },
        { value: 'creative', label: 'التفكير الإبداعي والابتكار', points: { 'red-team': 3, 'ethical-hacking': 2 } }
      ]
    },
    {
      id: 'environment',
      question: 'أي بيئة عمل تفضل؟',
      options: [
        { value: 'hands-on', label: 'العمل العملي والتجريب', points: { 'red-team': 3, 'ethical-hacking': 3, 'malware-analysis': 2 } },
        { value: 'monitoring', label: 'المراقبة والتحليل المستمر', points: { 'blue-team': 3, 'incident-response': 2 } },
        { value: 'strategic', label: 'التخطيط الاستراتيجي', points: { 'grc': 3 } },
        { value: 'crisis', label: 'إدارة الأزمات والطوارئ', points: { 'incident-response': 3, 'blue-team': 1 } }
      ]
    }
  ]

  // حساب النتيجة
  const calculateQuizResult = () => {
    const scores = {}
    specialties.forEach(spec => scores[spec.id] = 0)

    Object.values(quizAnswers).forEach(answer => {
      const question = quizQuestions.find(q => q.options.some(opt => opt.value === answer))
      if (question) {
        const option = question.options.find(opt => opt.value === answer)
        if (option && option.points) {
          Object.entries(option.points).forEach(([specId, points]) => {
            scores[specId] += points
          })
        }
      }
    })

    const maxScore = Math.max(...Object.values(scores))
    const recommendedSpec = Object.keys(scores).find(key => scores[key] === maxScore)
    return specialties.find(spec => spec.id === recommendedSpec)
  }

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const isQuizComplete = Object.keys(quizAnswers).length === quizQuestions.length

  return (
    <div className="min-h-screen bg-gradient-bg arabic-text">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">ابدأ من هنا</h1>
            </div>
            <nav className="hidden md:flex space-x-6 space-x-reverse">
              <a href="#intro" className="text-gray-600 hover:text-primary transition-colors">المقدمة</a>
              <a href="#quiz" className="text-gray-600 hover:text-primary transition-colors">التقييم</a>
              <a href="#specialties" className="text-gray-600 hover:text-primary transition-colors">التخصصات</a>
              <a href="#resources" className="text-gray-600 hover:text-primary transition-colors">المصادر</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="intro" className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ابدأ من هنا... مسارك في عالم الأمن السيبراني
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              دليلك الشامل لدخول عالم الأمن السيبراني واختيار التخصص المناسب لك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-primary">
                <Play className="ml-2 h-5 w-5" />
                ابدأ التقييم الآن
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <BookOpen className="ml-2 h-5 w-5" />
                استكشف التخصصات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">ما هو الأمن السيبراني؟</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  الأمن السيبراني هو ممارسة حماية الأنظمة والشبكات والبرامج من الهجمات الرقمية. 
                  هذه الهجمات عادة ما تهدف إلى الوصول إلى المعلومات الحساسة أو تغييرها أو تدميرها، 
                  أو ابتزاز المال من المستخدمين أو مقاطعة العمليات التجارية العادية.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">3.5 مليار</div>
                    <div className="text-sm text-gray-600">هجمة سيبرانية يومياً</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">3.5 مليون</div>
                    <div className="text-sm text-gray-600">وظيفة شاغرة في المجال</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={heroImage} 
                  alt="الأمن السيبراني" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">التقييم الأولي الذاتي</h2>
              <p className="text-lg text-gray-600">
                اكتشف التخصص المناسب لك في مجال الأمن السيبراني
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>أجب على الأسئلة التالية لنساعدك في اختيار مسارك</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {quizQuestions.map((question, index) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="grid gap-3">
                      {question.options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3 space-x-reverse p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option.value}
                            onChange={(e) => handleQuizAnswer(question.id, e.target.value)}
                            className="text-primary"
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {isQuizComplete && (
                  <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-3 space-x-reverse mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-green-800">نتيجة التقييم</h3>
                    </div>
                    {(() => {
                      const result = calculateQuizResult()
                      return result ? (
                        <div>
                          <p className="text-green-700 mb-4">
                            بناءً على إجاباتك، ننصحك بالتخصص في: <strong>{result.title}</strong>
                          </p>
                          <Button 
                            onClick={() => setSelectedSpecialty(result)}
                            className="btn-primary"
                          >
                            استكشف هذا التخصص
                          </Button>
                        </div>
                      ) : null
                    })()}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">اختر تخصصك</h2>
            <p className="text-lg text-gray-600">
              استكشف التخصصات المختلفة في مجال الأمن السيبراني
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {specialties.map((specialty) => {
              const IconComponent = specialty.icon
              return (
                <Card 
                  key={specialty.id} 
                  className="card-hover cursor-pointer"
                  onClick={() => setSelectedSpecialty(specialty)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 space-x-reverse mb-4">
                      <div className={`p-3 rounded-lg ${specialty.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{specialty.title}</CardTitle>
                    </div>
                    <CardDescription className="text-right">
                      {specialty.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {specialty.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {specialty.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{specialty.skills.length - 3} المزيد
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Specialty Details Modal */}
          {selectedSpecialty && (
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className={`p-3 rounded-lg ${selectedSpecialty.color} text-white`}>
                      <selectedSpecialty.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{selectedSpecialty.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {selectedSpecialty.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedSpecialty(null)}
                    className="p-2"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="roadmap" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="roadmap">خريطة الطريق</TabsTrigger>
                    <TabsTrigger value="skills">المهارات المطلوبة</TabsTrigger>
                    <TabsTrigger value="resources">المصادر والدورات</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="roadmap" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">خريطة الطريق للتخصص</h3>
                      {selectedSpecialty.roadmap.map((step, index) => (
                        <div key={index} className="flex items-center space-x-4 space-x-reverse p-4 border rounded-lg">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold">{step.title}</h4>
                            <p className="text-sm text-gray-600">المدة المتوقعة: {step.duration}</p>
                          </div>
                          <Badge variant={step.completed ? "default" : "secondary"}>
                            {step.completed ? "مكتمل" : "قادم"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="skills" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">المهارات الأساسية</h3>
                        <div className="space-y-2">
                          {selectedSpecialty.skills.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2 space-x-reverse">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <img 
                          src={selectedSpecialty.image} 
                          alt={selectedSpecialty.title}
                          className="rounded-lg shadow-md w-full"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="resources" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedSpecialty.resources.map((resource, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">{resource.name}</h4>
                              <p className="text-sm text-gray-600">{resource.type}</p>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 ml-1" />
                                زيارة
                              </a>
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">مكتبة المصادر</h2>
            <p className="text-lg text-gray-600">
              مجموعة شاملة من المصادر والأدوات لتعلم الأمن السيبراني
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* منصات التدريب */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse">
                  <BookOpen className="h-5 w-5" />
                  <span>منصات التدريب</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="https://tryhackme.com" className="block p-2 hover:bg-gray-50 rounded">
                  TryHackMe
                </a>
                <a href="https://hackthebox.com" className="block p-2 hover:bg-gray-50 rounded">
                  Hack The Box
                </a>
                <a href="https://cybrary.it" className="block p-2 hover:bg-gray-50 rounded">
                  Cybrary
                </a>
                <a href="https://tuwaiq.edu.sa" className="block p-2 hover:bg-gray-50 rounded">
                  أكاديمية طويق
                </a>
              </CardContent>
            </Card>

            {/* الشهادات */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse">
                  <Award className="h-5 w-5" />
                  <span>الشهادات المهمة</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-2">CompTIA Security+</div>
                <div className="p-2">CEH (Certified Ethical Hacker)</div>
                <div className="p-2">OSCP</div>
                <div className="p-2">CISSP</div>
              </CardContent>
            </Card>

            {/* الأدوات */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse">
                  <Shield className="h-5 w-5" />
                  <span>الأدوات الأساسية</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-2">Kali Linux</div>
                <div className="p-2">Wireshark</div>
                <div className="p-2">Burp Suite</div>
                <div className="p-2">Splunk</div>
              </CardContent>
            </Card>

            {/* المجتمعات */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse">
                  <Users className="h-5 w-5" />
                  <span>المجتمعات العربية</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-2">مجتمع الأمن السيبراني العربي</div>
                <div className="p-2">منتدى حسوب</div>
                <div className="p-2">مجموعات تليجرام</div>
                <div className="p-2">قنوات يوتيوب عربية</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">الأسئلة المتكررة</h2>
              <p className="text-lg text-gray-600">
                إجابات على أهم الأسئلة حول مجال الأمن السيبراني
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "كم من الوقت أحتاج لدخول مجال الأمن السيبراني؟",
                  answer: "يمكن البدء في 6-12 شهر للمستوى المبتدئ، و2-3 سنوات للوصول لمستوى متقدم، حسب التخصص والجهد المبذول."
                },
                {
                  question: "هل أحتاج خلفية تقنية قوية؟",
                  answer: "ليس بالضرورة. يمكن البدء من الصفر، لكن المعرفة الأساسية بالحاسوب والشبكات مفيدة."
                },
                {
                  question: "ما هي أفضل الشهادات للمبتدئين؟",
                  answer: "CompTIA Security+ للأساسيات، CEH للاختراق الأخلاقي، وCySA+ لتحليل الأمان."
                },
                {
                  question: "كيف أحصل على خبرة عملية؟",
                  answer: "من خلال المختبرات الافتراضية، المشاريع الشخصية، التطوع، والتدريب في الشركات."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 space-x-reverse mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">ابدأ من هنا</h3>
            </div>
            <p className="text-gray-400 mb-6">
              دليلك الشامل لدخول عالم الأمن السيبراني
            </p>
            <div className="flex justify-center space-x-6 space-x-reverse">
              <a href="#intro" className="text-gray-400 hover:text-white transition-colors">المقدمة</a>
              <a href="#quiz" className="text-gray-400 hover:text-white transition-colors">التقييم</a>
              <a href="#specialties" className="text-gray-400 hover:text-white transition-colors">التخصصات</a>
              <a href="#resources" className="text-gray-400 hover:text-white transition-colors">المصادر</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
              <p>&copy; 2024 ابدأ من هنا - مسارك في عالم الأمن السيبراني</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

