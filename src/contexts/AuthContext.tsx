
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { mockUsers } from '../data/mockData';
import { toast } from '@/components/ui/use-toast';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth on mount
    const storedUser = localStorage.getItem('neurohire-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call with 500ms delay
    setIsLoading(true);
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        // In a real app, we would validate credentials with backend
        // For now, we'll just check if the email exists in our mock data
        const foundUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
        
        if (foundUser) {
          setUser(foundUser);
          localStorage.setItem('neurohire-user', JSON.stringify(foundUser));
          toast({
            title: "Login successful",
            description: `Welcome back, ${foundUser.name}!`,
          });
          setIsLoading(false);
          resolve(true);
        } else {
          toast({
            title: "Login failed",
            description: "Invalid email or password.",
            variant: "destructive",
          });
          setIsLoading(false);
          resolve(false);
        }
      }, 500);
    });
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    // Simulate API call
    setIsLoading(true);
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        // Check if email is already in use
        const existingUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
        
        if (existingUser) {
          toast({
            title: "Registration failed",
            description: "Email is already in use.",
            variant: "destructive",
          });
          setIsLoading(false);
          resolve(false);
        } else {
          // Create new user
          const newUser: User = {
            id: `${mockUsers.length + 1}`,
            name,
            email,
            role,
            avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
          };
          
          // In a real app, we would send this to the backend
          // For now, just simulate success
          setUser(newUser);
          localStorage.setItem('neurohire-user', JSON.stringify(newUser));
          toast({
            title: "Registration successful",
            description: "Your account has been created.",
          });
          setIsLoading(false);
          resolve(true);
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('neurohire-user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
