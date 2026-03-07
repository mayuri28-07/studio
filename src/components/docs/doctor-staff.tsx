import { Users } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const staff = [
  {
    name: 'Dr. Evelyn Reed',
    specialization: 'Cardiologist',
    avatarId: 'doctor-evelyn',
    avatarFallback: 'ER',
  },
  {
    name: 'Dr. Samuel Chen',
    specialization: 'Neurologist',
    avatarId: 'doctor-samuel',
    avatarFallback: 'SC',
  },
  {
    name: 'Dr. Olivia Grant',
    specialization: 'Pulmonologist',
    avatarId: 'doctor-olivia',
    avatarFallback: 'OG',
  },
  {
    name: 'Dr. Benjamin Carter',
    specialization: 'Endocrinologist',
    avatarId: 'doctor-benjamin',
    avatarFallback: 'BC',
  },
];

export function DoctorStaff() {
  return (
    <DocSection title="Meet Our Expert Team" icon={<Users className="w-6 h-6" />} id="doctor-staff">
      <p>
        Our team of dedicated and experienced medical professionals is the backbone of HealthSense AI. They provide the clinical expertise that guides our technology and ensures the highest standard of patient care.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {staff.map((doctor) => {
            const image = PlaceHolderImages.find(img => img.id === doctor.avatarId);
            return (
                <Card key={doctor.name} className="flex flex-col items-center text-center bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                    <Avatar className="w-24 h-24 border">
                        <AvatarImage src={image?.imageUrl} alt={doctor.name} data-ai-hint={image?.imageHint} />
                        <AvatarFallback>{doctor.avatarFallback}</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className="flex-grow p-4 pt-0">
                    <h4 className="font-semibold text-card-foreground">{doctor.name}</h4>
                    <p className="text-sm text-muted-foreground">{doctor.specialization}</p>
                </CardContent>
                </Card>
            )
        })}
      </div>
    </DocSection>
  );
}
