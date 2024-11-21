import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account and application preferences
        </p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="account" className="text-base px-6">Account</TabsTrigger>
          <TabsTrigger value="notifications" className="text-base px-6">Notifications</TabsTrigger>
          <TabsTrigger value="api" className="text-base px-6">API</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>First Name</Label>
                    <Input defaultValue="John" />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input defaultValue="Doe" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" defaultValue="john@example.com" />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input defaultValue="RoyBot AI" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Current Password</Label>
                    <Input type="password" />
                  </div>
                  <div>
                    <Label>New Password</Label>
                    <Input type="password" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
              
              <div className="space-y-4">
                {[
                  { label: 'Email Notifications', description: 'Receive updates and alerts via email' },
                  { label: 'Deal Updates', description: 'Get notified about changes to your deals' },
                  { label: 'Market Insights', description: 'Receive market analysis and trends' },
                  { label: 'Platform Updates', description: 'Stay informed about new features and improvements' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card className="p-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">API Configuration</h3>
              
              <div>
                <Label>API Key</Label>
                <div className="flex space-x-2">
                  <Input defaultValue="sk_live_..." type="password" className="font-mono" />
                  <Button variant="outline">Regenerate</Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Use this key to authenticate API requests from your applications.
                </p>
              </div>

              <div>
                <Label>Webhook URL</Label>
                <Input placeholder="https://your-domain.com/webhook" />
                <p className="text-sm text-gray-500 mt-2">
                  We&apos;ll send event notifications to this URL.
                </p>
              </div>

              <div className="flex justify-end">
                <Button>Save API Settings</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}