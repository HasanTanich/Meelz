import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewPasswordComponent } from './reset-password/new-password/new-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ChefComponent } from './chef/chef.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PrivacyPolicyComponent } from './privacy/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './privacy/terms-of-use/terms-of-use.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { JwtModule } from '@auth0/angular-jwt';
import { ChefDetailsComponent } from './chef/chef-details/chef-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MasterClassesComponent } from './master-classes/master-classes.component';
import { FilterMasterClassPipe } from '../shared/pipes/filter-master-class.pipe';
import { MatSelectModule } from "@angular/material/select";
import { FiltersTab } from '../shared/filters-tab/filters-tab.component';
import { MasterClassesEditComponent } from './master-classes/master-classes-edit/master-classes-edit.component';
import { MasterClassesEditHeaderComponent } from './master-classes/master-classes-edit/master-classes-edit-header/master-classes-edit-header.component';
import { MasterClassesEditProgramComponent } from './master-classes/master-classes-edit/master-classes-edit-program/master-classes-edit-program.component';
import { MasterClassesEditRequiredComponent } from './master-classes/master-classes-edit/master-classes-edit-required/master-classes-edit-required.component';
import { MasterClassesEditParticipateComponent } from './master-classes/master-classes-edit/master-classes-edit-participate/master-classes-edit-participate.component';
import { MasterClassesEditDatesComponent } from './master-classes/master-classes-edit/master-classes-edit-dates/master-classes-edit-dates.component';
import { OrderByNumerical } from '../shared/pipes/order-by.pipe';
import { OrderByPipeAlphabatical } from '../shared/pipes/order-by.pipe';
import { CardOneComponent } from '../shared/card-one/card-one.component';
import { CardTwoComponent } from '../shared/card-two/card-two.component';
import { ChefDetailsHeaderComponent } from './chef/chef-details/chef-details-header/chef-details-header.component';
import { CardThreeComponent } from '../shared/card-three/card-three.component';
import { ChefDetailsTabMeelzComponent } from './chef/chef-details/chef-details-tab-meelz/chef-details-tab-meelz.component';
import { ChefDetailsTabRecipeComponent } from './chef/chef-details/chef-details-tab-recipe/chef-details-tab-recipe.component';
import { ChefDetailsTabChefstoreComponent } from './chef/chef-details/chef-details-tab-chefstore/chef-details-tab-chefstore.component';
import { ChefDetailsTabMasterclassesComponent } from './chef/chef-details/chef-details-tab-masterclasses/chef-details-tab-masterclasses.component';
import { ChefDetailsTabCheftableComponent } from './chef/chef-details/chef-details-tab-cheftable/chef-details-tab-cheftable.component';
import { ChefDetailsTabBlogpostsComponent } from './chef/chef-details/chef-details-tab-blogposts/chef-details-tab-blogposts.component';
import { TopPaginatorComponent } from '../shared/top-paginator/top-paginator.component';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { BottomPaginatorComponent } from '../shared/bottom-paginator/bottom-paginator.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { ChefTableComponent } from './chef-table/chef-table.component';
import { ChefTableDetailsComponent } from './chef-table/chef-table-details/chef-table-details.component';
import { ChefTableDetailInfoComponent } from './chef-table/chef-table-details/chef-table-detail-info/chef-table-detail-info.component';
import { ChefTableDetailMenuComponent } from './chef-table/chef-table-details/chef-table-detail-menu/chef-table-detail-menu.component';
import { MenuDetailsCarouselComponent } from './menu/menu-details/menu-details-carousel/menu-details-carousel.component';
import { MenuDetailsInfoComponent } from './menu/menu-details/menu-details-info/menu-details-info.component';
import { MenuDetailsCartComponent } from './menu/menu-details/menu-details-cart/menu-details-cart.component';


import { MealKitsDetailsIngredientsComponent } from './meal-kits/meal-kits-details/meal-kits-details-ingredients/meal-kits-details-ingredients.component';
import { MealKitsDetailsRecipeComponent } from './meal-kits/meal-kits-details/meal-kits-details-recipe/meal-kits-details-recipe.component';
import { MealKitsDetailsRequiredComponent } from './meal-kits/meal-kits-details/meal-kits-details-required/meal-kits-details-required.component';
import { MealKitsDetailsComponent } from "./meal-kits/meal-kits-details/meal-kits-details.component";
import { MealKitsComponent } from "./meal-kits/meal-kits.component";
import { CardFourComponent } from '../shared/card-four/card-four.component';
import { ChefTableDetailsHeaderComponent } from './chef-table/chef-table-details/chef-table-details-header/chef-table-details-header.component';
import { ChefTableCardComponent } from '../shared/chef-table-card/chef-table-card.component';
import { MealKitsDetailsInfoComponent } from './meal-kits/meal-kits-details/meal-kits-details-info/meal-kits-details-info.component';
import { MealKitsDetailsCartComponent } from './meal-kits/meal-kits-details/meal-kits-details-cart/meal-kits-details-cart.component';
import { ChefTableDetailsDatesComponent } from './chef-table/chef-table-details/chef-table-details-dates/chef-table-details-dates.component';
import { ChefTableDetailsRequiredComponent } from './chef-table/chef-table-details/chef-table-details-required/chef-table-details-required.component';
import { TrendingMenuCardComponent } from '../shared/trending-menu-card/trending-menu-card.component';
import { MealKitCardComponent } from "../shared/meal-kit-card/meal-kit-card.component";
import { CartComponent } from "../shared/cart/cart.component";
import { BlogCardsComponent } from '../shared/blog-cards/blog-cards.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { InfoAlertComponent } from '../shared/info-alert/info-alert.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchFiltersBoxComponent } from './dashboard/search-filters-box/search-filters-box.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchedItemComponent } from './dashboard/searched-item/searched-item.component';
import { ItemCardsComponent } from './dashboard/searched-item/item-cards/item-cards.component';

export function getToken() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NewPasswordComponent,
    ChefComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    ChefDetailsComponent,
    FilterPipe,
    FilterMasterClassPipe,
    MasterClassesComponent,
    MasterClassesEditComponent,
    MasterClassesEditHeaderComponent,
    MasterClassesEditProgramComponent,
    MasterClassesEditRequiredComponent,
    MasterClassesEditParticipateComponent,
    MasterClassesEditDatesComponent,
    OrderByNumerical,
    OrderByPipeAlphabatical,
    CardOneComponent,
    CardTwoComponent,
    ChefDetailsHeaderComponent,
    CardThreeComponent,
    ChefDetailsTabMeelzComponent,
    ChefDetailsTabRecipeComponent,
    ChefDetailsTabChefstoreComponent,
    ChefDetailsTabMasterclassesComponent,
    ChefDetailsTabCheftableComponent,
    ChefDetailsTabBlogpostsComponent,
    SearchBarComponent,
    FiltersTab,
    TopPaginatorComponent,
    BottomPaginatorComponent,
    MenuComponent,
    MenuDetailsComponent,
    ChefTableComponent,
    ChefTableDetailsComponent,
    ChefTableDetailInfoComponent,
    ChefTableDetailMenuComponent,
    MenuDetailsCarouselComponent,
    MenuDetailsInfoComponent,
    MenuDetailsCartComponent,
    MealKitsComponent,
    MealKitsDetailsComponent,
    MealKitsDetailsIngredientsComponent,
    MealKitsDetailsRecipeComponent,
    MealKitsDetailsRequiredComponent,
    CardFourComponent,
    ChefTableDetailsHeaderComponent,
    ChefTableCardComponent,
    MealKitsDetailsInfoComponent,
    MealKitsDetailsCartComponent,
    ChefTableDetailsDatesComponent,
    ChefTableDetailsRequiredComponent,
    TrendingMenuCardComponent,
    MealKitCardComponent,
    CartComponent,
    BlogCardsComponent,
    BlogComponent,
    BlogDetailComponent,
    InfoAlertComponent,
    SearchFiltersBoxComponent,
    SearchedItemComponent,
    ItemCardsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    IvyCarouselModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    Ng2OrderModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken
      }
    }),
    MatSelectModule,
    MatAutocompleteModule,
  ]
})
export class CoreModule { }
