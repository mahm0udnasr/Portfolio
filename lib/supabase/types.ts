export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          img: string;
          skills: string[];
          demo_link: string | null;
          source_code_link: string | null;
          priority: number;
          is_visible: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          img: string;
          skills: string[];
          demo_link?: string | null;
          source_code_link?: string | null;
          priority?: number;
          is_visible?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          img?: string;
          skills?: string[];
          demo_link?: string | null;
          source_code_link?: string | null;
          priority?: number;
          is_visible?: boolean;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

// Helper type for Project
export type Project = Database["public"]["Tables"]["projects"]["Row"];
