import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './service/supabase.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mengzorfrontend';

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.loadTableData();
  }

  async loadTableData() {
    try {
      const data = await this.supabaseService.getTableData('muscle');
      console.log(data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  }
}
