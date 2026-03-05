import { Star, MessageCircle } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  {
    name: 'Sarah L.',
    avatarUrl: 'https://picsum.photos/seed/sarah/100/100',
    avatarFallback: 'SL',
    review: 'The real-time monitoring gave me and my family peace of mind. Knowing that a team was alerted to any anomaly in my heart condition was incredibly reassuring.',
    rating: 5,
  },
  {
    name: 'David R.',
    avatarUrl: 'https://picsum.photos/seed/david/100/100',
    avatarFallback: 'DR',
    review: 'HealthSense AI detected a critical drop in my oxygen levels overnight. The immediate alert allowed for a swift response that likely prevented a serious complication.',
    rating: 5,
  },
  {
    name: 'Maria G.',
    avatarUrl: 'https://picsum.photos/seed/maria/100/100',
    avatarFallback: 'MG',
    review: "As a caregiver for my elderly father, this platform has been a game-changer. I can check his vitals from anywhere and trust that the system is watching over him.",
    rating: 5,
  },
   {
    name: 'John K.',
    avatarUrl: 'https://picsum.photos/seed/john/100/100',
    avatarFallback: 'JK',
    review: 'The AI-generated reports are easy to understand and helped me have more informed conversations with my doctor. It\'s a brilliant tool for patient empowerment.',
    rating: 4,
  },
];

export function PatientReviews() {
  return (
    <DocSection title="What Our Patients Say" icon={<MessageCircle className="w-6 h-6" />} id="patient-reviews">
      <p>
        Hear from patients who have experienced the benefits of HealthSense AI firsthand. Their stories highlight the real-world impact of our proactive monitoring and anomaly detection system.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {reviews.map((review) => (
            <Card key={review.name} className="flex flex-col bg-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={review.avatarUrl} alt={review.name} data-ai-hint="person face" />
                        <AvatarFallback>{review.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                        <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-chart-4 fill-chart-4' : 'text-muted-foreground'}`} />
                            ))}
                        </div>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground italic">"{review.review}"</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </DocSection>
  );
}
