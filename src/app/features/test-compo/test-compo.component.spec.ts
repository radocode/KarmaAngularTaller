import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TestCompoComponent } from './test-compo.component';
import { TestService } from 'src/app/core/services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TestCompoComponent', () => {
  let component: TestCompoComponent;
  let fixture: ComponentFixture<TestCompoComponent>;

  // esto se ejecutara siempre antes de una prueba (o un "it"), pero asincronamente
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TestCompoComponent],
      providers: [
        {
          provide: TestService,
          useClass: FakeApiService,
        },
      ],
    })
      .compileComponents();
  }));

  // esto se ejecutara siempre antes de una prueba (o un "it"), la idea es refrescar el fixture a probar
  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should suma OK', () => {
    expect(component.suma(1, 1)).toBe(2);
  });

  it('should suma Not OK', () => {
    expect(component.suma(1, null)).not.toBe(2);
  });

  it('should check for divPrueba OK', () => {
    // esto permite a karma saber si el componente ha cambiado durante la prueba, siempre ejecutar!
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div').textContent).toContain('contenido div');
  });

  it('should check for divPrueba Not OK', () => {
    // esto permite a karma saber si el componente ha cambiado durante la prueba, siempre ejecutar!
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p').textContent).not.toContain('contenido div');
  });

  it('should check on wiki service', () => {
    // arrange
    const service = TestBed.get(TestService);
    const spyOnMethod = spyOn(service, 'search').and.callThrough();
    // act
    component.ngOnInit();
    // assert
    expect(spyOnMethod).toHaveBeenCalled();
  });
});

class FakeApiService {
  // Implement the methods you want to overload here
  search() {
    return of({ items: ['completo', 'italiano'] }); // * mocks the return of the real method
  }

  mandarMensajeMayusculas() {
    return 'HOLA';
  }
}