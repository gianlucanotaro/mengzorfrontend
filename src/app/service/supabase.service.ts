import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl = 'https://dxdtqwtxsrqorzilcthh.supabase.co';
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHRxd3R4c3Jxb3J6aWxjdGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwNzkyMjEsImV4cCI6MjAzMDY1NTIyMX0.mUfXYNwWptDejUmq-eA5-fYwWbuT1TvDEiu79Q9o-8U';
  private supabase = createClient(this.supabaseUrl, this.supabaseKey);

  constructor() {}

  async getTableData(tableName: string): Promise<any> {
    const { data, error } = await this.supabase
      .from(tableName)
      .select('*');
    if (error) throw new Error(error.message);
    return data;
  }
}
